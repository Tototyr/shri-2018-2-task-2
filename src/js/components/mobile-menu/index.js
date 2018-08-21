export const mobileNavigationToggle = (target) => {
	const navigation = document.querySelector('.header__navigation');
	const pageContainer = document.querySelector('.smart-home');
	const pageWrapper = document.querySelector('.wrapper');
	
	navigation.classList.toggle('header__navigation--disable');
	pageContainer.classList.toggle('smart-home--shadow');
	pageWrapper.classList.toggle('no-scroll');
};