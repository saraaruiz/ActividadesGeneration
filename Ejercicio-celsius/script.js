let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let convertButton = document.getElementById('convertButton');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

convertButton.addEventListener('click', function() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;

    console.log(`Celsius Input: ${cTemp} °C`);
    console.log(`Fahrenheit Result: ${roundNumber(fTemp)} °F`);
    console.log(`Kelvin Result: ${roundNumber(kTemp)} K`);

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});