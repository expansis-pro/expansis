// src/utils/scrollUtils.js
export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    }
};