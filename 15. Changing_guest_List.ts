// Program written by Saman Siddiqui
// Date:15-2-24
// We use Variable for Array and for loop in this program.



let Guest_list :string[] =[`Imran khan`,`Salman khan`,`Shahrukh khan`];

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
}

let absent_guest :string = `Imran khan`;

let new_guest :string = `Ahmed khan`;

Guest_list[0] = new_guest;

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
}

console.log(`Mr.${absent_guest} is not come to the reception.`);