window.onload = function() {
	// alert("test");

var project = document.querySelector('fieldset:nth-of-type(3)');
var stage = document.querySelector('fieldset:nth-of-type(4)');

// hide deze fieldset
project.classList.add('verberg');
stage.classList.add('verberg');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	stage.classList.add('verberg');
	project.classList.remove('verberg');
}

// select last radio button you can find
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	stage.classList.remove('verberg');
	project.classList.add('verberg');

}
};