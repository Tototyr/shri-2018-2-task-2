export const dropdown = () => {
	const _dropdown = {
		init() {
			this.elements = document.querySelectorAll('.dropdown');
			this._registerEvents();
		},
		_registerEvents() {
			for (const el of this.elements) {
				el.addEventListener('click', (event) => this._toggle(el));
			}
		},
		_toggle(element) {
			const content = element.querySelector('.dropdown__content');
			const controller = element.querySelector('.dropdown__toggle');
			content.classList.add('dropdown__content--active');
			
			for (let i = 0; i < content.getElementsByTagName('li').length; i++) {
				const item = content.getElementsByTagName('li')[i];
				
				item.addEventListener(('click'), () => {
					item.classList.add('filters-list__item--active');
					controller.textContent = item.textContent;
				});
			}
		}
	};
	
	_dropdown.init();
};

dropdown();