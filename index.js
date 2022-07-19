
// navbar toggle for mobile menu 

$(document).ready(function(){
   $('.side-bar').click(function(){
       $('nav .nav-items').toggleClass("active");
       $('.side-bar i').toggleClass("active");
   })

   
})

//custom javaSrcipt for tab

let btnOne = document.getElementById("btn1");
let btnTwo = document.getElementById("btn2");
let btnThree = document.getElementById("btn3");

let contentOne = document.getElementById("tab-body1");
let contentTwo = document.getElementById("tab-body2");
let contentThree  = document.getElementById("tab-body3");


const accilent = ()=>{
   contentOne.style.opacity = "1";
   contentTwo.style.opacity = "0";
   contentThree.style.opacity = "0";

   contentOne.style.transform = "scale(1)"
   contentTwo.style.transform = "scale(0.5)"
   contentThree.style.transform = "scale(0.5)"

   contentOne.style.transitionDelay="0.6s";
   contentTwo.style.transitionDelay="0s";
   contentThree.style.transitionDelay="0s";

   btnOne.style.color = "white";
   btnOne.style.backgroundColor = "#009DFF"

   btnTwo.style.color = "black";
   btnTwo.style.backgroundColor="white";

   btnThree.style.color = "black";
   btnThree.style.backgroundColor = "white";

   
 
}
const qualified = ()=>{
    contentOne.style.opacity = "0";
    contentTwo.style.opacity = "1";
    contentThree.style.opacity = "0";

    contentOne.style.transform = "scale(0.5)"
    contentTwo.style.transform = "scale(1)"
    contentThree.style.transform = "scale(0.5)"

    contentOne.style.transitionDelay="0s";
    contentTwo.style.transitionDelay="0.6s";
    contentThree.style.transitionDelay="0s";


    btnOne.style.color = "black";
    btnOne.style.backgroundColor = "white"
 
    btnTwo.style.color = "white";
    btnTwo.style.backgroundColor="#009DFF";
 
    btnThree.style.color = "black";
    btnThree.style.backgroundColor = "white";
 }
 const emargency = ()=>{
    contentOne.style.opacity = "0";
    contentTwo.style.opacity = "0";
    contentThree.style.opacity = "1";


    contentOne.style.transform = "scale(0.5)"
    contentTwo.style.transform = "scale(0.5)"
    contentThree.style.transform = "scale(1)"

    contentOne.style.transitionDelay="0s";
    contentTwo.style.transitionDelay="0s";
    contentThree.style.transitionDelay="0.6s";


    
    btnOne.style.color = "black";
    btnOne.style.backgroundColor = "white"
 
    btnTwo.style.color = "black";
    btnTwo.style.backgroundColor="white";
 
    btnThree.style.color = "white";
    btnThree.style.backgroundColor = "#009DFF";
 }