function myDictionary() { //assigned this function myDictionary
    var Person = {  //assigned this variable Person
        First_Name:"Sally", //assigned a key as First_Name and gave it a value of Sally
        Last_Name:"Rogers", //assigned a key as Last_Name and gave it a value of Rogers
        Gender:"Female", //assigned a key as Gender and gave it a value of Female
        Age:24, //assigned a key as Age and gave it a value of 24
        Eye_Color:"Brown", //assigned a key as Eye_Color and gave it a value of Brown
    };
    document.getElementById("Dictionary").innerHTML = Person.Gender;  //using the document method to return 
}                                                                     //the persons gender from my dictionary to
                                                                      //my html document 


function My_Dictionary() {   //assigned this function My_Dictionary                                     
    var Animal = {           //assigned this variable Animal
        Species:"Dog",       //assigned a key as Species and gave it a value of Dog
        Color:"White",       //assigned a key as Color and gave it a value of White
        Breed:"Goldendoodle", //assigned a key as Breed and gave it a value of Goldendoodle
        Age:2,                //assigned a key as Age and gave it a value of 2
        Age:4,                //assigned a key as Age again and gave it a value of 4 to 
    };                        //see what would happen. It ended up showing the last key I typed in, which was 4
    delete Animal.Age;        //here I am using the delete operator to delete the Animal Age.
    document.getElementById("Dictionary2").innerHTML = Animal.Age; //using the document method to return
}                                                                  //the Animal Age from my dictionary to my
                                                                   //html document. Since I deleted it an the 
                                                                   //earlier step, it will show undefined on 
                                                                   //the html document