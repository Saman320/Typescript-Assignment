// Program written by Saman Siddiqui
// Date:14-2-24
// Store a Person name in a variable


let PersonName :string = "";
PersonName = prompt("What is your Name") || "";
if( PersonName !== null && PersonName !== ""){
    alert(`Hello ${PersonName}, would you like to learn some python today?`)
}
else{
   alert(`You have to fill your name`) 

}