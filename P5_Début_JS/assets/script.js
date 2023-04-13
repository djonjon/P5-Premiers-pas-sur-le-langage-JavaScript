const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function onButtonclick (event) {
	console.log(event.currentTarget)
	const slideImg = document.querySelector('.banner-img');
	const slideCount = slides.length;
	let currentIndex = 0 ;

	for (let i = 0; i < slideCount; i++) {
		if ( slideImg.getAttribute('src').includes(slides[i].image)) {
			currentIndex = i;
			break
		}
	}
}

const arrow = document.querySelectorAll('.arrow').forEach(arrow => {
	arrow.addEventListener('click', onButtonclick)
})

const dotsContainer = document.querySelector('.dots');

for ( let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div'); 
	dot.classList.add('dot');
	if ( i === 0) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
}

