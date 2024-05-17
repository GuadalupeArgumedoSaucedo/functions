function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
}

let currentTemp = -40; //change temp
let fahrenheitTemp = convertCtoF(currentTemp);

console.log(`${currentTemp}°C is equal to ${fahrenheitTemp.toFixed(2)}°F`);