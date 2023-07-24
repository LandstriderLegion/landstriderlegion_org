// Main gradient
var tracker = document.getElementById("scroll-tracker");
var gradient = document.getElementsByTagName("main")[0];
var height = document.getElementsByTagName("header")[0].offsetHeight;
gradient.style.background = "black";


window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    var distanceTop = window.pageYOffset + tracker.getBoundingClientRect().top;
    var opacity = 1.0;
    var gradOpacity = 0
    
    if (scrollTop > distanceTop) {
        opacity = 1 - ((scrollTop - distanceTop) / height);
        gradOpacity = opacity >= 0 ? 0 : (opacity <= -1 ? 1 : opacity * -1);
        gradient.style.background = `linear-gradient(97deg, rgba(21,73,130,${0.14 * gradOpacity}) 2%, rgba(0,114,80,${0.1 * gradOpacity}) 23%, rgba(171,136,47,${0.08 * gradOpacity}) 53%, rgba(239,71,35,${0.06 * gradOpacity}) 91%)`;
    }
})

// Buttons
const buttons = document.getElementsByTagName("button");
const buttonGradAnim = setInterval(() => {
    for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i], buttons[i].style)
        // Fade up
        for (var l = 0; l < 30; l++) {
            buttons[i].style.background = `linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${50 - l},${50 - l},${50 - l},0.5) 90%);`
            setTimeout(() => {}, 83)
        }

        // Fade down
        setTimeout(() => {
            for (var l = 30; l > 0; l--) {
                buttons[i].style.background = `linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${50 - l},${50 - l},${50 - l},0.5) 90%);`
                setTimeout(() => {}, 83)
            }
        }, 2500)
    }
}, 5000)
