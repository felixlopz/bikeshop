const navToggler = document.querySelector(".navigation__toggler");
const navIcon = document.querySelector(".navigation__icon");
const navItems = document.querySelectorAll(".navigation__item");

navToggler.addEventListener('click',  () => {
  navIcon.classList.toggle("navigation__icon--open");
  navItems.forEach( (item , i) => {
    setTimeout ( () => {
      item.classList.toggle("navigation__item--close");
    }, (i+1) * 100)
  })
})