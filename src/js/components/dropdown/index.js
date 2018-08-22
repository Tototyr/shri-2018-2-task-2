export const dropDown = (event) => {
  const toggle = event.target;
  const dropdownList = toggle.parentElement.parentElement.querySelector('.dropdown__content');

  toggle.classList.toggle('active');

  for (let i = 0; i < dropdownList.getElementsByTagName('li').length; i++) {
    const item = dropdownList.getElementsByTagName('li')[i];

    item.addEventListener(('click'), () => {
      item.classList.add('filters-list__item--active');
      dropdownList.classList.remove('dropdown__content--active');
    });
  }

  dropdownList.classList.toggle('dropdown__content--active');
};