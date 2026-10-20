// Inicializar Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Referencias a elementos del DOM
const mainPhotoContainer = document.getElementById('mainPhotoContainer');
const secretContent = document.getElementById('secretContent');
const spamBanner = document.getElementById('spamBanner');

// Evento al presionar la foto principal o el aviso de spam
if (mainPhotoContainer) mainPhotoContainer.addEventListener('click', revealSurprise);
if (spamBanner) spamBanner.addEventListener('click', revealSurprise);

function revealSurprise() {
    // Revelar el contenido secreto
    secretContent.classList.remove('hidden');
    
    // Ocultar banner de spam animado
    spamBanner.style.display = 'none';

    // Desplazar la pantalla suavemente hacia el contenido
    secretContent.scrollIntoView({ behavior: 'smooth' });

    // Lanzar efecto de Confeti Rosa
    launchPinkConfetti();
}

// Función para disparar confeti
function launchPinkConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#f472b6', '#ec4899', '#f43f5e', '#fbcfe8']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#f472b6', '#ec4899', '#f43f5e', '#fbcfe8']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Ventana Emergente (Modal) para las Cartas
function openLetterModal(title, text) {
    const modal = document.getElementById('letterModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.innerText = title;
    modalBody.innerText = text;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
}

function closeLetterModal(event) {
    if (event && event.target.id !== 'letterModal') return;
    const modal = document.getElementById('letterModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Visor Lightbox para fotos
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
}