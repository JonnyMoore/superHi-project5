const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

const moveEye = function (tag, mouseX, mouseY) {
    tag.style.left = mouseX + "px"
    tag.style.top = mouseY + "px"
}

document.addEventListener("mousemove", function (event) {
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
})