//Written by: Saman Siddiqui
//DATE: 17-2-24



console.log("Equality test with strings:", ("cat" as string) === "cat"); 
console.log("Inequality test with strings:", ("cat" as string) !== "dog"); 


console.log("Lowercase function test:", "HAPPY".toLowerCase() === "happy"); 


console.log("Equality test with numbers:", 8 === 8);
console.log("Inequality test with numbers:", (15 as number) !== 5);
console.log("Greater than test:", 9 > 4);
console.log("Less than test:", 4 < 9);
console.log("Greater than or equal to test:", 20 >= 20);
console.log("Less than or equal to test:", 5 <= 15);


console.log("And operator test:", true && true); 
console.log("Or operator test:", true || false);


const color :string[] = ["Green", "Blue", "white"];
console.log("Test 'Green' in the array:", color.includes("Green")); 


console.log("Testing 'white' is not in array:", !color.includes("white"));