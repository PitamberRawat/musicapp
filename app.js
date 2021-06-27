window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#7560d3',
        '#d38160',
        '#d36066',
        '#cf60d3',
        '#2b8009'
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].cuurentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});