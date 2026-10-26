// src/app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        // 1. Bloqueo temporal (Cooldown solo en producción)
        if (process.env.NODE_ENV === 'production') {
            const cookieStore = await cookies();
            const yaEnvio = cookieStore.get('expansis_lead_session');

            if (yaEnvio) {
                return NextResponse.json(
                    { error: 'Por favor espera 60 segundos antes de enviar otra solicitud.' },
                    { status: 429 }
                );
            }
        }

        const body = await request.json();
        const {
            name,
            company,
            websiteUrl,
            email,
            phone,
            currentStatus,
            budgetRange,
            timeline,
            message,
            serviceType
        } = body;

        // Validación de datos requeridos
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios en el formulario.' },
                { status: 400 }
            );
        }

        // Normalización del programa o servicio de interés
        let selectedServices = 'Sin especificar';
        if (Array.isArray(serviceType) && serviceType.length > 0) {
            selectedServices = serviceType.join(', ');
        } else if (typeof serviceType === 'string' && serviceType.trim() !== '') {
            selectedServices = serviceType;
        }

        // 2. Envío por Resend con todos los campos incluidos
        const { data, error } = await resend.emails.send({
            from: 'Expansis Pro Web <contacto@expansispro.com>',
            to: [process.env.CONTACT_RECEIVER_EMAIL || 'gonzalo@expansispro.com'],
            reply_to: email,
            subject: `[Nuevo Lead Web] ${name} - ${company || 'Particular'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #1f2937; background-color: #0c1018; color: #ffffff;">
                    <span style="font-size: 11px; font-family: monospace; color: #ff5c00; letter-spacing: 0.2em; text-transform: uppercase;">[ NUEVO CONTACTO ENTRANTE ]</span>
                    <h2 style="font-size: 20px; font-weight: 300; margin-top: 8px; margin-bottom: 24px; border-bottom: 1px solid #374151; padding-bottom: 12px;">Solicitud de Diagnóstico Web</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af; width: 40%;">Nombre:</td>
                            <td style="padding: 8px 0; font-weight: bold; color: #ffffff;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Empresa / Razón Social:</td>
                            <td style="padding: 8px 0; color: #ffffff;">${company || 'No especificada'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Email:</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff5c00; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Teléfono:</td>
                            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Sitio Web / Redes:</td>
                            <td style="padding: 8px 0; color: #ffffff;">${websiteUrl ? `<a href="${websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`}" target="_blank" style="color: #ff5c00; text-decoration: none;">${websiteUrl}</a>` : 'No indicada'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Programa de Interés:</td>
                            <td style="padding: 8px 0; color: #ff5c00; font-weight: bold;">${selectedServices}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Situación Actual:</td>
                            <td style="padding: 8px 0; color: #ffffff;">${currentStatus || 'No indicada'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Inversión Estimada:</td>
                            <td style="padding: 8px 0; color: #ffffff;">${budgetRange || 'A evaluar'}</td>
                        </tr>
                        ${timeline ? `
                        <tr>
                            <td style="padding: 8px 0; color: #9ca3af;">Plazo Estimado:</td>
                            <td style="padding: 8px 0; color: #ffffff;">${timeline}</td>
                        </tr>
                        ` : ''}
                    </table>

                    <div style="background-color: #111827; border-left: 3px solid #ff5c00; padding: 16px; margin-bottom: 20px;">
                        <span style="font-size: 11px; font-family: monospace; color: #9ca3af; text-transform: uppercase; display: block; margin-bottom: 6px;">Detalle del Requerimiento:</span>
                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #f3f4f6; white-space: pre-wrap;">${message}</p>
                    </div>

                    <p style="font-size: 11px; color: #6b7280; font-family: monospace; text-align: center; margin: 0; border-top: 1px solid #1f2937; padding-top: 16px;">
                        Expansis Pro // Agencia de Desarrollo Web y Marketing Digital en Chile //
                        <a href="https://expansispro.com" target="_blank" style="color: #ff5c00; text-decoration: none;">expansispro.com</a>
                    </p>
                </div>
            `
        });

        if (error) {
            console.error('Error de Resend:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // 3. Respaldo secundario opcional a SheetDB
        if (process.env.NEXT_PUBLIC_SHETDB_API_URL) {
            fetch(process.env.NEXT_PUBLIC_SHETDB_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    company: company || 'No especificada',
                    websiteUrl: websiteUrl || 'No indicada',
                    email,
                    phone,
                    currentStatus: currentStatus || 'No indicada',
                    budgetRange: budgetRange || 'A evaluar',
                    serviceType: selectedServices,
                    message,
                    timestamp: new Date().toLocaleString('es-CL')
                })
            }).catch(err => console.warn('Aviso: SheetDB falló pero el correo fue entregado', err));
        }

        // 4. Establecer cookie con expiración de 60 segundos
        const response = NextResponse.json({ success: true, id: data.id });
        response.cookies.set({
            name: 'expansis_lead_session',
            value: 'true',
            httpOnly: true,
            maxAge: 60,
            sameSite: 'strict',
            path: '/'
        });

        return response;
    } catch (error) {
        console.error('Error interno en /api/contact:', error);
        return NextResponse.json(
            { error: 'Error al procesar el envío de correo.' },
            { status: 500 }
        );
    }
}