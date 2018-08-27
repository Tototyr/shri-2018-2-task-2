import Modal from "./modal";
import LightModal from "./light-modal";
import WarmModal from "./warm-modal";

export const modal = () => {
	const _modal = {
		init() {
			this.elements = document.querySelectorAll('[data-modal]');
			this._registerEvents();
		},
		_registerEvents() {
			for (const element of this.elements) {
				element.onclick = () => {
					const modalType = this._getModalType(element);
					this._openModal(modalType, event.target);
				};
			}
		},
		_getModalType(element) {
			return element.dataset.modal;
		},
		_openModal(modalType, target) {
			switch (modalType) {
				case 'warm':
					new WarmModal(target);
					break;
				case 'light':
					new LightModal(target);
					break;
				default:
					new Modal(target);
			}
		}
	};

	_modal.init();
};

modal();