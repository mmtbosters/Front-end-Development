// Dit is de functie die de menubalk laat verschijnen.
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('body nav:nth-of-type(2)');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});

}

// Hier word de functie gestart.
navSlide();

// Dit is de functie die de rogue laat verschijnen en het welbekende stealth geluidje laat horen.
const rogueUnstealth = () => {
	const gankpaladin = document.querySelector('.gankpally');
	const rogue = document.querySelector('main article:nth-of-type(4) div img:nth-of-type(2)');


	gankpaladin.addEventListener('click', () => {
		rogue.classList.toggle('rogue-active');
		document.getElementById('stealthy').play();
	});
}

// Hier word de functie gestart.
rogueUnstealth();
