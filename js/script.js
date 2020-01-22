// JavaScript Document

/*const HEADSIZE_2 = document.querySelector(".head-size-2");
const HEADSIZE_3 = document.querySelector(".head-size-3");


HEADSIZE_3.classList.remove(".hide");
HEADSIZE_2.classList.add('.hide');


function reveal(e) {
	e.preventDefault();
	HEADSIZE_2.classList.toggle(".hide");
	HEADSIZE_3.classList.toggle(".hide");
	
}




HEADSIZE_2.addEventListener('hover' , reveal , false);
HEADSIZE_3.addEventListener('hover', function(){console.log("Hovered")}, false);*/


/*'url('+images[slide-1]+')'*/
//Automatic Slider

const img = document.querySelector(".image-cover-2");

var images = [];

images[0] = '../images/crane.jpg';
images[1] = '../images/tool-1.jpg';
images[2] = '../images/buiding.jpg';

var slide = 0;

function slider(){
	if(slide<images.length){
		slide= slide + 1;
	}else{
		slide=1;
	}
	
	img.style.backgroundImage = 'linear-gradient(-130deg ,rgba(0, 0, 0, 0.8),rgba(100,167,87,.38)), url("' + images[slide-1] + '")';
}

setInterval(slider , 3000);

