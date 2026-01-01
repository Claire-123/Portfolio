const eyesLayer = document.querySelector('.eyes-layer');

document.addEventListener('mousemove', (e) => {
    // Current mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the center of the screen (or the face) to calculate offset
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate how far the mouse is from the center (normalized -1 to 1)
    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    // Max pixels the eyes should move (adjust this for a subtle or dramatic effect)
    const movementLimit = 30; 

    const moveX = percentX * movementLimit;
    const moveY = percentY * movementLimit;

    // Apply the movement
    eyesLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});