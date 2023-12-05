document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputUnit = document.getElementById('inputUnit').value;

    var outputTemp;

    switch (inputUnit) {
        case 'celsius':
            outputTemp = convertCelsiusToFahrenheit(inputTemp);
            break;
        case 'fahrenheit':
            outputTemp = convertFahrenheitToCelsius(inputTemp);
            break;
        case 'kelvin':
            outputTemp = convertKelvinToCelsius(inputTemp);
            break;
    }

    document.getElementById('outputTemp').textContent = 'Output Temperature: ' + outputTemp + ' °C';
});

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}