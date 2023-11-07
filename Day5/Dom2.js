
// Get Form data.

let user={
    uname:"",
    upass:""
}


let form=document.getElementById('myForm');

function userRegistration(event){

    event.preventDefault();
    // Prevent form submission // prevent bydef form reloading.

   let name=document.getElementById('uname').value; 

   let pass=document.getElementById('upass').value;

  
   user.uname=name;
   user.upass=pass;

    console.log(user);

}

form.addEventListener('submit',userRegistration);