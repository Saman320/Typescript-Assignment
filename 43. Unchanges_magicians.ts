//Program is written by Saman Siddiqui
// Date: 19-2-24
//This program have is define unchanged magicians.





const magicians = ["Rohny", "Johny", "Malica", "Lia"];


function copyArray(arr: string[]): string[] {
    return [...arr];
}


function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}


function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const copiedMagicians = copyArray(magicians);


make_great(copiedMagicians);


console.log("Original Magicians:");
show_magicians(magicians);


console.log("\nModified Magicians:");
show_magicians(copiedMagicians);