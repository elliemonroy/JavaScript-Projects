a = "<br>"; //added a space between by document.write method

document.write(typeof 24); //using the typeof operator to output number on the browser
document.write(a);
document.write(" 55" + 2); //type coercion  is tacking 2 onto the string 55 
document.write(a);         //returning 552 on the browser


function firstFunc() { //assigned a function firstFunc
    document.getElementById("test").innerHTML = 0.0/0.0; //this will print NaN on the browser since you can't
}                                                        // divide 0.0 by 0.0}

function secondFunc() {    //assigned a function to secondFunc
    document.getElementById("test1").innerHTML = isNaN('dog'); //this will print true on the browser since the                                                          
}                                                              //string dog is not a number

function thirdFunc() {  //assigned a function thirdFunc 
    document.getElementById("test3").innerHTML = isNaN('657') //this will print false on the browser since 657 
}                                                             //is a number
 
function fourthFunc() { //assigned a function fourthFunc
    document.getElementById("test4").innerHTML = 5E3456; //this will print infinity on the browser 
}

function fifthFunc() {  //assigned a function fifthFunc 
    document.getElementById("test5").innerHTML = -7E5668; //this will print -infinity on the browser
}

document.write(398 < 2); //this will print out false on the browser since 398 is not less than 2
document.write(a);

document.write(24 > 5); //this will print out true on the browser since 24 is greater than 5
document.write(a);

console.log(4+4);  //the answer to 4 plus 4 which is 8 will display in the console

console.log(88 < 5); //false will display in the console because 88 is not less than 5

document.write(5 == 5); //this will print true on the browser because 5 is equal to 5 
document.write(a);

document.write(30 == 2); //this will print false on the browser because 30 is not equal to 2
document.write(a);

Age1 = 30; //assigned Age1 to 30
Age2 = 30; //assigned Age2 to 30
document.write(Age1 === Age2); //this will print true on the browser because the data type and value match
document.write(a);

Color = 'pink';  //assigned color to a string
Date = 1/24/1992; //assigned date to a date
document.write(Color === Date); //this will print false because the data type and value are different
document.write(a);

x = "this is a string"; //assigned x to a string
y = 5E8788;  //assigned y to infinity 
document.write(x === y); //this will print false because the data type are different 
document.write(a);

birthday1 = 1/20/1993; //assigned birthday1 to a date
birthday2 = 5/24/1991; //assigned birthday2 to a different date
document.write(birthday1 === birthday2); //this will print false since the values are different
document.write(a);

document.write(20 > 10 && 10 > 5); //here i am using the and operator, this will return  
document.write(a);                 //true because they're both true 

document.write(2 > 1 || 29 > 31); //here i am using the or operator, this will return true because 
document.write(a);                //even though 29 is not greater than 31, 2 is greater than 1. 

function notFunc() {  //assigned a function 
    document.getElementById("Not").innerHTML = !(80 > 10); //here i am using the not operator
    document.write(a);                                     //this will return false on the browser                                                            
}                                                          //because 80 is greater than 10.















