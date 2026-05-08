// Datos Dummy de Firmantes
const firmantes = [
    {
        id: 1,
        nombre: "Carlos Restrepo",
        rol: "Firmante y Agricultor",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        historiaHtml: `
            <p>Carlos pasó gran parte de su juventud inmerso en la espesura de la selva colombiana, enfrentando la dureza del conflicto armado y noches interminables de incertidumbre y dolor.</p>
            <p>Hoy, tras firmar el acuerdo de paz, ha encontrado en la tierra la paz que las armas jamás le dieron. Lidera un hermoso proyecto de cultivo de café orgánico en las montañas del Tolima.</p>
            <p>"El verdadero cambio empezó cuando me di cuenta de que mis manos podían sembrar vida en lugar de destruirla", menciona Carlos con la mirada llena de esperanza.</p>
        `,
        cuento: [
            { img: "https://images.unsplash.com/photo-1505934333218-8fe219d08316?q=80&w=800", text: "Había una vez un joven llamado Carlos, cuyos días transcurrían entre las sombras largas y húmedas de la espesa selva colombiana. Su vida estaba marcada por el peso del fusil y el eco lejano del conflicto." },
            { img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800", text: "Fueron años de duras tormentas, noches frías de miedo y días de incertidumbre. En el silencio de la selva, Carlos a menudo cerraba los ojos, soñando con un lugar donde el ruido ensordecedor fuera reemplazado por la calma." },
            { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800", text: "Un día luminoso, tras la firma de la paz, la selva dejó de ser un refugio de guerra para convertirse en un paisaje de posibilidades. Carlos guardó su arma para siempre, sintiendo cómo un enorme peso se desvanecía de sus hombros." },
            { img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800", text: "Sus manos, antes curtidas por la rudeza y la tristeza, descubrieron la magia de la tierra. Comenzó a sembrar con infinito amor y dedicación, cuidando pequeñas semillas que pronto se transformaron en frondosos arbustos de café." },
            { img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800", text: "El trabajo honesto en el campo empezó a sanar sus heridas más profundas. Cada grano de café que cosechaba representaba una victoria de la vida, un paso más hacia la reconciliación y un abrazo cálido a su comunidad." },
            { img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800", text: "Hoy, Carlos camina por sus cafetales con el corazón lleno de paz. Su historia es un testimonio viviente de que, sin importar cuán oscuro haya sido el bosque, la luz de la esperanza siempre puede hacernos florecer de nuevo." }
        ]
    },
    {
        id: 2,
        nombre: "Marta Gómez",
        rol: "Firmante y Tejedora",
        foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        historiaHtml: `
            <p>Marta pasó más de 15 años en la selva, perdiendo su juventud entre el fango, el frío y el miedo constante de no ver un mañana. El acuerdo de paz significó para ella un renacer inesperado.</p>
            <p>Ahora, en un pequeño y colorido taller, hila historias de reconciliación junto a mujeres víctimas del conflicto, transformando el dolor en hermosos tejidos.</p>
            <p>Su proyecto textil no solo ha sido un éxito económico, sino un poderoso espacio de sanación y empoderamiento femenino.</p>
        `,
        cuento: [
            { img: "https://images.unsplash.com/photo-1605814046045-8b17b6a67fbd?q=80&w=800", text: "Desde muy joven, Marta conoció los rincones más agrestes de la selva. La humedad, el fango y las marchas interminables tejieron en su corazón nudos apretados de tristeza y soledad." },
            { img: "https://images.unsplash.com/photo-1581452902640-1e5f8ceb4d58?q=80&w=800", text: "Había momentos de llanto silencioso bajo la lluvia implacable, preguntándose si algún día el mundo dejaría de ser un campo de batalla. La selva era su única confidente, guardiana de sus miedos y sus anhelos más profundos." },
            { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", text: "Pero el milagro de la paz llegó como un amanecer brillante. Marta dejó atrás las botas desgastadas y el uniforme oscuro, tomando la valiente decisión de desatar los nudos del pasado para comenzar a tejer una nueva vida." },
            { img: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=800", text: "Buscó hilos de todos los colores vibrantes del arcoíris y se unió a otras mujeres valientes, algunas que alguna vez estuvieron en lados opuestos. Juntas descubrieron que el perdón era el hilo más fuerte de todos." },
            { img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800", text: "El taller de costura se llenó rápidamente de risas, canciones de cuna y lágrimas compartidas. Cada puntada cerraba una vieja herida, creando mantas maravillosas que abrazaban y daban calor a las almas lastimadas." },
            { img: "https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=800", text: "Hoy, Marta es la maestra de los colores y la esperanza. Ha demostrado con creces que, incluso después del invierno más desgarrador, el amor y la unión pueden reconstruir un mundo lleno de belleza y paz." }
        ]
    },
    {
        id: 3,
        nombre: "Luis Felipe",
        rol: "Firmante y Maestro",
        foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        historiaHtml: `
            <p>Luis Felipe creció rodeado de combates, aprendiendo a sobrevivir en un entorno hostil donde los libros y las letras parecían un lujo inalcanzable. El proceso de paz le dio la oportunidad de reescribir su destino.</p>
            <p>Conmovido por la inocencia de los niños de su comunidad, hoy se dedica a enseñar lectura y escritura en zonas rurales apartadas, convencido de que la educación es la verdadera semilla de la paz.</p>
        `,
        cuento: [
            { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", text: "Luis Felipe pasó muchos años de su vida recorriendo trochas oscuras y senderos peligrosos, donde el sonido ensordecedor de los combates ahogaba cualquier canción de cuna. Su mundo estaba pintado en tonos grises y de temor." },
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", text: "En medio de la rudeza de la selva, Luis Felipe atesoraba un secreto: un pequeño cuaderno desgastado donde dibujaba sueños de un país diferente, un país donde los niños pudieran correr libremente sin mirar al cielo con miedo." },
            { img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800", text: "Cuando finalmente se firmó el acuerdo de paz, Luis Felipe sintió que despertaba de una larga pesadilla. Pudo por fin abrazar a su familia sin el temor a despedidas forzadas y descubrió el poder transformador de la libertad." },
            { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", text: "Decidió entonces que su nueva misión sería ser un sembrador de palabras. Reunió a los niños de su pueblo bajo un gran árbol y, con paciencia infinita, les enseñó que las letras son herramientas mágicas para construir puentes." },
            { img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=800", text: "Las aulas improvisadas se llenaron de luz e imaginación. Luis les contaba historias de héroes valientes que usaban libros y abrazos para vencer la oscuridad, inspirando a cada niño a soñar en grande." },
            { img: "https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=800", text: "Hoy, Luis Felipe es un faro de esperanza en su comunidad. Ha demostrado que el conocimiento salva vidas y que, a través de la educación y el amor, es posible escribir un capítulo luminoso en la historia de la humanidad." }
        ]
    }
];

let currentProfile = null;
let pageFlip = null;
let synth = window.speechSynthesis;
let isTTSActive = false;
const flipSound = new Audio('https://cdn.freesound.org/previews/415/415209_5121236-lq.mp3');

// Helper para envolver palabras
function wrapWordsWithSpans(text) {
    return text.split(' ').map((word, index) => {
        return `<span class="word-span" data-word-index="${index}">${word}</span>`;
    }).join(' ');
}

// Inicialización de la Galería
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('directorio-grid');

    firmantes.forEach((f, i) => {
        const delay = i * 150;
        const card = document.createElement('div');
        card.className = `solid-card-blue p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all scroll-animate delay-[${delay}ms]`;
        card.onclick = () => loadProfile(f.id);

        card.innerHTML = `
            <div class="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white/30 shadow-lg">
                <img src="${f.foto}" alt="${f.nombre}" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold text-white mb-1">${f.nombre}</h3>
            <p class="text-sky-100 text-sm font-medium mb-4">${f.rol}</p>
            <div class="mt-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                <i class="fa-solid fa-arrow-right -rotate-45"></i>
            </div>
        `;
        grid.appendChild(card);
    });

    // Observer para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('show');
        });
    });
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});

// Navegación de Vistas
function showView(viewId) {
    // Parar audios/videos si se sale del perfil
    document.getElementById('profile-video').pause();
    document.getElementById('profile-audio').pause();
    stopTTS();

    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active');
        setTimeout(() => sec.classList.add('hidden'), 500); // Fade out
    });

    const target = document.getElementById(`view-${viewId}`);
    target.classList.remove('hidden');
    // Forzar reflow
    void target.offsetWidth;
    target.classList.add('active');

    if(viewId === 'home') window.scrollTo(0,0);
}

// Cargar Perfil Individual
function loadProfile(id) {
    const p = firmantes.find(x => x.id === id);
    if(!p) return;
    currentProfile = p;

    document.getElementById('profile-img').src = p.foto;
    document.getElementById('profile-name').textContent = p.nombre;
    document.getElementById('profile-role').textContent = p.rol;
    document.getElementById('profile-video').src = p.video;
    document.getElementById('profile-audio').src = p.audio;
    document.getElementById('profile-story').innerHTML = p.historiaHtml;

    showView('profile');
    window.scrollTo(0,0);
}

// Inicializar y Mostrar Cuento
function showStory() {
    if(!currentProfile || !currentProfile.cuento) return;
    showView('story');

    // MÁGIA AQUÍ: Esperamos a que la vista tenga dimensiones reales en el DOM antes de instanciar PageFlip
    setTimeout(() => {
        initBook();
    }, 150);
}

function initBook() {
    const wrapper = document.getElementById('book-wrapper');
    
    // Destrucción limpia absoluta
    if(pageFlip) {
        try { pageFlip.destroy(); } catch(e) {}
        pageFlip = null;
    }

    let oldContainer = document.getElementById('book-container');
    if (oldContainer) {
        oldContainer.remove();
    }

    const container = document.createElement('div');
    container.id = 'book-container';
    container.className = 'relative shadow-2xl transition-transform duration-500 mx-auto';
    wrapper.insertBefore(container, wrapper.firstChild);

    // Portada
    container.innerHTML += `
        <div class="page hard">
            <div class="page-content">
                <div class="page-text text-center flex flex-col justify-center items-center h-full">
                    <h2 class="text-3xl font-bold mb-4 text-gradient-yellow">El Cuento de</h2>
                    <h1 class="text-5xl font-extrabold mb-8">${currentProfile.nombre}</h1>
                    <button class="mt-8 btn-premium btn-blue text-lg shadow-xl shadow-sky-500/50 hover:scale-110 z-50" onclick="startReadingStory(event)">
                        <i class="fa-solid fa-play mr-2"></i> Reproducir
                    </button>
                </div>
            </div>
        </div>
    `;

    // Páginas dinámicas
    currentProfile.cuento.forEach((p, index) => {
        const wrappedText = wrapWordsWithSpans(p.text);
        container.innerHTML += `
            <div class="page">
                <div class="page-content">
                    <img src="${p.img}" class="page-image" alt="Ilustración">
                    <div class="page-text dynamic-story-text" data-story-index="${index}">${wrappedText}</div>
                </div>
            </div>
        `;
    });

    // Contraportada
    container.innerHTML += `
        <div class="page hard">
            <div class="page-content">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800" class="page-image" alt="Libro cerrado">
                <div class="page-text text-center flex flex-col justify-center items-center h-full">
                    <h2 class="text-4xl font-extrabold text-gradient-blue dynamic-story-text" data-story-index="${currentProfile.cuento.length}">Fin.</h2>
                </div>
            </div>
        </div>
    `;

    // Inicializar PageFlip
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const isMobile = vw < 768;

    // @ts-ignore
    pageFlip = new St.PageFlip(document.getElementById('book-container'), {
        width: isMobile ? 320 : 450,
        height: isMobile ? 480 : 600,
        size: "stretch",
        minWidth: 250,
        maxWidth: 650,
        minHeight: 350,
        maxHeight: 850,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Evento de cambio de página
    pageFlip.on('flip', (e) => {
        flipSound.currentTime = 0;
        flipSound.play().catch(e => console.log('Audio autoplay prevented'));

        document.getElementById('view-story').classList.add('page-transition-flash');
        setTimeout(() => {
            document.getElementById('view-story').classList.remove('page-transition-flash');
        }, 500);

        updatePageIndicator(e.data);

        if(isTTSActive) {
            // Un pequeño delay evita que la voz se corte por la carga del DOM
            setTimeout(() => readCurrentPages(e.data), 300);
        }
    });

    // Botones navegación del libro
    document.getElementById('btn-prev-page').onclick = () => pageFlip.flipPrev();
    document.getElementById('btn-next-page').onclick = () => pageFlip.flipNext();

    // Reset TTS state
    isTTSActive = false;
    document.getElementById('tts-icon').className = 'fa-solid fa-volume-xmark';
    document.getElementById('tts-toggle').classList.replace('bg-sky-600', 'bg-slate-800');
    
    // Iniciar indicador
    updatePageIndicator(0);
}

function updatePageIndicator(currentIndex) {
    if(!pageFlip) return;
    const total = pageFlip.getPageCount();
    // Ajustamos la lógica visual: la portada es 0, las páginas internas son reales, contraportada es el fin.
    let displayPage = currentIndex;
    let displayTotal = total - 1; 
    document.getElementById('page-indicator-text').textContent = `${displayPage} / ${displayTotal}`;
}

function closeStory() {
    stopTTS();
    showView('profile');
}

// Lógica de Text-To-Speech (TTS)
function toggleTTS() {
    const btn = document.getElementById('tts-toggle');
    const icon = document.getElementById('tts-icon');

    isTTSActive = !isTTSActive;

    if(isTTSActive) {
        icon.className = 'fa-solid fa-volume-high';
        btn.classList.replace('bg-slate-800', 'bg-sky-600');
        // Leer inmediatamente las páginas actuales
        if(pageFlip) readCurrentPages(pageFlip.getCurrentPageIndex());
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.classList.replace('bg-sky-600', 'bg-slate-800');
        stopTTS();
    }
}

// Inicia la lectura desde la portada
function startReadingStory(e) {
    if(e) e.stopPropagation();

    // Configurar estado de TTS activo
    isTTSActive = true;
    const btn = document.getElementById('tts-toggle');
    const icon = document.getElementById('tts-icon');
    icon.className = 'fa-solid fa-volume-high';
    btn.classList.replace('bg-slate-800', 'bg-sky-600');

    if (pageFlip) {
        // Detener cualquier lectura previa antes de iniciar
        stopTTS();

        const currentPage = pageFlip.getCurrentPageIndex();
        if (currentPage !== 1) {
            pageFlip.flip(1); // Al cambiar de página, el evento 'flip' llamará a readCurrentPages
        } else {
            readCurrentPages(1); // Si ya estamos en la página 1, leemos directamente
        }
    }
}

function readCurrentPages(pageIndex) {
    stopTTS();
    if(!currentProfile || !currentProfile.cuento) return;

    // Limpiar clases de resaltado anterior
    document.querySelectorAll('.word-highlight').forEach(el => el.classList.remove('word-highlight'));

    // Dependiendo de la orientación de StPageFlip (portrait = 1 pág, landscape = 2 págs)
    const mode = pageFlip.getOrientation();
    const visiblePages = [];

    if (mode === 'portrait') {
        visiblePages.push(pageIndex);
    } else { // landscape
        visiblePages.push(pageIndex);
        if (pageIndex + 1 < pageFlip.getPageCount()) {
            visiblePages.push(pageIndex + 1);
        }
    }

    let phrases = [];
    let leftStoryIndex = -1;
    let rightStoryIndex = -1;

    visiblePages.forEach((pIndex, i) => {
        if (pIndex > 0 && pIndex <= currentProfile.cuento.length) {
            const storyIdx = pIndex - 1;
            phrases.push({text: currentProfile.cuento[storyIdx].text, index: storyIdx});
            if (i === 0) leftStoryIndex = storyIdx;
            if (i === 1) rightStoryIndex = storyIdx;
        } else if (pIndex === currentProfile.cuento.length + 1) {
            phrases.push({text: "Fin del relato.", index: currentProfile.cuento.length});
        }
    });

    if(phrases.length > 0) {
        // Envolvemos el speak en un pequeño timeout después del stopTTS para limpiar la caché de audio del navegador
        setTimeout(() => {
            const fullText = phrases.map(p => p.text).join(' ... '); // Join with dot to add pause
            const utterance = new SpeechSynthesisUtterance(fullText);
            utterance.lang = 'es-ES'; // O 'es-CO'
            utterance.rate = 0.9; // Velocidad un poco más lenta para cuento

            let wordCount = 0;

            utterance.onboundary = (event) => {
                if (event.name === 'word') {
                    // Remover clases anteriores
                    document.querySelectorAll('.word-highlight').forEach(el => el.classList.remove('word-highlight'));

                    const visibleSpans = [];
                    if (leftStoryIndex >= 0) {
                        const leftContainer = document.querySelector(`.dynamic-story-text[data-story-index="${leftStoryIndex}"]`);
                        if(leftContainer) visibleSpans.push(...leftContainer.querySelectorAll('.word-span'));
                    }
                    if (rightStoryIndex >= 0) {
                        const rightContainer = document.querySelector(`.dynamic-story-text[data-story-index="${rightStoryIndex}"]`);
                        if(rightContainer) visibleSpans.push(...rightContainer.querySelectorAll('.word-span'));
                    }

                    const textUpToBoundary = fullText.substring(0, event.charIndex);
                    const currentWordIndex = textUpToBoundary.split(/\s+/).filter(w => w.trim().length > 0).length;

                    if (visibleSpans[currentWordIndex]) {
                        visibleSpans[currentWordIndex].classList.add('word-highlight');
                    } else if (visibleSpans[wordCount]) {
                        // Fallback
                        visibleSpans[wordCount].classList.add('word-highlight');
                    }
                    wordCount++;
                }
            };

            utterance.onend = () => {
                 document.querySelectorAll('.word-highlight').forEach(el => el.classList.remove('word-highlight'));
            }

            synth.speak(utterance);
        }, 100);
    }
}

function stopTTS() {
    if(synth && synth.speaking) {
        synth.cancel();
    }
}
