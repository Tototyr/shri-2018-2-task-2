export const filter = () => {
	const _filter = {
		init() {
			this._registerEvents();
		},
		_registerEvents() {
			const filters = document.querySelectorAll('.filters-list__filter');
			for (const filter of filters) {
				filter.addEventListener('click', (event) => this._getParams(event.target));
			}
		},
		_getParams(target) {
			this.filterContainer = target.getAttribute('data-area');
			this.filterType = target.getAttribute('data-rel');
			this.elementsParent = document.querySelector(`.${ this.filterContainer }`);
			this.filterElements = this.elementsParent.querySelectorAll('[data-filter]');
			
			this._applyFilter();
		},
		_applyFilter() {
			this.clearAllFilters();
			this.filterList();
		},
		clearAllFilters() {
			const filters = document.querySelectorAll('.filters-list__item');
			
			for (const filterEl of filters) {
				filterEl.classList.remove('filters-list__item--active');
			}
		},
		filterList() {
			for (const el of this.filterElements) {
				const elementFilterList = el.getAttribute('data-filter').split(" ");
				const isActive = elementFilterList.find((attr) => {
					if (attr === this.filterType) return true;
				});
				
				(isActive)
					? el.parentElement.style.display = 'flex'
					: el.parentElement.style.display = 'none';
			}
		}
	};
	
	_filter.init();
};

filter();