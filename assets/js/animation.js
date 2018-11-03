const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

// fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {
    // look through all the animated tags
    // and see with getBoundingClientRect() if it's in the window
    let delay = 0.25

    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom

        if (tagTop < window.innerHeight && tagBottom > 0) { // && tagBottom > 0 and else statement adds fadeIn when scrolling back up the page as well as down
            tag.style.animation = `fadein 1s ${delay}s both` // using keyframes in css
            delay = delay + 0.2 // this fades elements in a cascading style on the page
        }
        else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })
}

// on load run fadeIn
fadeIn()

// on scroll run fadeIn
document.addEventListener("scroll", function () {
    fadeIn()
})

// on browser resixe run fadeIn
window.addEventListener("resize", function () {
    fadeIn()
})