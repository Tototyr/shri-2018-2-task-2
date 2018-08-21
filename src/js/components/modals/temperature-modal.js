import Modal from "./modal";

export default class TemperatureModal extends Modal {
	constructor(target) {
		super(target);
		this.target = target;
	}
	
	createTemplate() {
		const deviceName  = this.target.querySelector('.device__name').textContent;
		const deviceState  = this.target.querySelector('.device__state').textContent;

		return `
      <div class="modal">
				<div class="modal__wrapper">
					<div class="modal__body">
						<div class="modal__header">
							<div class="modal__title-container">
								<p class="modal__title">${ deviceName }</p>
								<p class="modal__degrees">
									<span class="modal__degrees-count">+23</span>
								</p>
							</div>
							<p class="modal__device-state">${ deviceState }</p>
						</div>
						<div class="modal__content">
							<div class="modal__filters">
								<ul class="filters-list">
									<li class="filters-list__item">
											<button class="filters-list__filter" data-rel="0" data-filter-cont="range-slider">Вручную</button>
									</li>
									<li class="filters-list__item filters-list__item--active">
											<button class="filters-list__filter" data-rel="-10" data-filter-cont="range-slider">Холодно</button>
									</li>
									<li class="filters-list__item">
											<button class="filters-list__filter" data-rel="20" data-filter-cont="range-slider">Тепло</button>
									</li>
									<li class="filters-list__item">
											<button class="filters-list__filter" data-rel="25" data-filter-cont="range-slider">Кофмортно</button>
									</li>
									<li class="filters-list__item">
											<button class="filters-list__filter" data-rel="30" data-filter-cont="range-slider">Жарко</button>
									</li>
								</ul>
							</div>
							<input type="range" class="modal__range range-slider range-slider--temperature" orient="vertical" name="volume" min="-10" max="30" />
						</div>
					</div>
					<div class="modal__footer">
						<button class="btn btn--company modal__action modal__action--apply">Применить</button>
						<button class="btn btn--default modal__action modal__action--close">Закрыть</button>
					</div>
				</div>
			</div>
    `;
	}
}