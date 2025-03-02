function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const containerElement = document.querySelector('.container');

    for (let i = 0; i < 100; i++) {
        const bubbleElement = document.createElement('span');
        bubbleElement.innerHTML = '🫧';
        bubbleElement.classList.add('bubble');

        const randYPosition = getRandomNumber(0, containerElement.offsetHeight) + 'px';
        bubbleElement.style.top = randYPosition;
        const randXPosition = getRandomNumber(0, containerElement.offsetWidth) + 'px';
        bubbleElement.style.left = randXPosition;

        containerElement.appendChild(bubbleElement);
    }

    for (let i = 0; i < 20; i++) {
        const fishElement = document.createElement('span');
        fishElement.innerHTML = '🐟, 🐡, 🐠';
        fishElement.classList.add('fish');

        const randYPosition = getRandomNumber(0, containerElement.offsetHeight) + 'px';
        fishElement.style.top = randYPosition;
        fishElement.style.left = "100vw";

        containerElement.appendChild(fishElement);
    }

    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        const tl = gsap.timeline({});

        tl.to(bubble, {
            scrollTrigger: {
                trigger: bubble,
                start: 'top 60%',
                scrub: true,
            },
            opacity: 1,
            duration: 2,
        });

        tl.to(bubble, {
            scrollTrigger: {
                trigger: bubble,
                start: 'top 10%',
                scrub: true,
            },
            opacity: 0,
            duration: 2,
        });
    });

    const fishes = document.querySelectorAll('.fish');
    fishes.forEach(fish => {
        gsap.to(fish, {
            x: "-100vw",
            duration: getRandomNumber(5, 10),
            repeat: -1,
            ease: "linear",
            delay: getRandomNumber(0, 5)
        });
    });
});