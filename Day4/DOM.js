

// console.log(document);

// console.log(document.body.childNodes);

// console.log(document.body.children);

// console.log(document.body.firstChild);  //text


// console.log(document.body.firstElementChild); //div


// console.log(document.body.parentElement);



// Select HTML Elements using selctors.

// getElementById('<idName>');


// const id1Element= document.getElementById('i1');
// console.log(id1Element);


// getElementsByClassName
// const mainClassElements = document.getElementsByClassName('mainDiv');
// console.log(mainClassElements);


// getElementsByTagName
// const divElements= document.getElementsByTagName('div');
// console.log(divElements);


// querySelector

// id selector => #<Name of ID>
// Class Selector => .<Name of Class>
// Tag selector => <Tag Name>

// const id1Element = document.querySelector('#i1');
// console.log(id1Element);


// const mainClassElements = document.querySelector('.mainDiv');
// console.log(mainClassElements);




// querySelctorAll
// const mainClassElementsAll = document.querySelectorAll('.mainDiv');
// console.log(mainClassElementsAll);

// const divElements= document.querySelectorAll('div');
// console.log(divElements);


// Change the text in DOM:

// innerHTML 
const id1ele=document.getElementById('i1');
id1ele.innerHTML="Shreysh";
