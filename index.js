console.log("hello world");

const photo = document.querySelector("#photo");


function mouseOver() {
	
	alert("You're right! That is my profile picture on Zoom as well");
}


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
photo.addEventListener('mouseover', mouseOver);