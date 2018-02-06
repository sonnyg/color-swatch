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
  const value = redSlider.value

  redValue.innerText = value
  redHexValue.innerText = Math.abs(value).toString(16)
}

function updateGreenValue() {
  const value = greenSlider.value

  greenValue.innerText = value
  greenHexValue.innerText = Math.abs(value).toString(16)
}

function updateBlueValue() {
  const value = blueSlider.value

  blueValue.innerText = value
  blueHexValue.innerText = Math.abs(value).toString(16)
}
