function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }
  
  let currentTemp = 212; //change temp
  let celsiusTemp = convertFtoC(currentTemp);
  
  console.log(`${currentTemp}°F is equal to ${celsiusTemp.toFixed(2)}°C`);
 