
//  to the paralax scroling animation
const graph = document.getElementById('graph');
const cartripple = document.getElementById('cartripple');
const frontimg = document.getElementById('frontimg');
const sentence = document.getElementById('sentence')

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    graph.style.left = value * -2+ 'px';
    cartripple.style.left = value * -1.5+ 'px';
    cartripple.style.top = value * -1 + 'px';
    frontimg.style.left =value * 2 + 'px';
    sentence.style.top = value * -1.5 + 'px';
})

// to navigate through the navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const targetSection = document.getElementById(link.getAttribute("data-section"));
            if (targetSection) {
                const sectionTop = targetSection.getBoundingClientRect().top + scrollPosition;
                const sectionBottom = sectionTop + targetSection.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        });
    }

    // Add scroll event listener to update the active link
    window.addEventListener("scroll", updateActiveNavLink);
    
    // Call the function once to set the initial state
    updateActiveNavLink();
});





// the buttons
function btn1(){
    window.location="TechnologyAccessories.html"
}
function btn2(){
    window.location="Household Items.html"
}
function btn3(){
    window.location="Office Equipment.html"
}
function btn4(){
    window.location="clothing.html"
}
function btn5(){
    window.location="Cosmetics and Body Care.html"
}
function btn6(){
    window.location="Furniture and Decor.html"
}
function button1(){
    window.location="index.html"
}
function button2(){
    window.location="index.html"
    id="Categories"
}
function gmail(){
    window.location="#"
}
function fb(){
    window.location="#"
}
function insta(){
    window.location="#"
}
function whats(){
    window.location="#"
}
function logo(){
    window.location="../main/index.html"
}

// for responsiveness of the small screens 
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      
      document.querySelector('.navbar').style.width = '80%';
    } else {
      
      document.querySelector('.navbar').style.width = 'auto';
    }
  });

//   dropdown menu 
      const barbtns = document.getElementById('bar');
      const barIcon = barbtns.querySelector('i'); 
      const dropdown = document.querySelector('.dropdown'); 

      barbtns.onclick = function() {
      dropdown.classList.toggle('open');

      const isOpen = dropdown.classList.contains('open');

      bar.className = isOpen
         ? 'fa-solid fa-xmark'
         : 'fa-solid fa-bars';
      };