document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect Engine
    const codeElement = document.getElementById('code-typing');
    const codeSnippets = [
        {
            text: `<span class="syntax-comment">// KleurIT Modern Tech Stack</span>\n`,
            delay: 500
        },
        {
            text: `<span class="syntax-keyword">const</span> <span class="syntax-func">initProject</span> = (<span class="syntax-attr">client</span>) => {\n`,
            delay: 1000
        },
        {
            text: `  <span class="syntax-keyword">return</span> {\n`,
            delay: 500
        },
        {
            text: `    ui: <span class="syntax-string">'Premium Cinema'</span>,\n`,
            delay: 400
        },
        {
            text: `    engine: <span class="syntax-string">'Futuristic AI'</span>,\n`,
            delay: 400
        },
        {
            text: `    status: <span class="syntax-string">'Active Development'</span>\n`,
            delay: 400
        },
        {
            text: `  };\n`,
            delay: 500
        },
        {
            text: `};\n\n`,
            delay: 600
        },
        {
            text: `<span class="syntax-comment">// Connecting to Nexus API...</span>\n`,
            delay: 800
        },
        {
            text: `<span class="syntax-keyword">await</span> <span class="syntax-func">deploy</span>(<span class="syntax-string">'kleurit-prod'</span>);\n`,
            delay: 1200
        }
    ];

    let currentSnippetIndex = 0;
    let currentCharIndex = 0;

    function typeCode() {
        if (currentSnippetIndex < codeSnippets.length) {
            const snippet = codeSnippets[currentSnippetIndex];
            
            // For simplicity and to handle HTML tags correctly, 
            // we'll inject the whole snippet after its delay
            setTimeout(() => {
                codeElement.innerHTML += snippet.text;
                currentSnippetIndex++;
                typeCode();
                
                // Auto-scroll to bottom
                codeElement.scrollTop = codeElement.scrollHeight;
            }, snippet.delay);
        } else {
            // Reset after a while for loop effect
            setTimeout(() => {
                codeElement.innerHTML = '';
                currentSnippetIndex = 0;
                typeCode();
            }, 5000);
        }
    }

    typeCode();

    // Scroll Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Handling with Formspree
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            const formData = new FormData(contactForm);
            
            btn.innerText = 'PROCESANDO COMANDO...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.innerText = 'MISIÓN COMPLETADA';
                    btn.style.background = 'var(--tertiary)';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.background = 'var(--primary-container)';
                    }, 3000);
                } else {
                    throw new Error('Error en el servidor');
                }
            } catch (error) {
                btn.innerText = 'ERROR EN EL SISTEMA';
                btn.style.background = 'var(--error)';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = 'var(--primary-container)';
                }, 3000);
            }
        });
    }

    // Cursor Blink Effect (Optional enhancement)
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = '|';
    cursor.style.animation = 'blink 1s infinite';
    codeElement.appendChild(cursor);
});

// CSS for the cursor (injecting dynamically)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .cursor {
        color: var(--primary);
        font-weight: bold;
        margin-left: 2px;
    }
`;
document.head.appendChild(style);
