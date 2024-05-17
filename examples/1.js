"use strict"; 
//1
function test1() { 
let a = 10; 
if (a > 5) { 
a = 7; 
} 
console.log("a = " + a); 
} 
test1(); 

//2
function test2A() { 
    if (1 == 1) { 
    let a = 5; 
    } 
    console.log("a = " + a); 
    } 
    test2A(); 

function test2B() { 
if (1 == 1) { 
let a = 5; 
} 
console.log("a = " + a); // Moved console.log inside the block to access the variable a
} 
test2B(); 

//3
let a = 4; //used on 3,4,5,6
function test3() { 
  a = 3; 
  console.log("a = " + a); 
} 
test3(); 
console.log("a = " + a); 

//4
function test4() { 
  let a = 7; 
  console.log("a = " + a); 
} 
test4(); 
console.log("a = " + a); 

//5
function test5() { 
    a = 7; 
    function again() { 
        let a = 8; 
        console.log("a = " + a);   
    } 
    again(); 
    console.log("a = " + a);  
} 
test5(); 
console.log("a = " + a); 

//6
function test6() { 
let a = 7; 
function again() { 
let a = 8; 
console.log("a = " + a);   
} 
again(); 
console.log("a = " + a);   
} 
test6(); 
console.log("a = " + a); 