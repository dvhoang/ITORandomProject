import confetti from "https://cdn.skypack.dev/canvas-confetti";

const colors = [
    getComputedStyle(document.body).getPropertyValue("--c1"),
    getComputedStyle(document.body).getPropertyValue("--c2"),
    getComputedStyle(document.body).getPropertyValue("--c3"),
    getComputedStyle(document.body).getPropertyValue("--c4"),
    getComputedStyle(document.body).getPropertyValue("--c5"),
    getComputedStyle(document.body).getPropertyValue("--c6"),
    getComputedStyle(document.body).getPropertyValue("--c7"),
    ];

    export function celebrate() {
    confetti({
        particleCount: 500,
        startVelocity:40,
        angle:-90,
        spread: 360,
        origin: { y: 0.1 },
        colors,
        disableForReducedMotion: false
    });
}

//==========