function myFunction() { //assigned a function myFunction
    var x = "Hi, how are you?"; //assigned a variable x to say hi, how are you
    document.getElementById("text").innerHTML = x; //this will make my button in html doc change once it's clicked 
}

function changeFont() { //assigned a function to changeFont
    var f = "font";    //assigned a variable f to say font and 
     f += " changed";  //concatenated to my other string to say changed
    document.getElementById("font").style.fontFamily = "Verdana, sans-serif" //this is changing the font 
    document.getElementById("font").innerHTML = f; //this is making it so new sentence says font changed 

}

