window.onload = function() {
	// alert("test");
	var menuKnop = document.querySelector('div:nth-of-type(1)');
	var menuLijst = document.querySelector('nav');
	var menuWeg = document.querySelector('header');
	var over = document.querySelector('body>main>article>footer>h1');
	var overDetail = document.querySelector('body>main>article>footer>p');

	menuKnop.onclick = function() {
		menuLijst.classList.add('laat-zien');
		menuKnop.classList.add('verberg');
	};

	menuWeg.onclick = function() {
		menuLijst.classList.remove('laat-zien');
		menuKnop.classList.remove('verberg');
	};

	over.onclick = function() {
		overDetail.classList.add('meer');
	};

	
	
};