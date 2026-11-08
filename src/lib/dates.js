// src/lib/dates.js
const MESES = {
    enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
    julio: 7, agosto: 8, septiembre: 9, setiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
};

/** "22 Septiembre 2026" | "2026-09-22" → "2026-09-22" (ISO 8601) */
export function toISODate(input) {
    if (!input) return undefined;
    const s = String(input).trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
    const [d, m, y] = s.split(/\s+/);
    const month = MESES[m?.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')];
    if (!month || !y) return undefined;
    return `${y}-${String(month).padStart(2, '0')}-${String(parseInt(d, 10)).padStart(2, '0')}`;
}

export const parseBlogDate = (s) => {
    const iso = toISODate(s);
    return iso ? Date.parse(`${iso}T00:00:00Z`) : 0;
};

/** "2026-09-22" → "22 de septiembre de 2026" */
export const formatDateEs = (iso) =>
    iso
        ? new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
            .format(new Date(`${iso}T00:00:00Z`))
        : '';