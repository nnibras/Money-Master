function getTextValue(id) {
  const inputValue = document.getElementById(id);
  const inputValueString = inputValue.value;
  const inputValueNumber = parseFloat(inputValueString);
  return inputValueNumber;
}

function setText(val, id) {
  const setValue = document.getElementById(id);
  setValue.innerText = val;
}
