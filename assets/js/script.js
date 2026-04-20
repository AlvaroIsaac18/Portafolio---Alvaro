document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Logic ---
    const menuBtn = document.querySelector('.menu-button');
    const navbar = document.querySelector('.menu-navbar');

    if (menuBtn && navbar) {
        function toggleMenu() {
            const isActive = navbar.classList.toggle('is-active');
            menuBtn.setAttribute('aria-expanded', isActive);
        }

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu on link click
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navbar.classList.remove('is-active'));
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
                navbar.classList.remove('is-active');
            }
        });
    }

    // --- Localization Logic ---
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Sobre mí",
            "nav-skills": "Habilidades",
            "nav-projects": "Proyectos",
            "nav-contact": "Contacto",
            "hero-title": "Transformando visiones en realidad con código y diseño.",
            "hero-description": "Como desarrollador full-stack en formación, me dedico a convertir ideas en aplicaciones web innovadoras. Explora mis últimos proyectos y mi enfoque en el desarrollo web moderno.",
            "btn-resume": "Resumen",
            "btn-contact": "Contacto",
            "about-main-title": "¡La pasión impulsa el propósito!",
            "about-label": "Biografía",
            "about-p1": "Hola, soy <span class='about-text__highlight'>Alvaro Patiño</span>, un apasionado del desarrollo web centrado en crear experiencias digitales hermosas y funcionales.",
            "about-p2": "Mi objetivo es dar vida a las ideas y convertir problemas complejos en interfaces simples e intuitivas que los usuarios disfruten.",
            "about-p3": "Ya sea trabajando en un sitio web o una aplicación, combino código limpio con un diseño cuidadoso para crear experiencias modernas y fluidas.",
            "stat-commitment": "Compromiso",
            "stat-projects": "Proyectos Personales",
            "stat-learning": "Aprendizaje Continuo",
            "skills-title": "Habilidades Técnicas",
            "skill-uiux": "Diseño UI/UX",
            "skill-responsive": "Responsivo",
            "projects-title": "Mis Proyectos",
            "project-1-desc": "Una tienda online con diseño premium y pasarela de pagos integrada.",
            "project-2-desc": "Sistema de gestión para inventarios y estadísticas en tiempo real.",
            "contact-title": "Hablemos",
            "contact-desc": "¿Tienes un proyecto en mente o solo quieres saludar? Mi buzón siempre está abierto.",
            "footer-rights": "Todos los derechos reservados."
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-title": "Turning vision into reality with code and design.",
            "hero-description": "As a full-stack developer in training, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and my focus on modern web development.",
            "btn-resume": "Resume",
            "btn-contact": "Contact",
            "about-main-title": "Passion Fuels Purpose!",
            "about-label": "Biography",
            "about-p1": "Hi, I'm <span class='about-text__highlight'>Alvaro Patiño</span>, a web developer passionate about creating beautiful and functional digital experiences.",
            "about-p2": "My goal is to bring ideas to life and turn complex problems into simple, intuitive interfaces that users enjoy.",
            "about-p3": "Whether working on a website or an app, I combine clean code with thoughtful design to create modern and fluid experiences.",
            "stat-commitment": "Commitment",
            "stat-projects": "Personal Projects",
            "stat-learning": "Continuous Learning",
            "skills-title": "Technical Skills",
            "skill-uiux": "UI/UX Design",
            "skill-responsive": "Responsive",
            "projects-title": "My Projects",
            "project-1-desc": "An online store with premium design and integrated payment gateway.",
            "project-2-desc": "Management system for inventory and real-time statistics.",
            "contact-title": "Let's Talk",
            "contact-desc": "Have a project in mind or just want to say hi? My inbox is always open.",
            "footer-rights": "All rights reserved."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });

        // Save preference
        localStorage.setItem('preferredLang', lang);
    }

    // Language Toggle Listeners
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // --- Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // --- Navbar Scroll Effect ---
    const header = document.querySelector('.navbar-m');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});