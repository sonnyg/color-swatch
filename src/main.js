const redSlider = document.getElementById('redSlider')
const greenSlider = document.getElementById('greenSlider')
const blueSlider = document.getElementById('blueSlider')

redSlider.addEventListener('input', updateRedValue, false)
greenSlider.addEventListener('input', updateGreenValue, false)
blueSlider.addEventListener('input', updateBlueValue, false)

const redValue = document.getElementById('redValue')
const greenValue = document.getElementById('greenValue')
const blueValue = document.getElementById('blueValue')

const redHexValue = document.getElementById('redHexValue')
const greenHexValue = document.getElementById('greenHexValue')
const blueHexValue = document.getElementById('blueHexValue')

updateRedValue()
updateGreenValue()
updateBlueValue()

function updateRedValue() {
  updateValues(redSlider.value, redValue, redHexValue)
  updateProperty('red', redSlider.value)
}

function updateGreenValue() {
  updateValues(greenSlider.value, greenValue, greenHexValue)
  updateProperty('green', greenSlider.value)
}

function updateBlueValue() {
  updateValues(blueSlider.value, blueValue, blueHexValue)
  updateProperty('blue', blueSlider.value)
}

function updateValues(sliderValue, textLabel, hexLabel) {
  const value = Math.abs(sliderValue)

  textLabel.innerText = value
  hexLabel.innerText = value.toString(16)
}

function updateProperty(id, value) {
  document.documentElement.style.setProperty(`--${id}`, value);
}
