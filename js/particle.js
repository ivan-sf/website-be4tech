particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 1500 } },
        color: { value: "#fff" },
        shape: { type: ["circle","polygon"], stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 7 }},
        opacity: { value: 0.3, random: true },
        size: { value: 4, random: true, anim: { enable: true, speed: 4, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 2 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "bounce", bounce: true, attract: { enable: true, rotateX: 6000, rotateY: 1200 } },
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 10 },
        },
    },
    retina_detect: true,
});
