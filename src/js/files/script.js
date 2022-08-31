// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('_active');
	console.log(searchForm);
}

window.onscroll = () => {
	searchForm.classList.remove('_active');
}