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

var interrupter = true; // Interrupt constant animations (like buttons)

// Buttons
const buttonGradientElem = document.createElement("style");
buttonGradientElem.setAttribute("id", "buttonGradAnim");
document.head.appendChild(buttonGradientElem);
const button = document.getElementById("buttonGradAnim");
function buttonAnimationLoop() {
    var l = 0;
    // Fade up
    function buttonFadeUp() {
        setTimeout(() => {
            // console.log("Button fade up @ " + l)
            button.innerText = `button{background: linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${60 - (l * 1.3)},${60 - (l * 1.3)},${60 - (l * 1.3)},0.5) 90%);}`
            
            if (l >= 30) return;
            else if (!interrupter) {
                l++;
                buttonFadeUp();
            }
        }, 83)
    }
    if (!interrupter) buttonFadeUp();

    // Fade down
    function buttonFadeDown() {
        setTimeout(() => {
            // console.log("Button fade down @ " + l)
            button.innerText = `button{background: linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${60 - (l * 1.3)},${60 - (l * 1.3)},${60 - (l * 1.3)},0.5) 90%);}`

            if (l <= 0) return;
            else if (!interrupter) {
                l--;
                buttonFadeDown();
            }
        }, 83)
    }
    setTimeout(() => {
        if (!interrupter) buttonFadeDown();
    }, 2700)
}
var buttonAnimInterval;

// Detect focus
window.addEventListener("blur", (e) => {
    interrupter = true;
    clearInterval(buttonAnimInterval);
    console.log("lost focus")
})
window.addEventListener("focus", (e) => {
    if (interrupter) {
        interrupter = false;
        clearInterval(buttonAnimInterval);
        buttonAnimInterval = setInterval(buttonAnimationLoop, 5500);
        buttonAnimationLoop();
        console.log("got focus")
    }
})
if (interrupter) {
    interrupter = false;
    buttonAnimInterval = setInterval(buttonAnimationLoop, 5500);
    buttonAnimationLoop();
    console.log("Manually starting")
}