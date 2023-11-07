
// Get Form data.

let form=document.getElementById('myForm');

const ul=document.getElementById('userList');


let users=[];

function userRegistration(event){

    event.preventDefault();
    // Prevent form submission // prevent bydef form reloading.

   let name=document.getElementById('uname').value; 
   document.getElementById('uname').value="";

   let pass=document.getElementById('upass').value;

    let user={
        uname:"",
        upass:""
    }

   user.uname=name;
   user.upass=pass;
   users.push(user);
  
//    ul.innerHTML +=`<li>${name}</li>`;

// Creating new HTML elements using JS

// Create HTML element: document.createElement('<Element Name>');
var newLi=document.createElement('li');

// Add Contenet in Element:  newElement.innerHTML="";
newLi.innerHTML=`${name}`;


// Adding new element to parent element : parentEle.appendChild(<NewElemnt>);
ul.appendChild(newLi);



}

form.addEventListener('submit',userRegistration);