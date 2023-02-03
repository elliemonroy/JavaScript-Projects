function addFunc() {  //this is an addition function
    var addition = 276 + 34;
    document.getElementById("Math").innerHTML ="276 + 34 = " + addition;
}

function subFunc() { //this is a subtraction function
    var sub = 488 - 63;
    document.getElementById("minus").innerHTML ="488 - 63 = " + sub;
}

function multiFunc() {  //this is a multiplication function
    var multi = 76 * 18;
    document.getElementById("x").innerHTML = "76 x 18 = " + multi;
}

function divFunc() {  //this is a division function
    var divi = 44 / 8;
    document.getElementById("divide").innerHTML ="44 / 8 = " + divi;
}

function moreMath() {  //this is how you would do multiple operations at once
    var more = (5 + 8) * 12 -1;
    document.getElementById("multiple").innerHTML = "5 plus 8, multiplied by 12, then subtracted by 1 equals " + more;
}

function modOp() {  //modulus operator is being used to show the remainder after these two numbers have been divided
    var mo = 32 % 7;
    document.getElementById("op").innerHTML = "When you divide 32 by 7 you have a remainder of: " + mo;
}

function negOp() {   //negation operator is being used to return a negative 5
    var e = 5;
    document.getElementById("negation").innerHTML = -e;
}

var b = 9; //here i am using the increment operator to increase the number 9
b++;
document.write(b);

var c = 9.45; //here i am using the decrement operator to decrease just the number 9
c--;
document.write(c);

window.alert(Math.random()); //here i am setting up the window alert to return a random number between 0 and 1

window.alert(Math.random() * 50); //here i am setting up the window alert to return a random number between 0 and 50

var d = 7.5; //this is a math object method that rounds d to the nearest integer
document.write(" Round: " + Math.round(d));

