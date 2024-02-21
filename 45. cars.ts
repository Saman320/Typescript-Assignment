//Program is written by Saman Siddiqui
// Date: 19-2-24
// This program have function.


function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const car = storeCarInfo('Honda', 'Rivo', {color: 'black'}, {features: ['Remote start', 'Airbags']});
console.log(car);