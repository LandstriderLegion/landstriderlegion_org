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
var i;
function buttonAnimationLoop() {
    var l = 0;
    // Fade up
    function buttonFadeUp() {
        setTimeout(() => {
            buttons[i].setAttribute(
                "style",
                `background: linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${50 - l},${50 - l},${50 - l},0.5) 90%);`
            )
            if (l >= 30) return;
            else {
                l++;
                buttonFadeUp();
            }
        }, 83)
    }
    buttonFadeUp();

    // Fade down
    function buttonFadeDown() {
        setTimeout(() => {
            buttons[i].setAttribute(
                "style",
                `background: linear-gradient(180deg, rgba(0,0,0,0.5) ${40 + l}%, rgba(${50 - l},${50 - l},${50 - l},0.5) 90%);`
            )
            if (l <= 0) return;
            else {
                l--;
                buttonFadeDown();
            }
        }, 83)
    }
    setTimeout(() => {
        buttonFadeDown();

        if (i < buttons.length - 1) i++;
        else {
            i = 0;
            return;
        }
    }, 3000)
}
setInterval(buttonAnimationLoop, 6000)