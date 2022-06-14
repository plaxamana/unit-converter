/**
 * Converting Distance:
 * 1 meter = 3.28084 feet
 * 1 foot = 0.3048 meters
 * 
 * Converting Volume:
 * 1 liter = 0.264172 US gallons
 * 1 gallon = 3.78541 liters
 * 
 * Converting mass:
 * 1 kg = 2.20462 lbs
 * 1 lb = 0.453592 kg
 */

const lengthText = document.getElementById('length');
const massText = document.getElementById('mass');
const volumeText = document.getElementById('volume');
const unitToConvert = document.querySelector('.convert-unit-box');
const btnConvert = document.querySelector('.btn-convert')

function convertDistance(value) {
  const fixedConstant = 3.28084;
  let feet = value * fixedConstant;
  let meters = value / fixedConstant;

  return `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`;
}

function convertVolume(value) {
  const fixedConstant = 3.78541;
  let gallons = value / fixedConstant;
  let liters = value * fixedConstant;

  return `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`;
}

function convertMass(value) {
  const fixedConstant = 2.20462;
  let pounds = value * fixedConstant;
  let kilograms = value / fixedConstant;

  return `${value} kilograms = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilograms.toFixed(3)} kilograms`
}

btnConvert.addEventListener('click', () => {
  massText.textContent = convertMass(unitToConvert.value);
  lengthText.textContent = convertDistance(unitToConvert.value);
  volumeText.textContent = convertVolume(unitToConvert.value);
})