
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Cerrar al hacer click fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('fixed')) {
    const modals = document.querySelectorAll('.fixed.hidden');
    modals.forEach(modal => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
    }
}