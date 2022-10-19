"use strict";

function task1(){
 while(true){
  let name = prompt("Enter your name, please");
  if(name){
   alert(`Hello ${name}, how are you?`);
   break;
  }
  alert("Try again");
 }
}
task1();

