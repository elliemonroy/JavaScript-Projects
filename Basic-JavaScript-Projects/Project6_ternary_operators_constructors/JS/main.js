function voteFunction() {  //assigned a function 
    var Age, canVote;      // assigned two variables 
    Age = document.getElementById("age").value;  //here we are returning the age to browswer & giving it a value
    canVote = (Age < 18) ? "YOU ARE NOT OLD ENOUGH":"YOU ARE OLD ENOUGH";  //here we are returing to the browser 
                                                                           //if age is less than 18 they're not
                                                                           //old enough & if age is greater than
                                                                           //18 it will return they're old enough
    document.getElementById("vote").innerHTML = canVote + " TO VOTE."; //this will return to vote on the browser
}


function newFunction() {   //assigned a function
    var E ="Have a great day!"; //assigned a variable and gave it a string value
    document.getElementById("New_and_This").innerHTML = E; //this will return the string on the browser
}

function funcOne() { //assigned a function
    var B = float; // assigned a variable the value of a reserved word
    document.getElementById("fl").innerHTML = B; //this didn't return anything to the browser
}

function Student(first, last, grade, gradeAv) { //assigned my function constructor 
    this.firstName = first;                     //assigned firstName and gave it a value first
    this.lastName = last;                       //assigned lastName and gave it a value last
    this.grade = grade;                         //assigned grade and gave it a value grade
    this.gradeAverage = gradeAv;                //assigned gradeAverage and gave it a value gradeAv
}

var studentOne = new Student("Lily", "Jacobs", 10, 4.0); //created a new student and gave them values
var studentTwo = new Student("John", " Pike", 11, 3.8); //created another student and gave them values
function myStudent() {                                  //assigned another function
    document.getElementById("mine").innerHTML =         //this function is going to display the results of 
    "This is our new student " + studentTwo.firstName + studentTwo.lastName +  //my function constructor
    " they are in " + studentTwo.grade + "th grade with a GPA of " + studentTwo.gradeAverage;
} 

function addNums() {  //assigned a function 
    document.getElementById("Nested_Function").innerHTML = Nums();//this will print the nested function on browser
    function Nums() { //assigned another function 
       var x = 2; //assigned a variable and gave it a value of two
       function addFive() {x += 5;} //this is my nested function. It is adding five to two
        addFive(); // here i am asking my nested function
        return x;  //to return the sum 
    }
}

