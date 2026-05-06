// src/data/contactConfig.js

export const contactData = {
    whatsapp: {
        number: "988318443", // Reemplaza por tu número real (sin el +)
        prefix: "+56 9",       // Para mostrar visualmente en el sitio
        defaultMessage: "Hola Expansis Pro, me gustaría solicitar más información sobre sus servicios.",
        // Función para generar el link dinámicamente
        getLink: function (customMessage) {
            const msg = customMessage || this.defaultMessage;
            return `https://wa.me/${this.number}?text=${encodeURIComponent(msg)}`;
        }
    },
    email: {
        address: "info@expansispro.com",
        subject: "Consulta desde el sitio web - Expansis Pro",
        getLink: function () {
            return `mailto:${this.address}?subject=${encodeURIComponent(this.subject)}`;
        }
    },
    socials: {
        linkedin: "https://linkedin.com/company/expansispro",
        instagram: "https://instagram.com/expansispro"
    }
};