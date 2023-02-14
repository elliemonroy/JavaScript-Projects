function countFive() { //assigned a function
    var Digit = ""; //assigned a variable 
    var T = 1; //assigned another variable  
    while (T < 6) {  //while T is greater than 6
        Digit += "<br>" + T; // add one 
        T++;
    }
    document.getElementById("Count_to_Five").innerHTML = Digit; //this will display 1-5 on the browser
}



var Instruments = ["Guitar", "Cello", "Ukulele", "Trombone", "Harmonica", "Tuba", "Piano"]; //assigning a variable an array of instruments
var Content = ""; //assigned a variable
var X;            //assigned a variable
function for_Loop() {  //assigned a function
    for (X = 0; X < Instruments.length; X++) { //looping x is less than the length of instruments add one
        Content += Instruments[X] + "<br>"; //content + or is equal to instruments index  
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //displays the array on the browser
}



function array_Function() {  //assigned a function
    var car = [];            //assigned variable and made it equal to index 
    car[0]= "Tesla";         //here is my array of cars and their indexes
    car[1] = "Kia";
    car[2] = "Honda";
    car[3]= "Mazda";
    car[4] = "Volvo";
    document.getElementById("Array").innerHTML = "Bob drives a " + car[0] + " around town.";
} //document will return "Bob drives a [Tesla] around town." on the browser.



function constant_function() {            //assigned a function
    const handBag = {type:" tote handbag", brand:"Dior", color:"white"}; //assigned a constant and gave it properties & values
    handBag.color = "black";  //assigned a variable color and gave it a value of black
    handBag.price = "$1000"; //assigned a variable price and gave it a value of 1000
    handBag.material = "leather" //assigned a varialbe and gave it a value of leather
    document.getElementById("Constant").innerHTML = "This " + handBag.brand + handBag.type //this will display "This
    + " is " + handBag.price + " and it's made out of " + handBag.material + ".";  //Dior tote handbag is $1000 and it's
}                                                                                 //made out of leather." on the browser.


function letFunction() {  //assigned a function
let Y = 24;               //used let keyword to assign y 
{
let Y = 5;                //used let keyword to assign y again
}
document.getElementById("l").innerHTML = Y; //document will return 24 because i declared it outside the brackets
}



var e = myFunction(5, 2);  //assigned a variable to call my function
function myFunction(a, b) { //assigned a function
    return a * b;         //asking to return the sum of a and b 
}
document.getElementById("ret").innerHTML = e //this will return 10 on the browser




let dog = {  //used let keyword to assign dog and assigned properties
    age: 2,
    breed: " German Shepherd ",
    size: "large",
    color: "black and brown",
    weight: "88 lbs.",
    description : function dogfunction() {  //this is a method description function which should 
        return "This dog is a " + this.age + " year old " + this.size + this.breed + " and he's " + this.color + " and he weighs  " + this.weight;
    }                                       //return This dog is a 2 year old large German Shepherd
};                                          //and he's black and brown and he weighs 88 lbs.
document.getElementById("doggy").innerHTML= dog.description();



let text = "";    //used the let keyword to assign text
for (let J = 0; J < 20; J++) {  //J = 0, if J is less than 20 repeat the loop
    if (J === 10) { break; } //if J is equal to 10 break the loop
    text += "Number " + J + "<br>"; //this will return number + J + the number less than 20
}
document.getElementById("num").innerHTML = text; //this will return number 1-9 since J is not equal to 10



let sent = "";   //used let keyword to assign sent 
for (let c = 1; c < 8; c++) {  // c = 1, if c is less than 8 repeat the loop
    if (c === 2) { continue; } //if c is equal to 2 continue the loop
    sent +=  "Number " + c + "<br>"; //this will return number + c + the number less than 8
}
document.getElementById("cont").innerHTML = sent; //this will return number 1, skip 2 because c is not equal to 2
                                                 //then it will display number 3-7
