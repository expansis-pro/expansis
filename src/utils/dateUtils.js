// src/utils/dateUtils.js

const MESES = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11
};

export const parseBlogDate = (dateStr) => {
    if (!dateStr) return 0;

    // Divide cadenas como "28 Octubre 2026"
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const monthName = parts[1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const month = MESES[monthName] ?? 0;
        const year = parseInt(parts[2], 10);

        return new Date(year, month, day).getTime();
    }

    // Fallback si la fecha viniera en formato estándar ISO
    return new Date(dateStr).getTime() || 0;
};