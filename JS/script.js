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

function rotateImage() {
    const imgCnt = document.querySelector('.img-cnt');
    let left = 0;
    setInterval(() => {
        imgCnt.style.marginLeft = left + 'px';
        if (left === -240) {
            left = 0;
        }else{
            left += -120;
        }
    }, 2000)
}
rotateImage();

document.addEventListener('click', (e) => {
    if (e.target.className === 'about-me to-appear') {
        document.querySelector('.about-wrapper').classList.toggle('open');
    }
    console.log(e);
    if (e.target.className === 'hero-page' || e.target.className === 'header') {
        document.querySelector('.about-wrapper').classList.remove('open');
    }
})

// const brightnessControl = document.getElementById('brightness');
// brightnessControl.addEventListener('input', (e) => {
//     const lamp = document.getElementById('lamp');
//     const brightness = e.target.value;
//     // Increase the size and intensity of the glow as brightnes s increases
//     lamp.style.boxShadow = `0 0 ${brightness}px ${brightness / 2}px rgba(255, 215, 0, ${brightness / 100})`;
// })



