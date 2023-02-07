function fullSent() {             //assigned a function
    var sentOne = "Have a great "; //assigned a variable a string
    var sentTwo = "day. Rememeber to "; //assigned a variable a string
    var sentThree = "stay positive!"; //assigned a variable a string 
    var fullSentence = sentOne.concat(sentTwo, sentThree); //assigned this variable to concatenate all of my strings 
    document.getElementById("together").innerHTML = fullSentence; //so it can display the full sentence on the browser
}

function sliceMethod() {                                  //assigned a function
    var Line = "If life gives you lemons make lemonade";  //assigned a variable
    var Section = Line.slice(18,24);                      //assigned a varialbe to slice my string 
    document.getElementById("slice").innerHTML = Section; //this will display lemons on the browser
}

function upperCase() {                   //assigned a function
    var text = document.getElementById("uppercase").innerHTML; //assigned a variable to get the documentbyid
    document.getElementById("uppercase").innerHTML = text.toUpperCase(); //using the uppercase method to display
}                                                                       //the text in all uppercase on the browser

function searchMethod() {    //assigned a function
let text = "Pink is my favorite color." //assigned a variable a string
let position = text.search("favorite"); //assigned a variable the search method to find the word favorite in the string
document.getElementById("find").innerHTML = position; //this will display the position of favorite on the browser
}

function stringMethod() {    //assigned a function
    var E = 24;             //assigned a variable a number
    document.getElementById("numberString").innerHTML = E.toString(); //document is getting elementbyid 
}                                                                     //and it's using the the string method
                                                                      //to display the number on the browser
function precisionMethod() {  //assigned a function
    var x = 10.241993;        //assigned a variable a decimal number
    document.getElementById("format").innerHTML = x.toPrecision(4); //document is getting elementbyid
}                                                                   //and it's using the precision method to 
                                                                    //display only the first 4 numbers on the 
                                                                    //browser
num = 4.8378659;   //assigned a variable a decimal number
num2 = num.toFixed(); //assigned another variable tofixed method to round my decimal number
document.write(num2); //this will print the new number on the browser
document.write("<br>") //made a space 

A = 100;   //assigned a variable and gave it the value of 100
B = A.valueOf(); //assigned B to give me the value of A
document.write(B); //this will print the value of A on the browser


