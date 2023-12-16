const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');

function myFavColor( ) {
	alert("My Favorite color is: BLACK");
}

function myFavPlace( ) {
	alert("My favorite place is: HOME");
}

function myFavRitual( ) {
	alert("My favorite ritual is: WATCHING EPL MATCHES");
}

favColor.addEventListener('click', myFavColor);
favPlace.addEventListener('click', myFavPlace);
favRitual.addEventListener('click', myFavRitual);