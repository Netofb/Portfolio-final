// Objeto com todas as traduções
const translations = {
    pt: {
        about:"Sobre mim",
        projects:"Projetos",
        skills:"Habilidades",
        intro: "Fábio design & Desenvolvedor front end. Localizado em Recife/Pe 🦦",
        phrase:"Se o caminho para o que você quer, parece muito fácil, então você está no caminho errado.",
        copy: "© Copyright 2025. Feito por Fábio.",
        profile:"Sou um profissional de TI em transição para Desenvolvimento Full-Stack, combinando experiência em suporte técnico com habilidades sólidas em programação. Minha jornada na área me ensinou a resolver problemas de forma criativa e eficiente, e agora estou direcionando essa capacidade para construir soluções robustas por meio do código. Tenho conhecimentos em: Front-end: React, JavaScript, Sass, Tailwind CSS e Bootstrap Back-end: PHP e Python para lógica e integrações Banco de dados: PostgreSQL, MongoDB e SQLite Além disso, me mantenho em constante aprendizado, explorando novas tecnologias e frameworks para expandir meu conhecimento e entregar projetos cada vez mais eficientes.",
        
        },
    en: {
        
        about:"About me",
        projects:"projects",
        skills:"skills",
        intro: "Fábio design & Developer frontend. Located in Recife/Pe 🦦",
        phrase:"If the path to what you want seems too easy, then you are on the wrong path.",
        copy: "© Copyright 2025. Made by Fábio.",
        profile:"I'm an IT professional transitioning into Full-Stack Development, combining my technical support experience with solid programming skills. My journey in this field has taught me to solve problems creatively and efficiently, and I'm now focusing this ability on building robust solutions through code. My skills include: Front-end: React, JavaScript, Sass, Tailwind CSS and Bootstrap; Back-end: PHP and Python for logic and integrations; Databases: PostgreSQL, MongoDB and SQLite. Additionally, I'm constantly learning, exploring new technologies and frameworks to expand my knowledge and deliver increasingly efficient projects.",
        
    }
};

// Função para carregar o idioma salvo ou usar o padrão
function loadLanguage() {
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    return savedLanguage || 'pt'; // Idioma padrão: português
}

// Função para aplicar as traduções
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang;
    
    // Atualiza o texto do botão
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    }
}

// Função para trocar o idioma
function toggleLanguage() {
    const currentLang = loadLanguage();
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    
    localStorage.setItem('portfolioLanguage', newLang);
    applyTranslations(newLang);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carrega o idioma salvo
    const currentLang = loadLanguage();
    applyTranslations(currentLang);
    
    // Configura o evento do botão
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleLanguage);
    }
});


// Função para aplicar as traduções com animação
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Fade out
    elements.forEach(element => {
        element.classList.add('fade-out');
    });
    
    // Espera a animação terminar antes de mudar o texto
    setTimeout(() => {
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
        // Remove a classe fade-in após a animação
        setTimeout(() => {
            elements.forEach(element => {
                element.classList.remove('fade-in');
            });
        }, 300);
    }, 300);
    
    document.documentElement.lang = lang;
    
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    }
}