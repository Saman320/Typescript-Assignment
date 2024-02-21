// Program written by Saman Siddiqui
// Date:16-2-24
// We use variable for Array and for loop in this program.


let Guest_List :string[] = ['Imran khan','Salman Khan','Shahrukh khan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Ahmed Khan' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// Add 3 guests in array
Guest_List.unshift('Irfan khan') ;
Guest_List.splice(2 , 0 , 'Ali Khan');
Guest_List.push(`Saad khan`);

// add 3 more guest in array now total guests are 6
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// Removing Guest
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// Remaining Guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

// Empty Array
Guest_List.splice(0, 2);
console.log(Guest_List);

// exercise 7 Array length
console.log('\n\n' + Guest_List.length);