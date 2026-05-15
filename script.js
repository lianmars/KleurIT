document.addEventListener('DOMContentLoaded', () => {
    // 1. Premium Typing Effect Engine
    const codeElement = document.getElementById('code-typing');
    if (codeElement) {
        const codeSnippets = [
            { text: `// KleurIT Systems Initialization\n`, delay: 600 },
            { text: `import { Engine } from '@kleurit/core';\n\n`, delay: 800 },
            { text: `const app = new Engine({\n`, delay: 400 },
            { text: `  environment: 'production',\n`, delay: 300 },
            { text: `  architecture: 'serverless',\n`, delay: 300 },
            { text: `  performance: 'ultra',\n`, delay: 300 },
            { text: `});\n\n`, delay: 500 },
            { text: `await app.deploy();\n`, delay: 800 },
            { text: `// System Online: Latency 0.04ms\n`, delay: 1000 }
        ];

        let currentSnippetIndex = 0;

        function typeCode() {
            if (currentSnippetIndex < codeSnippets.length) {
                const snippet = codeSnippets[currentSnippetIndex];
                
                setTimeout(() => {
                    // Very simple syntax highlighting replacement logic
                    let formattedText = snippet.text
                        .replace(/import|from|const|new|await/g, match => `<span style="color:#a1a1aa">${match}</span>`)
                        .replace(/'.*?'/g, match => `<span style="color:#e0e0e0">${match}</span>`)
                        .replace(/\/\/.*$/gm, match => `<span style="color:#71717a">${match}</span>`);

                    codeElement.innerHTML += formattedText;
                    currentSnippetIndex++;
                    typeCode();
                    
                    codeElement.scrollTop = codeElement.scrollHeight;
                }, snippet.delay);
            } else {
                setTimeout(() => {
                    codeElement.innerHTML = '';
                    currentSnippetIndex = 0;
                    typeCode();
                }, 8000); // Wait 8 seconds before restarting
            }
        }

        typeCode();
        
        const cursor = document.createElement('span');
        cursor.innerHTML = '█';
        cursor.style.animation = 'blink 1s step-end infinite';
        cursor.style.color = '#fff';
        codeElement.appendChild(cursor);
    }

    // 2. Mouse Spotlight Tracking for Cards
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 3. Smooth Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 5. Mobile Menu Logic
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 6. Contact Form Handle (Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            const formData = new FormData(contactForm);
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    btn.innerText = 'Message Sent';
                    btn.style.background = '#e0e0e0';
                    btn.style.color = '#000';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                        btn.style.color = '';
                    }, 4000);
                } else {
                    throw new Error('Server Error');
                }
            } catch (error) {
                btn.innerText = 'Failed to send';
                btn.style.background = '#ef4444';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 4000);
            }
        });
    }
});

// Cursor animation style injection
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);
