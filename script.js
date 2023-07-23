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
        
    }

    slide[slideIndex].classList.add("visible")
    
}

updateSlides();