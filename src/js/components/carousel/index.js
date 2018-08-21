export const carousel = (options) => {
	const _carousel = {
		options: {
			speed: 3000,
			selector: ".carousel",
			slidesSelector: ".carousel__slides",
			actionContainer: ".slider-arrows"
		},
		
		init(options = {}) {
			for (let prop in options) {
				if (!options.hasOwnProperty(prop)) break;
				this.options[prop] = options[prop];
			}
			
			this.carousel = document.querySelector(this.options.selector);
			this.slides = this.carousel.querySelector(this.options.slidesSelector).children;
			this.currentSlideIndex = 0;
			this.posX = 0;
			this.width = 0;
			
			
			// width
			for (let i = 0; i < this.slides.length; i++) {
				this.width += this.slides[i].offsetWidth;
			}
			
			
			this._leftArrow = this.arrows.left;
			this._rightArrow = this.arrows.right;
			
			this._registerEvents();
		},
		
		get currentElement() {
			if (this.currentSlideIndex <= this.slides.length) {
				return this.slides[this.currentSlideIndex];
			}
		},
		
		get currentTick() {
			const tick = this.carousel.querySelector(this.options.slidesSelector).offsetWidth;
			console.log(`this.width: ${ this.width }`);
			console.log(`this.width - this.posX: ${ this.width - this.posX }`);
			
			return tick;
		},
		
		get arrows() {
			const container = document.querySelector(this.options.actionContainer);
			
			return {
				left: container.querySelector('.slider-arrows__action--left'),
				right: container.querySelector('.slider-arrows__action--right')
			}
		},
		
		_registerEvents() {
			this._rightArrow.addEventListener("click", () => this.next());
			this._leftArrow.addEventListener("click", () => this.prev());
		},
		
		next() {
			this.currentSlideIndex++;
			this.posX -= this.currentTick;
			this._animate();
		},
		
		prev() {
			// TODO: нужно просчитывать максимальную ширину и прибавлять / отнимать заданую ширину. Крутить если еще есть куда
			this.currentSlideIndex--;
			this.posX += this.currentTick;
			this._animate();
		},
		
		_animate() {
			const slides = this.carousel.querySelector(this.options.slidesSelector);
			const animate = () => {
				slides.style.transform = `translateX(${ this.posX }px)`;
			};
			animate();
		}
	};
	
	_carousel.init(options);
	
	return _carousel;
};