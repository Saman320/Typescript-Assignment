//Program is written by Saman Siddiqui
// Date: 19-2-24
//This program will write magicians name using array and function.

const magicians: string[] = ["Rohny", "Johny", "Malica", "lia"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);