// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";



//========================================================================================================================================================
// создаем переменную
let searchForm = document.querySelector('.header .search-form');
// создаем переменную для класса который затемнит всю страницу и по клику на темное закроется какое то из окон 
let menuDark = document.querySelector('.dark');

// для кнопки поиск вешаем событие по нажатию 
document.querySelector('#search-btn').onclick = () => {
	// вешаем карусель на кнопку поиска с классом актив 
	searchForm.classList.toggle('_active');
	// удаляем (скрываем) видимое окно регистрации
	loginForm.classList.remove('_active');
	console.log(searchForm);
	//menuDark.classList.add('_active');
}

//========================================================================================================================================================
// создаем переменную
let loginForm = document.querySelector('.login-form');

// для кнопки регистрации вешаем событие по нажатию 
document.querySelector('#login-btn').onclick = () => {
	// вешаем карусель на кнопку регистрации с классом актив 
	loginForm.classList.toggle('_active');
	// удаляем (скрываем) видимое окно поиска 
	searchForm.classList.remove('_active');
	// вешаем карусель на затимнение заднего фона 
	menuDark.classList.toggle('_active');
	console.log(loginForm);
}


//========================================================================================================================================================
// создаем переменную
let contactInfo = document.querySelector('.contact-info');


// для кнопки информации вешаем событие по нажатию 
document.querySelector('#info-btn').onclick = () => {
	// открываем окно по нажатию
	contactInfo.classList.add('_active');
	// добавляем затемнение фоном неактивной части экрана
	menuDark.classList.add('_active');
}

// для кнопки информации вешаем событие по нажатию 
document.querySelector('#close-contact-info').onclick = () => {
	// закрываем окно 
	contactInfo.classList.remove('_active');
	// cкрываем затемнение
	menuDark.classList.remove('_active');
}

// создаем событие для затемненного фона по нажатии на него 
document.querySelector('.dark').onclick = () => {
	// закрываем окно с контактами (информации)
	contactInfo.classList.remove('_active');
	// удаляем затемнение 
	menuDark.classList.remove('_active');
	// скрываем окно регистрации 
	loginForm.classList.remove('_active');
	//document.body.classList.remove('_lock');
}


window.onscroll = () => {
	searchForm.classList.remove('_active');
	loginForm.classList.remove('_active');
	contactInfo.classList.remove('_active');
	menuDark.classList.remove('_active');
}

//================ Swiper 1 ========================================================================================================================================
const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	parallax: true,
	loop: true,
	//centeredSlides: true,
	//mousewheel: true,
	//autoplay: {
	//	delay: 5000,
	//},
	breakpoints: {
		0: {
			spaceBetween: 20,
		},
		496: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3.5,
			spaceBetween: 30,
		},
	},
});
// ============= Swiper Bg ========================
const sliderBg = new Swiper('.slider_bg', {
	slidesPerView: 3.5,
	parallax: true,
	spaceBetween: 30,
	loop: true,
	//centeredSlides: true,
});
// Связываем два swiper между собой
sliderMain.controller.control = sliderBg;

// ============= Script для всех блоков class="swiper-slide slider__item" slider__item- обавлям class _opened ========================
document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('_opened')
	})
});






