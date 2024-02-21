// Program written by Saman Siddiqui
// Date:14-2-24
// This program define lowercase, uppercase, titlecase.



let personname :string = ``;


personname =  prompt(`Enter your Name!`) || ``;

let lowercase :string = personname.toLowerCase();
let uppercase :string = personname.toUpperCase();
let titlecase :string = personname.split(``).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(``)

if( personname !== null && personname !== ``){
    alert(`Hello ${personname} This is your name in:
    lowercase ${lowercase}
    uppercase ${uppercase}
    titlecase ${titlecase}`)
}
else{
    alert(`Error!`)
}