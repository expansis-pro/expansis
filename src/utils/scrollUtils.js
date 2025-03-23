// src/utils/scrollUtils.js
export const scrollToSection = (sectionId, callback) => {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        }); if (callback) {
            callback(); // Llama a la función de callback si existe
        }
    }
};