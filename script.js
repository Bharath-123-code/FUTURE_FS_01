// ============================================
// PROJECT DATA
// ============================================
const projectData = [
    {
        title: "Simple Web Calculator",
        type: "frontend",
        info: "A responsive calculator application with modern UI, supporting basic arithmetic operations. Built with vanilla JavaScript for fast, lightweight performance.",
        github: "https://github.com/Bharath-123-code/calculator_webapp",
    },
    {
        title: "Quiz App",
        type: "fullstack",
        info: "Full-stack quiz platform with user authentication, scoring system, and progress tracking. Features real-time scoring and detailed performance analytics.",
        github: "https://github.com/Bharath-123-code/django-quiz-app",

    },
    {
        title: "Blood Bank Management",
        type: "fullstack",
        info: "Comprehensive blood bank management system handling donations, requests, and inventory. Includes donor profiles, compatibility matching, and reporting features.",
        github: "https://github.com/Bharath-123-code/blood-bank-management",
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const projectContainer = document.getElementById('project-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// ============================================
// PROJECT RENDERING
// ============================================
function renderProjects(category = 'all') {
    projectContainer.innerHTML = '';

    const filtered = category === 'all'
        ? projectData
        : projectData.filter(p => p.type === category);

    if (filtered.length === 0) {
        projectContainer.innerHTML = '<p>No projects found in this category.</p>';
        return;
    }

    filtered.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'p-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <span class="p-card-type">${project.type}</span>
            <h3>${project.title}</h3>
            <p>${project.info}</p>
            <div class="project-buttons">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
            </div>
        `;

        projectContainer.appendChild(card);
    });
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Render filtered projects
        renderProjects(button.dataset.type);
    });
});

// ============================================
// NAVIGATION
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        closeNavMenu();
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function closeNavMenu() {
    if (window.innerWidth <= 768) {
        navToggle.classList.remove('active');
        navLinksContainer.style.display = 'none';
    }
}

navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    if (navToggle.classList.contains('active')) {
        navLinksContainer.style.display = 'flex';
    } else {
        navLinksContainer.style.display = 'none';
    }
});

// ============================================
// SMOOTH SCROLL & NAV UPDATE
// ============================================
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    // Render initial projects
    renderProjects();

    // Observe elements for animation
    document.querySelectorAll('.p-card, .about-card, .stat').forEach(el => {
        observer.observe(el);
    });

    // Update nav on load
    updateActiveNavLink();

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log('✨ Portfolio loaded successfully!');
});

// ============================================
// HANDLE WINDOW RESIZE
// ============================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navLinksContainer.style.display = 'flex';
        } else {
            navLinksContainer.style.display = 'none';
        }
    }, 250);
});

// ============================================
// PERFORMANCE: Lazy Load Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// THEME PERSISTENCE (Optional)
// ============================================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

initializeTheme();
