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
];

let slideencours = 3;
let chemin = "./assets/images/slideshow/";

let imageSlide = document.querySelector(".banner-img"); 
let imageTexte = document.querySelector("#banner p"); 
let buttonLeft = document.querySelector(".arrow_left"); 
let buttonRight = document.querySelector(".arrow_right"); 


function afficherSlide () {
	imageSlide.src = chemin + slides[slideencours].image;
	imageTexte.innerHTML = slides[slideencours].tagLine;
}

function afficherPrec () {
	slideencours--;
	console.log(slideencours);
	if (slideencours < 0) {
		slideencours = slides.length - 1
	}
	imageSlide.src = chemin + slides[slideencours].image;
	imageTexte.innerHTML = slides[slideencours].tagLine;
}

function afficherSuiv () {
	slideencours++;
	console.log(slideencours);
	if (slideencours >= slides.length) {
		slideencours = 0
	}
	imageSlide.src = chemin + slides[slideencours].image;
	imageTexte.innerHTML = slides[slideencours].tagLine;
}


/* ecouter le comportement d'un element */
buttonLeft.addEventListener("click", function() {
    console.log("test clic gauche");
	afficherPrec();
	points();
})

buttonRight.addEventListener("click", function() {
    console.log("test clic droit");
	afficherSuiv();
	points();
})

let dots = document.querySelector(".dots"); 

function points() {
	dots.innerHTML = "";
	for (let i=0; i < slides.length; i++) {
		console.log(i);
		if (i==slideencours ) {
		dots.innerHTML += "<div class='dot dot_selected'></div>";
		} else {
		dots.innerHTML += "<div class='dot'></div>";
		}
	}
}

afficherSlide();
points();




