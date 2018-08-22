import {carousel} from "./components/carousel";
import {dropDown} from "./components/dropdown";
import {filter} from "./components/filter";
import {scrollList} from "./components/scroll";
import {mobileNavigationToggle} from "./components/mobile-menu";
import TemperatureModal from "./components/modals/temperature-modal";
import LightModal from "./components/modals/light-modal";

export const handler = () => {
	window.onload = () => {
		carousel({
			selector: ".carousel--tasks",
			actionContainer: ".slider-arrows--tasks"
		});
		
		carousel({
			selector: ".carousel--devices",
			actionContainer: ".slider-arrows--devices"
		});
	};
	
	window.onclick = (event) => {
		const target = event.target;
		
		if (target.matches('.header__mobile-toggle')) {
			mobileNavigationToggle(target);
		}
		
		if (target.dataset.type && target.dataset.type === 'temperature') {
			new TemperatureModal(target);
		}
		
		if (target.dataset.type && target.dataset.type === 'light') {
			new LightModal(target);
		}
		
		if (target.matches('.dropdown') || target.parentNode.matches('.dropdown')) {
			dropDown(event);
		}
		
		if (target.matches('.filters-list__filter')) {
			filter(target);
		}

		if (target.matches('.dashboard__show-more')) {
      const listContainer = document.querySelector('.dashboard__devices-list');
      scrollList(listContainer);
		}
	};
};