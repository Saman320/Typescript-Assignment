// Program written by Saman Siddiqui
// Date:16-2-24
// We use Array function and for loop in this program.
let Guest_list :string[] =[`Imran khan`,`Salman khan`,`Shahrukh khan`];

// for(let i=0; i<Guest_list.length; i++){

    // console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
// }
let absent_guest :string = `Imran khan`;
let new_guest :string = `Ahmed khan`;

Guest_list[0] = new_guest;

// for(let i=0; i<Guest_list.length; i++){

    // console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
//    }

console.log(`Mr.${absent_guest} is not come to the reception.`);
console.log(`Good News! We find Big Table So we are inviting 3 more guests.`)

Guest_list.unshift(`Irfan Khan`);
Guest_list.splice(2 , 0 ,`Ali khan`);
Guest_list.push(`Saad khan`);



for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr.`+ Guest_list[i] + `,\n\nIt is our pleasure to invite you in our reception.\n\nThank you`)
    }

    console.log(`\nSorry we can not arrange the big table, only two person will be invited.`);
    while(Guest_list.length > 2){

    var remove_guest = Guest_list.pop();
    }
    console.log(`Sorry Mr. ${remove_guest}} , you are not invited for reception.`);



    for(let i=0; i<Guest_list.length; i++){

        console.log(`Dear Mr. ` + Guest_list[i] + `,\n\nYou are still invited.\n\nThank you`)
        }

    Guest_list.splice(0, 2);

    console.log(Guest_list)