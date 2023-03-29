export const particlesConfig = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#0000ff", // change to blue color
            opacity: 0.9,
            animation: {
                enable: false,
                speed: 20,
                sync: false
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#0000ff" // change to white color
            },
            polygon: {
                nb_sides: 1
            },
            image: {
                src: "",
                width: 200,
                height: 200
            }
        },
        opacity: {
            value: 0.9,
            random: false,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 15,
            random: true,
            anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 100,
            color: "#ffffff", // change to white color
            opacity: 0.4,
            width: 10,
            triangles: {
                enable: true,
                color: "#ffffff", // change to white color
                opacity: 0.1
            }
        },
        move: {
            enable: true,
            speed: 3,
            direction: "top", // change to upward direction
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: false
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 4000,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    background: {
        color: "#ffffff", // change to white color
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    }
}
