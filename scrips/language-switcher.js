// Objeto com todas as traduções
const translations = {
    pt: {
        about:"Sobre mim",
        projects:"Projetos",
        skills:"Habilidades",
        intro: "Fábio design & Desenvolvedor front end. Localizado em Recife/Pe 🦦",
        phrase:"Se o caminho para o que você quer, parece muito fácil, então você está no caminho errado.",
        copy: "© Copyright 2025. Feito por Fábio.",
        profile:"Integrante da área da tecnologia, discente na formação acadêmica de ciências da computação, atuo no presente momento e detenho das habilidades de Desenvolvimento para Web (Trabalho a três anos comoDesigner Gráfico na criação de templates como banners, convites, cartão de visita, logos e artes em geral e para sublimação na confecção de estamparias, utilizando as ferramentas CorelDraw e Photoshop). Também carrego na minha bagagem de conhecimento e trabalho, proatividade, dinamismo, relacionamento interpessoal assim tendo como proposta o partilhamento de conhecimentos foco na busca do aprendizado contínuo educacional.",
        
    },
    en: {
        
        about:"About me",
        projects:"projects",
        skills:"skills",
        intro: "Fábio design & Developer frontend. Located in Recife/Pe 🦦",
        phrase:"If the path to what you want seems too easy, then you are on the wrong path.",
        copy: "© Copyright 2025. Made by Fábio.",
        profile:"I am a member of the technology area, a student of computer science, and I am currently working and have web development skills (I have worked for three years as a graphic designer creating templates such as banners, invitations, business cards, logos and art in general, and for sublimation in the production of prints, using CorelDraw and Photoshop tools). I also have in my knowledge and work experience, proactivity, dynamism, interpersonal relationships, and my goal is to share knowledge and focus on the pursuit of continuous educational learning.",
        
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