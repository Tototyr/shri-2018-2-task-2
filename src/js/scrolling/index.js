export const scroll = () => {
  const _scroll = {
    init() {
      const elements = document.querySelectorAll('.index');
      for (const el of elements) {
        el.addEventListener('wheel', (event) => this._registerEvents(event, el))
      }
    },
    _registerEvents(event, el) {
      let scrollTop = el.scrollTop;
      el.scrollTop = (scrollTop + event.deltaY);
    }
  };

  _scroll.init();
};

scroll();