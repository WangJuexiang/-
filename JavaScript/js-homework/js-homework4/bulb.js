function changeImage() {
    element = document.getElementById('bulbImage')
    if (element.src.match("bulb-off")) {
        element.src = "bulb-on.jpeg";
    }
    else {
        element.src = "bulb-off.jpeg";
    }
}