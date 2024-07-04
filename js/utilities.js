function getInputElementByID(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.value);
  return inputValue;
}

function getTextElementByID(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.innerText);
  return inputValue;
}

function setTextElementByID(inputId, value) {
  const inputElement = document.getElementById(inputId);
  inputElement.innerText = value;
}
