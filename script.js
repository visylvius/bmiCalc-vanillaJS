var heightForm = document.getElementById('height');
var weightForm = document.getElementById('weight');
var bmiForm = document.getElementById('bmi');

function getHeight(event) {
	event.preventDefault();
  heightValue = document.getElementById('height-data').value;
  heightValue = Number(heightValue);
  heightForm.reset();
}

function getWeight(event) {
  event.preventDefault();
	weightValue = document.getElementById('weight-data').value;
  weightValue = Number(weightValue);
	weightForm.reset();
}

function calculateBMI(event) {
  event.preventDefault();
	var BMI = weightValue / (heightValue * heightValue) * 703;
  document.getElementById('bmiList').innerHTML += "<li>" + BMI + "</li>";
}

heightForm.addEventListener('submit', getHeight, false);
weightForm.addEventListener('submit', getWeight, false);
bmiForm.addEventListener('submit', calculateBMI, false);
