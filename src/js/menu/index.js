export const menu = () => {
  const _menu = {
    init() {
      this.pageWrapper = document.querySelector('.wrapper');
      this.pageContainer = document.querySelector('.smart-home');
	    this.controller = document.querySelector('.mobile-toggle--navigation');
      this.menu = document.querySelector('.navigation');

      this._registerEvents();
    },
    _registerEvents() {
      this.controller.addEventListener('click', (event) => this.toToggle());
    },
    toToggle() {
      const isActive = this.menu.classList.contains('navigation--mobile-on');
      
      if (isActive) {
	      this.pageWrapper.classList.remove('no-index');
	      this.pageContainer.classList.remove('smart-home--shadow');
	      this.menu.classList.remove('navigation--mobile-on');
	      this.menu.classList.add('navigation--mobile-off');
      } else {
	      this.pageWrapper.classList.add('no-index');
	      this.pageContainer.classList.add('smart-home--shadow');
	      this.menu.classList.remove('navigation--mobile-off');
	      this.menu.classList.add('navigation--mobile-on');
      }
    }
  };

  _menu.init();
};

menu();