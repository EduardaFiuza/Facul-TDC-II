                        // ————— BOTÃO ————— //

// ESTADOS
//      Incial
//      Expandido / ACTIVE

//  TRANSIÇÕES
//      Incial <-> Click <-> Expandido ( mostrar parágrafos ) 

{

    let button = document.getElementsByClassName("button");
    
    button[0].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } 
        else {
            content.style.display = "block";
        }
    });
    

                        // ————— SLIDESHOW ————— //  
    
    
    let slideIndex = 1;
    showSlides (slideIndex);
    
    function plusSlide (n) {
        showSlides (slideIndex += n);
    }
    
    function showSlides (n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
}