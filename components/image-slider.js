let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let demo = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length || slideIndex > slides.length) {
        slideIndex = 1
    }
    if (n < 1 || slideIndex < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    demo[slideIndex-1].className = demo[slideIndex-1].className + " active";
    captionText.innerHTML = demo[slideIndex-1].alt;

    setTimeout(showSlides, 2500); // Change image every 2 seconds
    slideIndex = slideIndex + 1;
}
