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

// Fonction éxécutée lors du clic sur un bouton de navigation
function onButtonClick(event) {
	// Obtenir l'index actuel de la diapositive
	let currentIndex = getCurrentIndex();
	let myImage = getImageElement();
  
	// Trouver l'index de la diapositive actuellement affichée
	for (let i = 0; i < slides.length; i++) {
	  if (slides[i].image === myImage.getAttribute('src')) {
		currentIndex = i;
		break;
	  }
	}
  
	// Déterminer le nouvel index en fonction du bouton cliqué
	if (event.currentTarget.classList.contains('arrow_left')) {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	} else {
	  currentIndex = (currentIndex + 1) % slides.length;
	}
  
	// Mettre à jour la diapositive affichée
	updateSlide(currentIndex);
  }
  
// obtenir l'index de la diapositive de la banière
  function getImageElement() {
	return document.querySelector('.banner-img');
  }
  
// Obtenir l'index de la diapositive actuellement sélectionnée
  function getCurrentIndex() {
	let dots = document.querySelectorAll('.dot');
	let index;
  
	// Obtenir les points (dots) pout=r trouver celui qui est sélectionnée
	for (let i = 0; i < dots.length; i++) {
	  if (dots[i].classList.contains('dot_selected')) {
		index = i;
		break;
	  }
	}
  
	return index;
  }
  
// mettre à jour la diapositive affichée
  function updateSlide(index) {
	let slideImage = document.querySelector('.banner-img');
	// Mettre à jour l'attibut src de l'image avec le chemin de la nouvelle image
	slideImage.src = `./assets/images/slideshow/${slides[index].image}`;
  
	let tagLine = document.querySelector('#banner p span');
	// Mettre à jour le contenu de la légende de la diapositive
	tagLine.innerHTML = slides[index].tagLine;
  
	let dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		// Appliquer la classe "dot_selected" au point correspondant de la diapositive
	  if (i === index) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  // Sélectionner tous les boutons de navigation
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(arrow => {
	// Ajouter un écouteur d'évennement de clic à chaque bouton
	arrow.addEventListener('click', onButtonClick);
  });
  
  const dotsContainer = document.querySelector('.dots');
  // Créer les points de navigation pour chaque diapositive
  for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === 0) {
	  dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
  }