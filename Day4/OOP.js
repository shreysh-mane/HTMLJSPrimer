// Obj Method

// let person={
//         name:"Chandan",
//         age:50,
//         city:"Mysore",

//         getDetails:function(){
//              console.log(`${this.name}  ${this.age}`);
//             // console.log(this);
//         }
// }

// person.getDetails();


// class Person{


//     constructor(name,age){
//         this.name=name,
//         this.age=age
        
//     }

//     getName(){
//         return this.name;
//     }

//     getAge(){
//         return this.age;
//     }

// }

// let p1=new Person("Yash",23);
// console.log(p1.getName());

// let p2=new Person("shubham",10);
// console.log(p2.getName());
// console.log(p2.getAge());





// Inheritance

class Animal{

    speak(){
        console.log("Animal makes sound");
    }

}

class Dog extends Animal{

    constructor(name,age){
        super();
        this.name=name;
        this.age=age;
    }

    speak(){
        console.log("Dog barks");
    }


}
let d1=new Dog("Doggy",12);
console.log(d1.name);
d1.speak();





