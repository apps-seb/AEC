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

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.glass-card, .gradient-pill');
    hiddenElements.forEach((el) => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        mobileMenu.classList.remove('translate-y-[-100%]', 'opacity-0');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('translate-y-[-100%]', 'opacity-0');
        document.body.style.overflow = ''; // Restore scrolling
    }

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        closeMenuBtn.addEventListener('click', closeMobileMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

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
                    ind.classList.remove('bg-white/50');
                    ind.classList.add('bg-white');
                } else {
                    ind.classList.add('bg-white/50');
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
    const modalImg = document.getElementById('modal-header-img');
    const modalIcon = document.getElementById('modal-header-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const subProjectsContainer = document.getElementById('sub-projects-container');

    function openModal(type) {
        const data = projectData[type];
        if(!data) return;

        // Populate Modal
        modalImg.src = data.image;
        modalIcon.innerHTML = data.icon;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.description;

        // Populate Sub-projects
        subProjectsContainer.innerHTML = '';
        data.projects.forEach((proj, index) => {
            const delay = index * 100;
            const card = document.createElement('div');
            card.className = `bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transform translate-y-4 opacity-0 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group`;
            card.style.transitionDelay = `${delay}ms`;

            card.innerHTML = `
                <div class="h-40 overflow-hidden relative">
                    <img src="${proj.img}" alt="${proj.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-slate-800 shadow-sm">${proj.type}</span>
                </div>
                <div class="p-5">
                    <h4 class="font-bold text-lg text-slate-800 mb-2">${proj.name}</h4>
                    <p class="text-slate-600 text-sm leading-relaxed">${proj.desc}</p>
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
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 50);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
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
});
