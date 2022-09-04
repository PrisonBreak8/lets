// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";



//========================================================================================================================================================
let searchForm = document.querySelector('.header .search-form');
let menuDark = document.querySelector('.dark');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('_active');
	loginForm.classList.remove('_active');
	//menuDark.classList.add('_active');
	console.log(searchForm);
}

//========================================================================================================================================================
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
	loginForm.classList.toggle('_active');
	searchForm.classList.remove('_active');
	menuDark.classList.toggle('_active');
	console.log(loginForm);
}


//========================================================================================================================================================
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#info-btn').onclick = () => {
	contactInfo.classList.add('_active');
	menuDark.classList.add('_active');
}

document.querySelector('#close-contact-info').onclick = () => {
	contactInfo.classList.remove('_active');
	menuDark.classList.remove('_active');
}

document.querySelector('.dark').onclick = () => {
	contactInfo.classList.remove('_active');
	menuDark.classList.remove('_active');
	loginForm.classList.remove('_active');
	//document.body.classList.remove('_lock');
}


window.onscroll = () => {
	searchForm.classList.remove('_active');
	loginForm.classList.remove('_active');
	contactInfo.classList.remove('_active');
	menuDark.classList.remove('_active');
}

