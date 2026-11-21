
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

function celsiusToKelvin(c) {
  return c + 273.15;
}

function kelvinToCelsius(k) {
  return k - 273.15;
}

function convertTemperature(value, from, to) {
  // Step 1: turn the starting value into Celsius
  let celsius;
  if (from === "C") {
    celsius = value;
  } else if (from === "F") {
    celsius = fahrenheitToCelsius(value);
  } else {
    celsius = kelvinToCelsius(value);
  }

  if (to === "C") {
    return celsius;
  } else if (to === "F") {
    return celsiusToFahrenheit(celsius);
  } else {
    return celsiusToKelvin(celsius);
  }
}
