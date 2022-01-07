//jshint esversion:6
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

const nav = document.querySelector("nav");
const home = document.querySelector("#home");



const navOptions = {threshold: 0.8};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      nav.classList.add("nav-scrolled");
    }else{
      nav.classList.remove("nav-scrolled");
    }
  });
},navOptions);

navObserver.observe(home);

const sections = document.querySelectorAll("section");
const navLi   = document.querySelectorAll(".nav-item");

const sectionOptions = {rootMargin:"-200px 0px 0px 0px"};

const sectionObserver = new IntersectionObserver((entries,sectionObserver) =>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      const id = entry.target.getAttribute("id");
     navLi.forEach((li)=>{
       if(li.classList.contains(id)){
         li.classList.add("nav-link-active");
       }else{
         li.classList.remove("nav-link-active");
       }
     });
  }
  });
},sectionOptions);

sections.forEach((section)=>{
  sectionObserver.observe(section);
});
