export const filter = (target) => {
	const _filter = {
		init() {
			this.clearAllFilters();

			this.filterContainer = target.getAttribute('data-filter-cont');
			this.filterAction = target.getAttribute('data-rel');
			this.filterElements = document.querySelector(`.${ this.filterContainer }`).children;

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
          if (attr === this.filterAction) return true;
        });

        (isActive) ? el.style.display = 'flex' : el.style.display = 'none';
      }

      target.parentNode.classList.add('filters-list__item--active');
		}
	};
	
	_filter.init();
	
	return _filter;
};