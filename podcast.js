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
            { img: "https://images.unsplash.com/photo-1505934333218-8fe219d08316?q=80&w=800", text: "Había una vez, en unas montañas lejanas, un joven llamado Carlos que caminaba por senderos oscuros." },
            { img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800", text: "Tras muchos años de tormenta, decidió dejar atrás el estruendo y buscar la calma." },
            { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800", text: "Sus manos, antes marcadas por la rudeza, encontraron unas pequeñas semillas mágicas: granos de café." },
            { img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800", text: "Y así, con paciencia y amor, el café floreció, uniendo a todo el pueblo en un abrazo con aroma a esperanza. Fin." }
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
            { img: "https://images.unsplash.com/photo-1605814046045-8b17b6a67fbd?q=80&w=800", text: "Marta conocía los nudos de la tristeza desde muy joven." },
            { img: "https://images.unsplash.com/photo-1581452902640-1e5f8ceb4d58?q=80&w=800", text: "Un día, decidió desatar esos nudos y comprar hilos de colores brillantes." },
            { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", text: "Junto a otras mujeres, tejió una gran manta que cubrió las cicatrices de todo el valle." }
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
            { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", text: "Luis llevaba consigo un cuaderno viejo lleno de sueños." },
            { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", text: "Descubrió que las letras eran herramientas más poderosas que cualquier otra." }
        ]
    }
];

let currentProfile = null;
let pageFlip = null;
let synth = window.speechSynthesis;
let isTTSActive = false;

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
        <div class="page hard">
            <div class="page-content">
                <div class="page-text">
                    <h2 class="text-3xl font-bold mb-4 text-gradient-yellow">El Cuento de</h2>
                    <h1 class="text-5xl font-extrabold">${currentProfile.nombre}</h1>
                </div>
            </div>
        </div>
        <div class="page hard"></div>
    `;

    // Páginas dinámicas
    currentProfile.cuento.forEach((p, index) => {
        container.innerHTML += `
            <div class="page">
                <div class="page-content">
                    <img src="${p.img}" class="page-image" alt="Ilustración">
                    <div class="page-text">${p.text}</div>
                </div>
                <div class="page-number">${index + 1}</div>
            </div>
        `;
    });

    // Contraportada
    container.innerHTML += `
        <div class="page hard"></div>
        <div class="page hard">
            <div class="page-content">
                <div class="page-text">
                    <h2 class="text-2xl font-bold">Fin.</h2>
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
        showCover: true,
        mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Evento de cambio de página para TTS
    pageFlip.on('flip', (e) => {
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

function readCurrentPages(pageIndex) {
    stopTTS();
    if(!currentProfile || !currentProfile.cuento) return;

    // Dependiendo de si es portada (0) o interior, calculamos el texto
    let textToRead = "";

    if(pageIndex === 0) {
        textToRead = "El cuento de " + currentProfile.nombre;
    } else {
        // En modo libro se ven dos páginas. Determinamos qué índices de cuento corresponden.
        // Índice de página del cuento = (pageIndex - 2)
        const leftStoryIndex = pageIndex - 2;
        const rightStoryIndex = pageIndex - 1;

        if (leftStoryIndex >= 0 && leftStoryIndex < currentProfile.cuento.length) {
            textToRead += currentProfile.cuento[leftStoryIndex].text + ". ";
        }
        if (rightStoryIndex >= 0 && rightStoryIndex < currentProfile.cuento.length) {
            textToRead += currentProfile.cuento[rightStoryIndex].text;
        }

        if(pageIndex >= currentProfile.cuento.length + 2) {
             textToRead = "Fin.";
        }
    }

    if(textToRead.trim() !== "") {
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'es-ES'; // O 'es-CO'
        utterance.rate = 0.9; // Velocidad un poco más lenta para cuento
        synth.speak(utterance);
    }
}

function stopTTS() {
    if(synth.speaking) {
        synth.cancel();
    }
}
