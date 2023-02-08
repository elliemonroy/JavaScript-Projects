function countdown() {  //assigned countdown function
    var seconds = document.getElementById("seconds").value; //assigned a variable to get elementby id and gave it a value

    function tick() {         //assigned another function
        seconds = seconds -1; //assigned seconds to -1
        timer.innerHTML = seconds; //assigned timer to count in seconds
        var time = setTimeout(tick, 1000); //this means the program is pausing for 1,000 milliseconds
        if (seconds == -1) { //if seconds are equal to -1
            alert("Time's up!"); //this alert will pop up on the browser
            clearTimeout(time); //this method clears a timer 
            timer.innerHTML = "";
        }
    }
    tick();
}

//SLIDESHOW SECTION 

let slideIndex = 1; //set slide number to 1
showSlides(slideIndex); //show the current slide

//Next/previous controls
function plusSlides(n) { 
    showSlides(slideIndex += n); //increase the slide index by 1 and show slide
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); //show the current slide
}

//Toggle correct slides
function showSlides (n) {  
    let i;                 
    let slides = document.getElementsByClassName("mySlides"); //select all elements with class name mySlides
    let dots = document.getElementsByClassName("dot"); //select all elements with class name dot
    if (n > slides.length) {slideIndex = 1} //if n is greater than number of slides, set index to 1
    if (n < 1) {slideIndex = slides.length} //if n is less than 1, set index to total number of slides
    for (i = 0; i < slides.length; i++) { //this loops over slides
        slides[i].style.display = "none"; //when you set the display to none, it hides them.
    }
    for (i = 0; i < dots.length; i++) { //this replaces each of the dots with the class "active" with ""
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //set the current slide to display as a block element
    dots[slideIndex-1].className += " active"; //set the current slide's respective dot to the "active" class
}
