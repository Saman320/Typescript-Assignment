// Program written by Saman Siddiqui
// Date:16-2-24
// We use Array function for changing guest list.


let Guest_list :string[] =[`Imran khan`,`Salman khan`,`Shahrukh khan`];

// for(let i=0; i<Guest_list.length; i++){

    // console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
// }

let absent_guest :string = `Imran khan`;

let new_guest :string = `Ahmed khan`;

Guest_list[0] = new_guest;

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
   }

console.log(`Mr.${absent_guest} is not come to the reception.`);

console.log(`Good News! We find Big Table So we are inviting 3 more guests.`)

Guest_list.unshift(`Irfan Khan`);

Guest_list.splice(2 , 0 ,`Sara khan`);

Guest_list.push(`Amna khan`);

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
    }