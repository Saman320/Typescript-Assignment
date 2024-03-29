//Written by: Saman Siddiqui
//DATE: 17-2-24

// Version-3


alienColor = "red"; 

const pointMap: {[key: string]: number} = {
    "green": 5,
    "yellow": 10,
    "red": 15
};

const points: number | undefined = pointMap[alienColor];

if (points !== undefined) {
    console.log(`The player earned ${points} points.`);
} else {
    console.log("Unknown alien color.");
}