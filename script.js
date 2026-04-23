// Basic interactions
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Header styling on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Flip Card Logic
    const flipBtns = document.querySelectorAll('.flip-btn');
    flipBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent any parent handlers
            const cardInner = btn.closest('.flip-card-inner');
            if (cardInner) {
                cardInner.classList.toggle('flipped');
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once animated if we only want it to happen once
                // observer.unobserve(entry.target);
            } else {
                // Remove show class if you want elements to animate again when scrolling up
                // entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // Select a wider variety of elements to animate for a cohesive feel
    const elementsToAnimate = document.querySelectorAll(`
        .glass-card,
        .gradient-pill,
        section h2,
        section p.max-w-2xl,
        .flip-card,
        .tilt-card,
        .bg-white.rounded-2xl.shadow-sm,
        footer .grid > div
    `);

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('scroll-animate');

        // Add staggered delays for a cascading effect on adjacent elements
        // E.g., cards in a grid
        const parentGrid = el.closest('.grid');
        if (parentGrid) {
            const children = Array.from(parentGrid.children);
            const idx = children.indexOf(el);
            if (idx > 0) {
                el.style.transitionDelay = `${idx * 100}ms`;
            }
        }

        observer.observe(el);
    });

    // Carousel Logic
    const carousel = document.getElementById('hero-carousel');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('#carousel-indicators button');

    if (carousel && prevBtn && nextBtn && indicators.length > 0) {
        let currentSlide = 0;
        const slideCount = indicators.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            indicators.forEach((ind, i) => {
                if (i === currentSlide) {
                    ind.classList.remove('bg-white/40');
                    ind.classList.remove('hover:bg-white/60');
                    ind.classList.add('bg-white');
                } else {
                    ind.classList.add('bg-white/40');
                    ind.classList.add('hover:bg-white/60');
                    ind.classList.remove('bg-white');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateCarousel();
        });

        indicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                currentSlide = i;
                updateCarousel();
            });
        });

        // Auto advance carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        }, 5000);
    }

    // Scroll buttons
    const scrollBtns = document.querySelectorAll('.scroll-btn');
    scrollBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Project Data
    const projectData = {
        social: {
            title: "Proyectos Sociales",
            description: "Nuestras iniciativas sociales buscan fortalecer el tejido humano, la educación y el bienestar comunitario.",
            image: "https://images.unsplash.com/photo-1593113513832-8456885c3db8?q=80&w=1000&auto=format&fit=crop",
            icon: '<i class="fa-solid fa-hands-holding-child text-blue-400"></i>',
            projects: [
                {
                    name: "La Otra Cara de la Moneda",
                    type: "Podcast",
                    desc: "Un espacio de diálogo y reflexión comunitaria sobre nuestras realidades.",
                    img: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=600&auto=format&fit=crop"
                },
                {
                    name: "Vivienda Digna",
                    type: "Infraestructura",
                    desc: "Proyectos de mejoramiento y construcción de viviendas para familias vulnerables.",
                    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
                }
            ]
        },
        economico: {
            title: "Proyectos Económicos",
            description: "Desarrollamos modelos de economía solidaria para generar ingresos sostenibles y empoderar a la comunidad.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
            icon: '<i class="fa-solid fa-chart-line text-yellow-400"></i>',
            projects: [
                {
                    name: "Cooperativa de Ahorro",
                    type: "Finanzas Solidarias",
                    desc: "Fondo comunitario para el apoyo de emprendimientos locales.",
                    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=600&auto=format&fit=crop"
                }
            ]
        },
        productivo: {
            title: "Proyectos Productivos",
            description: "Fomentamos el desarrollo agrícola y la transformación de materias primas con valor agregado.",
            image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop",
            icon: '<i class="fa-solid fa-tractor text-green-400"></i>',
            projects: [
                {
                    name: "Cultivo de Pollos",
                    type: "Avicultura",
                    desc: "Producción avícola sostenible para garantizar la seguridad alimentaria.",
                    img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop"
                },
                {
                    name: "Café Especial",
                    type: "Agricultura",
                    desc: "Cultivo y procesamiento de café de alta calidad con sello comunitario.",
                    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop"
                },
                {
                    name: "Cultivo de Papa",
                    type: "Agricultura",
                    desc: "Producción tecnificada y sostenible de diversas variedades de papa.",
                    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop"
                }
            ]
        }
    };

    // Modal Logic
    const modal = document.getElementById('projects-modal');
    const modalContent = document.getElementById('projects-modal-content');
    const closeBtn = document.getElementById('close-modal-btn');

    // Modal Elements
    const modalIcon = document.getElementById('modal-header-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const subProjectsContainer = document.getElementById('sub-projects-container');
    const modalHeaderBg = document.getElementById('modal-header-bg');

    function openModal(type) {
        const data = projectData[type];
        if(!data) return;

        // Populate Modal
        modalIcon.innerHTML = data.icon;
        // Make the icon text white since we have a colored background now
        const iconElement = modalIcon.querySelector('i');
        if (iconElement) {
            iconElement.className = iconElement.className.replace(/text-[a-z]+-\d+/, 'text-white');
        }

        modalTitle.textContent = data.title;
        modalDesc.textContent = data.description;

        // Change background gradient based on type
        if (type === 'social') {
            modalHeaderBg.className = 'absolute inset-0 bg-gradient-to-b from-blue-400/60 to-white z-0 opacity-50';
            modalIcon.className = 'relative z-10 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-blue-400 to-blue-500 shadow-xl flex items-center justify-center text-5xl text-white mb-4 border border-white/20';
        } else if (type === 'economico') {
            modalHeaderBg.className = 'absolute inset-0 bg-gradient-to-b from-yellow-400/60 to-white z-0 opacity-50';
            modalIcon.className = 'relative z-10 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl flex items-center justify-center text-5xl text-white mb-4 border border-white/20';
        } else if (type === 'productivo') {
            modalHeaderBg.className = 'absolute inset-0 bg-gradient-to-b from-green-400/60 to-white z-0 opacity-50';
            modalIcon.className = 'relative z-10 w-24 h-24 rounded-[1.5rem] bg-gradient-to-br from-green-400 to-green-500 shadow-xl flex items-center justify-center text-5xl text-white mb-4 border border-white/20';
        }

        // Populate Sub-projects
        subProjectsContainer.innerHTML = '';
        data.projects.forEach((proj, index) => {
            const delay = index * 100;
            const card = document.createElement('div');
            card.className = `flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm transform translate-y-4 opacity-0 transition-all duration-500`;
            card.style.transitionDelay = `${delay}ms`;

            card.innerHTML = `
                <div class="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img src="${proj.img}" alt="${proj.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex-grow">
                    <h4 class="font-bold text-slate-800 text-sm">${proj.name}</h4>
                    <p class="text-slate-500 text-xs">${proj.type}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </div>
            `;
            subProjectsContainer.appendChild(card);

            // Trigger animation
            setTimeout(() => {
                card.classList.remove('translate-y-4', 'opacity-0');
            }, 50);
        });

        // Show Modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            modalContent.classList.remove('translate-y-full');
            modalContent.classList.add('translate-y-0');
        }, 50);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalContent.classList.remove('translate-y-0');
        modalContent.classList.add('translate-y-full');
        setTimeout(() => {
            modal.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
        }, 300);
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Interactive buttons
    const interactiveBtns = document.querySelectorAll('.interactive-btn');
    interactiveBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const type = btn.getAttribute('data-type');
            if (type) {
                openModal(type);
            }
        });
    });

    // Value Propositions Interactive Pill Carousel
    const pillsData = [
        {
            title: "Conexión",
            icon: '<i class="fa-solid fa-network-wired"></i>',
            bg: "from-blue-400 to-blue-500",
            shadow: "shadow-blue-500/40",
            blur: "bg-blue-300"
        },
        {
            title: "Calidad",
            icon: '<i class="fa-solid fa-award"></i>',
            bg: "from-orange-400 to-red-400",
            shadow: "shadow-orange-500/40",
            blur: "bg-orange-300"
        },
        {
            title: "Sostenibilidad",
            icon: '<i class="fa-solid fa-leaf"></i>',
            bg: "from-green-400 to-emerald-500",
            shadow: "shadow-green-500/40",
            blur: "bg-green-300"
        },
        {
            title: "Flexibilidad",
            icon: '<i class="fa-solid fa-arrows-spin"></i>',
            bg: "from-purple-400 to-indigo-500",
            shadow: "shadow-purple-500/40",
            blur: "bg-purple-300"
        },
        {
            title: "Inclusión",
            icon: '<i class="fa-solid fa-users"></i>',
            bg: "from-yellow-400 to-orange-400",
            shadow: "shadow-yellow-500/40",
            blur: "bg-yellow-300"
        }
    ];

    const pillsTrack = document.getElementById('pills-track');
    const carouselBgGradient = document.getElementById('carousel-bg-gradient');
    const valueCarouselContainer = document.getElementById('value-carousel-container');

    if (pillsTrack && pillsData.length > 0) {
        let activeIndex = Math.floor(pillsData.length / 2);

        // Render pills
        function renderPills() {
            pillsTrack.innerHTML = '';

            pillsData.forEach((pill, index) => {
                const diff = index - activeIndex;
                const isCenter = diff === 0;

                // Calculate position, scale and z-index based on distance from center
                let translateX = diff * 80; // Distance between items
                let scale = 1 - Math.abs(diff) * 0.2; // Scale down elements further away
                let zIndex = 10 - Math.abs(diff); // Center on top
                let opacity = 1 - Math.abs(diff) * 0.3; // Fade out elements further away

                // Limit scale and opacity so they don't disappear completely or get too small
                if (scale < 0.4) scale = 0.4;
                if (opacity < 0.1) opacity = 0;

                // If it's too far, hide it
                if (Math.abs(diff) > 2) {
                    opacity = 0;
                    scale = 0;
                }

                const pillEl = document.createElement('div');
                pillEl.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer flex flex-col items-center gap-4';
                pillEl.style.transform = `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`;
                pillEl.style.zIndex = zIndex;
                pillEl.style.opacity = opacity;

                // Content of the pill
                let innerHtml = '';

                if (isCenter) {
                    // Central Pill (Bigger, text below)
                    innerHtml = `
                        <div class="w-32 h-40 rounded-[2.5rem] bg-gradient-to-br ${pill.bg} shadow-2xl ${pill.shadow} flex items-center justify-center text-5xl text-white border border-white/20 transition-all duration-300">
                            ${pill.icon}
                        </div>
                        <span class="font-bold text-slate-800 text-lg absolute -bottom-10 whitespace-nowrap opacity-100 transition-opacity duration-300">${pill.title}</span>
                    `;

                    // Update background blur
                    if (carouselBgGradient) {
                        carouselBgGradient.className = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-lg h-[250px] rounded-[100px] blur-3xl opacity-40 transition-colors duration-700 pointer-events-none z-0 ${pill.blur}`;
                    }
                } else {
                    // Side Pills (Smaller, circular, no text or hidden text)
                    innerHtml = `
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-3xl text-slate-400 hover:text-slate-600 transition-colors duration-300">
                            ${pill.icon}
                        </div>
                        <span class="font-bold text-slate-800 text-lg absolute -bottom-10 whitespace-nowrap opacity-0 transition-opacity duration-300">${pill.title}</span>
                    `;
                }

                pillEl.innerHTML = innerHtml;

                // Click to focus
                pillEl.addEventListener('click', () => {
                    activeIndex = index;
                    renderPills();
                    resetAutoPlay();
                });

                pillsTrack.appendChild(pillEl);
            });
        }

        // Initial render
        renderPills();

    // 3D Tilt Effect
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation. Max rotation is 15 degrees
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            el.style.transition = 'transform 0.5s ease-out';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 0.1s ease-out';
        });
    });

        // Touch / Swipe logic
        let startX = 0;
        let isDragging = false;

        if(valueCarouselContainer) {
            valueCarouselContainer.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            }, {passive: true});

            valueCarouselContainer.addEventListener('touchmove', (e) => {
                if(!isDragging) return;
                const currentX = e.touches[0].clientX;
                const diffX = startX - currentX;

                // Swipe threshold
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0 && activeIndex < pillsData.length - 1) {
                        // Swipe left (next)
                        activeIndex++;
                        renderPills();
                        resetAutoPlay();
                        isDragging = false; // Require new touch for next swipe
                    } else if (diffX < 0 && activeIndex > 0) {
                        // Swipe right (prev)
                        activeIndex--;
                        renderPills();
                        resetAutoPlay();
                        isDragging = false;
                    }
                }
            }, {passive: true});

            valueCarouselContainer.addEventListener('touchend', () => {
                isDragging = false;
            });

            // Mouse drag (for desktop testing)
            valueCarouselContainer.addEventListener('mousedown', (e) => {
                startX = e.clientX;
                isDragging = true;
            });

            window.addEventListener('mousemove', (e) => {
                if(!isDragging) return;
                const currentX = e.clientX;
                const diffX = startX - currentX;

                if (Math.abs(diffX) > 50) {
                    if (diffX > 0 && activeIndex < pillsData.length - 1) {
                        activeIndex++;
                        renderPills();
                        resetAutoPlay();
                        isDragging = false;
                    } else if (diffX < 0 && activeIndex > 0) {
                        activeIndex--;
                        renderPills();
                        resetAutoPlay();
                        isDragging = false;
                    }
                }
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
            });
        }

        // Autoplay
        let autoPlayInterval;

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                activeIndex = (activeIndex + 1) % pillsData.length;
                renderPills();
            }, 3000); // Change every 3 seconds
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Start autoplay initially
        startAutoPlay();
    }
});
