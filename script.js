function cToF(){
  let degInput = document.querySelector('.d-Input')
  let c = degInput.value
  if(c){
    f = (c * 9 / 5) + 32
    degInput.value = ''
  } else{
    f = 'insert a figure'
  }

  let display = document.querySelector('.display')
  display.innerHTML = `${f}°F`
}
function fToC(){
  let degInput = document.querySelector('.d-Input')
  let f = degInput.value
  if(f){
    c = (f - 32) * 5 / 9
    degInput.value = ''
  } else {
    c = 'insert a figure'
  }

  let display = document.querySelector('.display')
  display.innerHTML = `${c}°C`
}

// Change placeholder
// const selectedOption = selectElement.value
document.addEventListener('DOMContentLoaded', (event) => {
  const selectElement = document.getElementById('options');
  const numberInputElement = document.getElementById('d-Input');

  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'degree-celsius') {
      numberInputElement.placeholder = 'Input deg Celsius';
    } else if (selectedOption === 'farenheit') {
      numberInputElement.placeholder = 'Input Farenheit';
    }
  });

});

// Get references to the input and button elements
const numberInput = document.getElementById('d-Input');
const submitButton = document.getElementById('executeButton');

// Add an event listener to the input element for the 'keydown' event
numberInput.addEventListener('keydown', function(event) {
  // Check if the key pressed is the 'Enter' key
  if (event.key === 'Enter') {
    // Trigger the button click event
    submitButton.click();
  }
});

// Execute
function execute(){
  // Select Element
  const selectElement = document.getElementById('options')
  const selectedOption = selectElement.value
  if(selectedOption === 'degree-celsius'){
    cToF()
  } else if(selectedOption === 'farenheit'){
    fToC()
  }
}