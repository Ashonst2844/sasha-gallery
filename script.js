function loopSlideShow(add) {
    elem = add + 1

    for (let i = 1; i < elem; i++) {
        const parent = document.getElementById("parent")

        const crtDiv = document.createElement("div");
        crtDiv.classList.add("slide-box")

        const crtImg = document.createElement("img");
        crtImg.setAttribute("src", "img/gallery-content/wallpaper" + i +".jpg");
        
        crtDiv.appendChild(crtImg);
        parent.appendChild(crtDiv)
    }
}
loopSlideShow(5);

var slideTotal = document.getElementsByClassName("slide-box").length - 1
var slideIndex = 0;

function plusSlides() {
    slideIndex += 1;
    updateSlides();
}
function minSlides() {
    slideIndex -= 1;
    updateSlides();
}

function updateSlides() {
    var slide = document.getElementsByClassName("slide-box");

    if (slideIndex < 0) {
        slideIndex = slide.length - 1
    }
    if (slideIndex > slideTotal) {
        slideIndex = 0
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("visible")
        slide[i].classList.remove("fade")
        
    }

    slide[slideIndex].classList.add("visible")
    slide[slideIndex].classList.add("fade")
    
}
updateSlides();