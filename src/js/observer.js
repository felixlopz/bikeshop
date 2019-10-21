var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const headerElement = document.querySelector(".header");
const homeTextElement = document.querySelector(".home__text");

window.addEventListener ('resize', () => {
  width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
});

// Observer Function
const homeTextObserver = new IntersectionObserver ( (entries, homeTextObserver) => {
  if (width < 768) return;
  entries.forEach (entry => {
    if (!entry.isIntersecting){
      headerElement.classList.add ("header--scrolled");
    }else{
      headerElement.classList.remove("header--scrolled");
    }
  })
} , {
  rootMargin: "-250px 0px 0px 0px"
})

homeTextObserver.observe(homeTextElement);