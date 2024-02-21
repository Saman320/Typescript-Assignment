//Program is written by Saman Siddiqui
// Date: 19-2-24
// This program is written with function that accept a array of items a person wants on a sandwiches.

function makeSandwich(items: string[]): void {
    console.log("I make my sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("I enjoy my sandwich!\n");
}

makeSandwich(["Ketchup", "sauce", "cucumber"]);
makeSandwich(["tomatoes", "parsley"]);
makeSandwich(["nutella", "banana"]);