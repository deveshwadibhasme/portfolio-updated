const logoClick = document.querySelector('.logo')
const clickOff = document.querySelector('.click-me')
const main = document.querySelector('.main')
const textElements = document.querySelectorAll('.to-appear')
logoClick.addEventListener('click',()=>{
    clickOff.style.display = 'none'
    main.style.overflowX = 'visible';
    textElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 200); // Delay each element by 500ms
    });
})

const lamp = document.getElementById('lamp');
const brightnessControl = document.getElementById('brightness');

brightnessControl.addEventListener('input', () => {
    const brightness = brightnessControl.value;
    // Increase the size and intensity of the glow as brightness increases
    lamp.style.boxShadow = `0 0 ${brightness}px ${brightness / 2}px rgba(255, 215, 0, ${brightness / 100})`;
})




