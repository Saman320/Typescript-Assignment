// Program written by Saman Siddiqui
// Date:19-2-24
// This program define their position like 1st, 2nd, 3rd, 4th.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let i = 0; i < numbers.length; i++) {
    
    const number = numbers[i];
    let ordinalEnding: string;

    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${number}${ordinalEnding}`);
}