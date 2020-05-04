/* THE FORMAT USED HERE --> "var variable_name = document.getElementsByClassName("className")"
IS USED TO GET A CLASSNAME DECLARED I  THE HTML DOCUMENT */

var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var email = document.getElementsByClassName("email");
var password = document.getElementsByClassName("password");
var myemail = document.getElementsByClassName("myemail");
var mypassword = document.getElementsByClassName("mypassword");
var fill1 = document.getElementsByClassName("fill1");
var fill2 = document.getElementsByClassName("fill2");


/* AFTER THAT I TARGET EACH JAVASCRIPT VARIABLE LIKE AN ARRAY USING THE "variable_name[0]". THIS FORMAT IS USED FOR CLASSNAMES BECAUSE THEY THEY CAN OCCUR MORE THAN ONCE UNLIKE ID'S WHICH CAN ONLY OCCUR ONCE AND IS ACCESSED USING THIS FORMAT "variable_name[0]". */

/* FACT: YOU CAN DECLARE MULTIPLE CLASSNAME ON ONE HTML ELEMENT, BUT YOU CAN ONLY DECLARE ONE ID ON ONE HTML ELEMENT. THIS EXPLAINS WHY ARRAY IS USED TO ACCESS CLASSNAMES */

/* I THEN CREATE A CLICK ACTION ON THEM USING "addEventListener("click", function_name)" */

first[0].addEventListener("click",unique1);
second[0].addEventListener("click",unique2);
email[0].addEventListener("click",unique1);
password[0].addEventListener("click",unique2);


/* "var a = 0" IS USED TO MEASURE THE AMOUNT OF CLICKS ON A PARTICULAR ELEMENT IN THE DOM TREE */

/* SO THAT ON EVERY EVEN NUMBERED CLICK DO THIS, ELSE DO THIS"(odd numbered clicks)" */

/* THIS HELPS US TO WRITE FUNCTIONS THAT ARE CARRIED OUT AFTER ODD NUMBERED CLICKS AND EVEN NUMBERED CLICKS */

var a = 0;

/* THIS FUNCTION "unique1()" is used for some animations likewise the function "unique2()" */

function unique1(){
myemail[0].style.height="40px";
myemail[0].style.width="auto";		
email[0]	.style.fontSize="17px";
a++;

if(a%2 === 0){
myemail[0].style.height="0px";
myemail[0].style.width="0px";		
email[0]	.style.fontSize="25px";		
		}
	}


var b = 0;
function unique2(){
mypassword[0].style.height="40px";
mypassword[0].style.width="auto";		
password[0]	.style.fontSize="17px"		
b++;

if (b%2 === 0){
mypassword[0].style.height="0px";
mypassword[0].style.width="0px";		
password[0]	.style.fontSize="25px"	
    }	
	}
