// How to take input from the browser.


// alert("Hello there!!");


// let userName=prompt("Enter your name");
// console.log(userName);

// let userAge=parseInt(prompt("Enter your age"));
// console.log( typeof userAge);




// Arrays in js:

let arr=[1,2,3,4,"Shreysh"];

// console.log(arr);

// console.log(arr[5].a);

// for of to access elements
// for(let elements of arr){
//     console.log(elements);
// }

// for in to access index
// for(let index in arr){
//     console.log(index);
// }


//forEach
let sum=0;
arr.forEach(function (element){
    //operation 

    // console.log(`Element: ${element}, Index: ${index}, ar: ${arr} `);
    // console.log(`Element: ${element} `);
    sum+=element; 
}
)
// console.log(sum);


arr.forEach((element,index)=>{
    console.log(element);
})

















