var x = 30; //assigned a global variable. 
function addNum1() { //assigned a function 
    document.write(50 + x + "<br>"); //here we are asking it to return the sum
}
function addNum2() { //assigned a function 
    document.write(x + 250 + "<br>"); //here we are asking it to return the sum
}
addNum1(); //this will print the 
addNum2(); //sum on the browser

function subNum1() {  //assigned a function
    var y = 20;       //assigned a local variable
    document.write(40 - y); //here we are asking it to find the difference
    document.write("<br>")
}
subNum1(); //this will print the difference on the browser

function add1() {             //assigned a function
    var B = 5;                //assigned a variable
    console.log(2 + 5);       //this will display in the console.log
}
function add2() {            //assigned a function
    console.log(10 + B);     //this will return an error message since I assigned B in the other function
}
add1();
add2();

function showDate() {  //assigned a function 
    if (new Date().getHours() < 17) { //here I am stating that if it is less than 17 
        document.getElementById("reminder").innerHTML = "to go eat something!"; //print reminder on the browser
    }
}


if (10 > 2) {  //here I am stating that if 10 is greater than 2 display string on browser
    document.write("The number on the left is greater than the number on the right");
}

function venueFunction() {         //assigned a function
    Age = document.getElementById("age").value; //assigned a variable and gave it a value 
    if (Age >=21) {                             //here i am stating if age is greater than 21
        Venue = "Yay! You can come into the venue! :)" //display this string on the browser
    }
    else {                                      
        Venue = "Oh no! You can't come into the venue! :(";  //here I am stating if age is less than 21
    }                                                        //display this string on the browser
    document.getElementById("yourage").innerHTML = Venue;    //this will show one of the venue messages based
}                                                            //on what age they put in

function Time_function() {                    //assigned a function
    var Time = new Date().getHours();         //assigned a variable to new date get hours
    var Reply;                                //this will display on the browser if the time
    if (Time < 12 == Time > 0) {              //is less than 12 or greater than 0
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {      //this will display on the browswer if the time
        Reply = "It is afternoon.";          //is greater or equal to 12 or if the time is 
    }                                        //less than 18
    else {
        Reply = "It is evening time.";       //this will display on the browser if the time is less
    }                                        //than 18
    document.getElementById("Time_of_day").innerHTML = Reply; //here we are telling the document to get
}                                                             //the elementbyid and to show one of those replies
                                                              //based on what time it is







