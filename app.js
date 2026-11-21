// app.js: connects the page to the conversion functions

const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const result = document.getElementById("result");

function update() {
  const value = parseFloat(valueInput.value);

  if (isNaN(value)) {
    result.textContent = "Please enter a number";
    return;
  }

  const answer = convertTemperature(value, fromSelect.value, toSelect.value);
  result.textContent = value + " " + fromSelect.value + " = " + answer.toFixed(2) + " " + toSelect.value;
}

// run update whenever the user changes something
valueInput.addEventListener("input", update);
fromSelect.addEventListener("change", update);
toSelect.addEventListener("change", update);

update();
