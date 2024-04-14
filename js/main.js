function countKorm() {
	let result_div = document.getElementById("result_div")
	let result = document.getElementById("result")
	result_div.style.visibility = 'visible';
	let value = +document.forms[0].inp.value;
	if (value < 5) {
		res = 90;
	} else if (value < 10) {
		res = 120;
	} else if (value < 25) {
		res = 270;
	} else if (value < 35) {
		res = 360;
	} else if (value < 45) {
		res = 450;
	} else if (value < 55) {
		res = 530;
	} else if (value < 65) {
		res = 590;
	} else {
		res = 700;
	}
	result.innerHTML = res + "г."
}