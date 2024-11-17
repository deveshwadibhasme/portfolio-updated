window.addEventListener('load', () => {
    const textElements = document.querySelectorAll('.to-appear');
    const bgImage = document.querySelector('main')
    textElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            bgImage.classList.add('main');
        }, index * 200); // Delay each element by 500ms
    });
})

brightnessControl.addEventListener('input', () => {
    const lamp = document.getElementById('lamp');
    const brightnessControl = document.getElementById('brightness');
    const brightness = brightnessControl.value;
    // Increase the size and intensity of the glow as brightness increases
    lamp.style.boxShadow = `0 0 ${brightness}px ${brightness / 2}px rgba(255, 215, 0, ${brightness / 100})`;
})




