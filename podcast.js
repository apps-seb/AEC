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
            <p>Carlos encontró en la tierra la paz que las armas nunca le dieron. Hoy lidera un proyecto de cultivo de café orgánico en el Tolima.</p>
            <p>"El verdadero cambio empezó cuando me di cuenta de que mis manos podían sembrar vida en lugar de destruirla", menciona Carlos mientras nos muestra su cafetal.</p>
            <p>La comunidad, que al principio sentía recelo, ahora trabaja hombro a hombro con él, demostrando que la reconciliación es un proceso diario y tangible.</p>
        `,
        cuento: [
            { img: "https://images.unsplash.com/photo-1505934333218-8fe219d08316?q=80&w=800", text: "Había una vez, en un rincón escondido entre montañas verdes y nubes juguetonas, un joven soñador llamado Carlos. Desde pequeño, había caminado por senderos difíciles y oscuros, buscando su lugar en el mundo." },
            { img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800", text: "Tras muchos años de tormentas y días grises, Carlos sintió en su corazón que era el momento de dejar atrás el ruido y el estruendo. Anhelaba la calma de la naturaleza y el canto de los pájaros al amanecer." },
            { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800", text: "Sus manos, que antes estaban marcadas por la rudeza de un camino empinado, se abrieron para recibir un regalo de la tierra: unas pequeñas semillas mágicas que parecían esconder un gran secreto. ¡Eran granos de café!" },
            { img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800", text: "Con infinita paciencia, amor y dedicación, Carlos cuidó esas semillas. Poco a poco, el café floreció y su delicioso aroma se esparció por el valle, uniendo a todo el pueblo en un cálido abrazo lleno de esperanza y sonrisas." },
            { img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800", text: "El trabajo en la tierra sanaba sus heridas día con día. Cada planta que crecía le recordaba que la vida siempre encuentra la forma de abrirse paso, incluso después de los inviernos más duros." },
            { img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800", text: "Hoy, Carlos enseña a los más jóvenes los secretos de la tierra y del café. Su historia es la prueba de que el amor y el trabajo honesto pueden transformar por completo el destino de cualquier persona." }
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
            <p>Marta pasó más de 15 años en las filas. Ahora, en un pequeño taller, hila historias y reconciliación junto a mujeres víctimas del conflicto.</p>
            <p>Su proyecto textil no solo ha sido un éxito económico, sino un poderoso espacio terapéutico.</p>
        `,
        cuento: [
            { img: "https://images.unsplash.com/photo-1605814046045-8b17b6a67fbd?q=80&w=800", text: "En un valle donde el viento soplaba suavemente, vivía Marta. Desde que era una niña, Marta había conocido los nudos de la tristeza y los hilos enredados de una vida llena de desafíos." },
            { img: "https://images.unsplash.com/photo-1581452902640-1e5f8ceb4d58?q=80&w=800", text: "Un hermoso día iluminado por el sol, Marta tomó una valiente decisión: desatar esos nudos uno por uno. Con una sonrisa, fue a buscar hilos de todos los colores brillantes del arcoíris." },
            { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", text: "Marta no estaba sola. Junto a otras mujeres valientes, comenzó a tejer. Puntada a puntada, crearon una manta inmensa y hermosa que cubrió de alegría, color y paz todas las cicatrices del valle." },
            { img: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=800", text: "El taller se llenó de risas, de canciones y de historias compartidas. Las agujas se movían con ritmo, tejiendo no solo lana, sino también lazos irrompibles de amistad y comprensión." },
            { img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800", text: "Sus creaciones viajaron por todo el país, llevando consigo el mensaje de que, aunque la vida a veces nos enrede, siempre podemos volver a tejerla con amor y esperanza." },
            { img: "https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=800", text: "Hoy, Marta es la maestra de los colores y las texturas. Ha demostrado que el arte sana el alma y que juntas, las mujeres pueden construir un mundo mucho más hermoso." }
        ]
    },
    {
        id: 3,
        nombre: "Luis Felipe",
        rol: "Firmante y Maestro",
        foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        historiaHtml: `<p>Luis se dedica a enseñar lectura y escritura a niños en zonas rurales aisladas.</p>`,
        cuento: [
            { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", text: "En un pueblito donde las estrellas brillaban más que en ningún otro lado, vivía Luis. A donde quiera que iba, Luis llevaba consigo un cuaderno viejo y gastado, pero que estaba lleno de grandes sueños y hermosos pensamientos." },
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", text: "Pronto, Luis hizo un gran descubrimiento: se dio cuenta de que las letras y las palabras eran herramientas mágicas, mucho más poderosas que cualquier otra cosa que hubiera conocido en su vida." },
            { img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800", text: "Con gran entusiasmo, reunió a los niños del pueblito y comenzó a enseñarles a leer y a escribir. Las palabras se convirtieron en alas, y juntos volaron hacia un futuro lleno de imaginación y esperanza." },
            { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", text: "La escuelita improvisada bajo el gran árbol se convirtió en el lugar favorito de todos. Allí no existía el miedo, solo la curiosidad inmensa de descubrir nuevos mundos en las páginas de los libros." },
            { img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=800", text: "A veces, Luis les contaba historias de héroes que no usaban espadas, sino palabras amables y abrazos para vencer la oscuridad. Los niños escuchaban maravillados." },
            { img: "https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=800", text: "Así fue como Luis, el sembrador de letras, cultivó una generación de niños sabios y felices, demostrando que la verdadera paz comienza con la educación y el amor." }
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

    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Limpiar previo

    // Portada
    container.innerHTML += `
        <div class="page">
            <div class="page-content">
                <div class="page-text text-center flex flex-col justify-center items-center h-full">
                    <h2 class="text-3xl font-bold mb-4 text-gradient-yellow">El Cuento de</h2>
                    <h1 class="text-5xl font-extrabold mb-8">${currentProfile.nombre}</h1>
                    <button class="mt-8 btn-premium btn-blue text-lg shadow-xl shadow-sky-500/50 hover:scale-110" onclick="startReadingStory(event)">
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
                <div class="page-number">${index + 1}</div>
            </div>
        `;
    });

    // Contraportada
    container.innerHTML += `
        <div class="page">
            <div class="page-content">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800" class="page-image" alt="Libro cerrado">
                <div class="page-text text-center flex flex-col justify-center items-center h-full">
                    <h2 class="text-4xl font-extrabold text-gradient-blue dynamic-story-text" data-story-index="${currentProfile.cuento.length}">Fin.</h2>
                </div>
            </div>
        </div>
    `;

    // Inicializar PageFlip
    if(pageFlip) pageFlip.destroy();

    // Configuración responsiva para PageFlip
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const isMobile = vw < 768;

    // @ts-ignore (StPageFlip importado vía CDN)
    pageFlip = new St.PageFlip(document.getElementById('book-container'), {
        width: isMobile ? 300 : 400, // width base de una página
        height: isMobile ? 450 : 550, // height base de una página
        size: "stretch",
        minWidth: 200,
        maxWidth: 600,
        minHeight: 300,
        maxHeight: 800,
        maxShadowOpacity: 0.5,
        showCover: false, // Ensure we don't treat the first/last pages uniquely for viewing
        mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Evento de cambio de página para TTS
    pageFlip.on('flip', (e) => {
        // Reproducir sonido de cambio de página
        flipSound.currentTime = 0;
        flipSound.play().catch(e => console.log('Audio autoplay prevented'));

        // Transición colorida de página
        document.getElementById('view-story').classList.add('page-transition-flash');
        setTimeout(() => {
            document.getElementById('view-story').classList.remove('page-transition-flash');
        }, 500);

        if(isTTSActive) {
            readCurrentPages(e.data);
        }
    });

    // Botones navegación del libro
    document.getElementById('btn-prev-page').onclick = () => pageFlip.flipPrev();
    document.getElementById('btn-next-page').onclick = () => pageFlip.flipNext();

    // Reset TTS state
    isTTSActive = false;
    document.getElementById('tts-icon').className = 'fa-solid fa-volume-xmark';
    document.getElementById('tts-toggle').classList.replace('bg-sky-600', 'bg-slate-800');
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
    e.stopPropagation();
    if (!isTTSActive) {
        toggleTTS(); // Activa el audio
    }
    if (pageFlip) {
        pageFlip.flip(1); // Pasa directamente a la página 1, la que tiene texto e imágenes
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

    // Con showCover: false, los índices en landscape van de 2 en 2 (0,1), (2,3)
    if (mode === 'portrait') {
        visiblePages.push(pageIndex);
    } else { // landscape
        // pageIndex is the left page
        visiblePages.push(pageIndex);
        // right page
        if (pageIndex + 1 < pageFlip.getPageCount()) {
            visiblePages.push(pageIndex + 1);
        }
    }

    let phrases = [];

    // Map the visible pages to the correct story index.
    // Page 0 = Cover
    // Page 1 to N = currentProfile.cuento (index 0 to N-1)
    // Page N+1 = Fin.

    let leftStoryIndex = -1;
    let rightStoryIndex = -1;

    visiblePages.forEach((pIndex, i) => {
        if (pIndex === 0) {
            // No leemos la portada cuando se está leyendo el contenido normalmente
            // A menos que explícitamente se pida leer la portada
        } else if (pIndex <= currentProfile.cuento.length) {
            const storyIdx = pIndex - 1;
            phrases.push({text: currentProfile.cuento[storyIdx].text, index: storyIdx});
            if (i === 0) leftStoryIndex = storyIdx;
            if (i === 1) rightStoryIndex = storyIdx;
        } else if (pIndex === currentProfile.cuento.length + 1) {
            phrases.push({text: "Fin.", index: currentProfile.cuento.length});
            if (i === 0) leftStoryIndex = currentProfile.cuento.length;
            if (i === 1) rightStoryIndex = currentProfile.cuento.length;
        }
    });


    if(phrases.length > 0) {
        const fullText = phrases.map(p => p.text).join(' . '); // Join with dot to add pause
        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.lang = 'es-ES'; // O 'es-CO'
        utterance.rate = 0.9; // Velocidad un poco más lenta para cuento

        let wordCount = 0;

        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                // Remover clases anteriores
                document.querySelectorAll('.word-highlight').forEach(el => el.classList.remove('word-highlight'));

                // Encontrar el span correspondiente.
                // Dado que concatenamos textos, necesitamos un selector más general para buscar el n-ésimo span.
                // Buscamos los spans en las páginas actualmente visibles
                const visibleSpans = [];
                if (leftStoryIndex >= 0) {
                    const leftContainer = document.querySelector(`.dynamic-story-text[data-story-index="${leftStoryIndex}"]`);
                    if(leftContainer) visibleSpans.push(...leftContainer.querySelectorAll('.word-span'));
                }
                if (rightStoryIndex >= 0) {
                    const rightContainer = document.querySelector(`.dynamic-story-text[data-story-index="${rightStoryIndex}"]`);
                    if(rightContainer) visibleSpans.push(...rightContainer.querySelectorAll('.word-span'));
                }

                // Aproximación simple: iluminar el span en el índice del conteo de palabras del evento.
                // Como las APIs de SpeechSynthesis pueden separar palabras de distinta manera (por puntuación),
                // esto es una aproximación visual.
                // Determinamos el índice aproximado contando las palabras hasta event.charIndex
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
    }
}

function stopTTS() {
    if(synth.speaking) {
        synth.cancel();
    }
}
