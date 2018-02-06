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

const swatch = document.getElementById('swatch')

updateRedValue()
updateGreenValue()
updateBlueValue()

function updateRedValue() {
  updateValues(redSlider.value, redValue, redHexValue)
}

function updateGreenValue() {
  updateValues(greenSlider.value, greenValue, greenHexValue)
}

function updateBlueValue() {
  updateValues(blueSlider.value, blueValue, blueHexValue)
}

function updateValues(sliderValue, textLabel, hexLabel) {
  const value = Math.abs(sliderValue)

  textLabel.innerText = value
  hexLabel.innerText = value.toString(16)

  updateSwatch()
}

function updateSwatch() {
  const styleSheet = document.styleSheets[0]
  const rules = styleSheet.cssRules || styleSheet.rules
  const color = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`

  // console.log(`updating color swatch: ${color}`)

  // find our rule
  for (var index = 0; index < rules.length; index += 1) {
    var rule = rules[index]

    if (rule.selectorText === '#swatch') {
      rule.style.backgroundColor = color
    }
  }
}
