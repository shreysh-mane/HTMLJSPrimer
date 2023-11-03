

// var a=10;


// var a;  // Declaration
// a=10;   // Initialization

// var a=10;

// let b=20;



// console.log(a);
// console.log(b);
// console.log(c);



// Datatypes:

// let a =10;
// let b=a;

// b++;

// console.log("a: ",a);
// console.log("b: ",b);



//
// let arr2=arr1;

// arr2[0]++;

// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);


//// 


// let num=10;

// let msg="Hello, my name is "
// let completeMsg= msg+st1;
// console.log(completeMsg);




// String declaration
// let st="shre";
// let st1='shre';
// let st2= `Hello, my name is ${st1}`;  //template literal
// console.log(st2);


// let isUser=true;

// let arr1=[10,20,30];

// let obj={
//     name:"Shreysh",
//     city:"pune"
// }

// console.log(obj.city);



// Undefined and null
// Hoisting
// var a;
// console.log(a);  // undefined
// // var a=10;

// a=10;
// console.log(a); // 10


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log("10" + "40");   // 1040
// console.log(6 - 5);     //1 
// console.log("Rohan" + "Rao");  // Rohan Rao
// console.log(" "+"0");         // 0
// console.log("Ramesh" - "Rao");   // NaN
// console.log(true+true);   //2
// console.log(true+ false); // 1 
// console.log(false+true);  // 1
// console.log(false-true); //  -1



// Typeof and isArray

// let a=[10,20];

// let b={
//     name:"shre"
// }

// console.log(typeof a);  // object 
// console.log(Array.isArray(a)); // true

// console.log(typeof b);  // object
// console.log(Array.isArray(b)); // false



// "use strict";
// let oct= 077;
// console.log(oct);

// function abc(a,a){

//     console.log(a);

// }

// abc(10,20);

// function abc(){

//     if(true){
//         a=10;
//         console.log(a);
//     }
//     console.log(a);
// }
// abc();

// console.log(a);


// var let const

// let a=10;

// const b=20;



// var gvar="Hello";
// function f1(){
  
//     console.log(gvar);   //1
    
//     if(true){
        
//         console.log(gvar);  //2
//     }

    
// }
// f1();
 

////Function:

// Declaration type of function in JS.

// 1. Method declaration

// function abc(a){
//     console.log("Method declaration");
// }
// abc(10);


// 2. Method expression / Anonymus methods

// let methodEx= function (a){
//     console.log(a);
// }

// methodEx(20);

//3.  Arrow function.

// let arrowFn= (a) => {
//   console.log("HI");  
//   console.log(a);
// }

// arrowFn(10);


// let sumFn= (a,b) => a+b;


// console.log(sumFn(10,20));


// Defalut parameters in function

// function defPara(a,b=0){
//     console.log("b: ",b); 
//     console.log("Sum: ", a+b);
// }


// defPara(10,20);



// Rest Operator ( ... ):


// function restFun(...numbers){

// //    for(let number of numbers){
// //     console.log(number);
// //    }

// for(let i=0;i<numbers.length;i++)
//     console.log(numbers[i]);
// }

// restFun(1,2,3);
// restFun(1,2);
// restFun(1,2,3,4);



// Spred operator ( ... ):
// function greeting(message, userName){
//     console.log(`${message}!!!! ${userName}`);
// }


// let msg = ["Hello",  "Shreysh","ss"];
// greeting(...msg);


// Truthy and falsy value.

function demoFunction (){

    if(NaN){
        console.log("Inside if");
    }
}

demoFunction()