// Looping the slideshow on html element 
function loopSlideShow(add) {
    for (let i = 1; i < (add + 1); i++) {
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

function loopGallery() {
    var totalImage = 11
    const parent = document.getElementById("container");

    for (let i = 0; i < totalImage; i++) {
        const crtA = document.createElement("a");
        const crtImg = document.createElement("img");
        crtA.setAttribute("href", "img/gallery-content/wallpaper" + (i + 1) + ".jpg");
        crtA.setAttribute("target", "_blank")
        crtImg.setAttribute("src", "img/gallery-content/wallpaper" + (i + 1) + ".jpg");
        crtA.appendChild(crtImg);
        parent.appendChild(crtA);
    }
}
loopGallery();

var slideTotal = document.getElementsByClassName("slide-box").length - 1
var slideIndex = 0;
// event onclick previous button
function plusSlides() {
    slideIndex += 1;
    updateSlides();
}
// event onclick next button
function minSlides() {
    slideIndex -= 1;
    updateSlides();
}

// updating slide if button previous/next button clicked
function updateSlides() {
    let slide = document.getElementsByClassName("slide-box");

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

function saveData() {
    let displayName = document.getElementById("name");
    let username = document.getElementById("username").value;
    
    if (username == "") {
        displayName.innerHTML = "Your "
    } else {
        displayName.innerHTML = username
    }
}
saveData();