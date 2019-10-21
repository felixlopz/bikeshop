const navToggler = document.querySelector(".navigation__toggler");
const navIcon = document.querySelector(".navigation__icon");
const navList = document.querySelector(".navigation__list");
const navItems = document.querySelectorAll(".navigation__item");

navToggler.addEventListener('click',  () => {
  navIcon.classList.toggle("navigation__icon--open");
  navList.classList.toggle("navigation__list--open");
  navItems.forEach( (item , i) => {
    setTimeout ( () => {
      item.classList.toggle("navigation__item--close");
    }, (i+1) * 100);
  });
});