export default class Modal {
	constructor(target) {
		this.container = document.body;
		this.modal = HTMLElement;
		this.elementCoords = target.getBoundingClientRect();
		this.duration = 200;
		this.target = target;
		
		this.render();
	}
	
	render() {
		document.body.classList.add('no-scroll');
		this.container.innerHTML += this.createTemplate();
		this.modal = document.querySelector('.modal');
		this.move();
		this.registerEvents();
		
		document.querySelector('.wrapper').classList.add('overlay');
	}
	
	createTemplate() {
		return `<div class="modal"></div>`;
	}
	
	registerEvents() {
		this.closeAction = document.querySelector('.modal__action--close');
		this.applyAction = document.querySelector('.modal__action--apply');
		
		this.closeAction.addEventListener('click', (event) => this.closeModal());
		this.applyAction.addEventListener('click', (event) => this.applyModal());
	}
	
	move() {
		const x = this.elementCoords.x + this.elementCoords.width + this.elementCoords.width / 2;
		const y = this.elementCoords.y + this.elementCoords.height + this.elementCoords.height / 2;
		
		this.modal.style.top = `${ y }px`;
		this.modal.style.left = `${ x }px`;
	}
	
	applyModal() {
		// to do something
		this.closeModal();
	}
	
	closeModal() {
		this.modal.classList.add('modal--fade');
		
		setTimeout(() => {
			this.container.removeChild(this.modal);
			document.body.classList.remove('no-scroll');
			document.querySelector('.wrapper').classList.remove('overlay');
		}, this.duration);
	}
}