// How to take input from the browser.


// alert("Hello there!!");


// let userName=prompt("Enter your name");
// console.log(userName);

// let userAge=parseInt(prompt("Enter your age"));
// console.log( typeof userAge);




// Arrays in js:

// let arr=[1,2,3,4,"Shreysh"];

// console.log(arr);

// console.log(arr[5]);

// for of to access elements
// for(let elements of arr){
//     console.log(elements);
// }

// for in to access index
// for(let i in arr){
//     console.log(i);
// }


//forEach
// let sum=0;
// arr.forEach(function (element,index, arr){
    //operation 

    // console.log(`Element: ${element}, Index: ${index}, ar: ${arr} `);
    // console.log(`Element: ${element} `);
    // sum+=element; 
// }
// )
// console.log(sum);


// arr.forEach((element,index)=>{
//     console.log(element);
// })



// Array Methods.
// let arrMeth=[1,2,3,4,5];

// 1. pop();
// let a=arrMeth.pop();
// console.log(a);
// console.log(arrMeth);

// 2. push()

// arrMeth.push("A");
// console.log(arrMeth);


// 3. shift()

// arrMeth.shift();
// console.log(arrMeth);

// 4. unshift()

// arrMeth.unshift(0);
// console.log(arrMeth);

// 5. indexOf(element);

// console.log(arrMeth.indexOf(2));
// console.log(arrMeth.indexOf(2));
// console.log(arrMeth.lastIndexOf(2));

// if(arrMeth.indexOf(2)==arrMeth.lastIndexOf(2)){
//     console.log("present once");
// }else{
//     console.log("present multiple times");
// }


//Slice
// first para is the start index 
// second para is the end index + 1
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,4);
// console.log(citrus);
// console.log(fruits);


// Splice()

// Splice for deleting element using index
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,1);
// console.log(fruits);

// Splice for adding new element at specific index
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,0,"a","b");
// console.log(fruits);


// const fruits = ["Banana","Orange", "Apple", "Mango"];
// delete fruits[2];
// console.log(fruits);

// for(let ele of fruits){
//     console.log(ele);
// }

//  toString()
// let arr2=[1,2,3]
// console.log(arr2.toString())


// sort()

// let arr3=[1,2,4,3,8,6,10,11,20];
// console.log(
//     arr3.sort(
//         (a,b)=>a-b
//         )
//     );

// let arr4=["jan","feb","march"]
// console.log(arr4.sort());




// Filter

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers= numbers.filter((num,index,arr) =>{
//     console.log(index)
//     return num <8;
// });
// console.log(evenNumbers); 
// console.log(numbers); 

// Map

// const twice= numbers.map((num,index, arr)=>{
//          return num/2;
// });
// console.log(twice);


// const sum= numbers.reduce((acc, num, index, arr)=>{

//     console.log(`acc: ${acc} num:${num}  index:${index}  arr:${arr}`);

//     return acc+num;

// })
// console.log(sum);


/////////////


// Hoisting

// console.log(a);
// var a=10;
// console.log(a);

// function demoFunction(){
//     var demotext="Hello";

//     function innerFunction(){

//     }
//     innerFunction();
//     return demotext;
// }
// console.log(msg)
// var msg=demoFunction();
// console.log(msg);






















