// window.onclick = function (event) {
//   if (event.target.matches('.dropdown__toggle')) {
//
//
//     const dropdowns = document.getElementsByClassName("dropdown__content");
//     // TODO: переделать на первого родителя
//     const dropdownList = event.target.parentElement.parentElement.querySelector('.dropdown__content');
//
//     for (let i = 0; i < dropdownList.getElementsByTagName('li').length; i++) {
//       const item = dropdownList.getElementsByTagName('li')[i];
//       // item.classList.remove('filters-list__item--active');
//
//
//       item.addEventListener(('click'), () => {
//         item.classList.add('filters-list__item--active');
//         dropdownList.classList.remove('dropdown__content--active');
//       });
//
//
//     }
//
//     // dropdownList.map((el) => console.log(el));
//     console.log(dropdownList);
//
//
//     dropdownList.classList.toggle('dropdown__content--active');
//   }
// };

export const dropDown = (event) => {
	console.log(event.target);
	
	const dropdowns = document.getElementsByClassName("dropdown__content");
    // TODO: переделать на первого родителя
  const dropdownList = event.target.parentElement.parentElement.querySelector('.dropdown__content');

  for (let i = 0; i < dropdownList.getElementsByTagName('li').length; i++) {
    const item = dropdownList.getElementsByTagName('li')[i];
    // item.classList.remove('filters-list__item--active');


    item.addEventListener(('click'), () => {
      item.classList.add('filters-list__item--active');
      dropdownList.classList.remove('dropdown__content--active');
    });


  }

  // dropdownList.map((el) => console.log(el));
  console.log(dropdownList);


  dropdownList.classList.toggle('dropdown__content--active');
};