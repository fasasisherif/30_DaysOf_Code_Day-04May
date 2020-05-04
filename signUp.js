/* THE FORMAT USED HERE --> "var variable_name = document.getElementsByClassName("className")"
IS USED TO GET A CLASSNAME DECLARED IN THE HTML DOCUMENT */
/* HERE ONLY ONE VAR KEYWORD IS USED TO DECLARE MANY VARIABLES */

var first = document.getElementsByClassName("first"), second = document.getElementsByClassName("second"), third = document.getElementsByClassName("third"), fourth = document.getElementsByClassName("fourth"), fifth = document.getElementsByClassName("fifth"),
sixth = document.getElementsByClassName("sixth");

/* THE SAME CONVENTION IS USED HERE */

var one = document.getElementsByClassName("one"), two = document.getElementsByClassName("two"), three = document.getElementsByClassName("three"), four = document.getElementsByClassName("four"), five = document.getElementsByClassName("five"), six = document.getElementsByClassName("six"),
seven = document.getElementsByClassName("seven"), eight = document.getElementsByClassName("eight"), nine = document.getElementsByClassName("nine"), ten = document.getElementsByClassName("ten"), eleven = document.getElementsByClassName("eleven"), 
twelve = document.getElementsByClassName("twelve");

var label = document.getElementsByTagName("label");

/* I THEN CREATE A CLICK ACTION ON THEM USING "addEventListener("click", function_name)" */

first[0].addEventListener("click",myfunc1);
second[0].addEventListener("click",myfunc2);
third[0].addEventListener("click",myfunc3);
fourth[0].addEventListener("click",myfunc4);
fifth[0].addEventListener("click",myfunc5);
sixth[0].addEventListener("click",myfunc6);

/* ALL THE FUNCTIONS WRITTEN BELOW ARE USED FOR ANIMATIONS */
/* SPECIFICALLY THE INPUT TAG AND FONT-SIZE OF THE LABELS ANIMATION */
/* I ANIMATED THE FONT-SIZE, HEIGHT AND WIDTH RESPECTIVELY */

function myfunc1(){
one[0].style.fontSize ="18px"
two[0].style.height ="50px";
two[0].style.width ="auto";
	}

function myfunc2(){
three[0].style.fontSize ="18px";
four[0].style.width ="auto";
four[0].style.height ="50px";
	}

function myfunc3(){
five[0].style.fontSize ="18px";
six[0].style.width ="auto";
six[0].style.height ="50px";
	}

function myfunc4(){
seven[0].style.fontSize ="18px";
eight[0].style.width ="auto";
eight[0].style.height ="50px";
	}

function myfunc5(){
nine[0].style.fontSize ="18px";
ten[0].style.width ="auto";
ten[0].style.height ="50px";
	}
	
function myfunc6(){
eleven[0].style.fontSize ="18px";
twelve[0].style.width ="auto";
twelve[0].style.height ="50px";
	}	
	
	