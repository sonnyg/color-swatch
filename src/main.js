const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

redSlider.addEventListener('input', updateRedValue, false)
greenSlider.addEventListener('input', updateGreenValue, false)
blueSlider.addEventListener('input', updateBlueValue, false)

const redValue = document.getElementById('redValue')
const greenValue = document.getElementById('greenValue')
const blueValue = document.getElementById('blueValue')

updateRedValue()
updateGreenValue()
updateBlueValue()

function updateRedValue() {
  redValue.innerText = redSlider.value
}

function updateGreenValue() {
  greenValue.innerText = greenSlider.value
}

function updateBlueValue() {
  blueValue.innerText = blueSlider.value
}
