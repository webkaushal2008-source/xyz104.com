// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 100)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'bx bx-plus') {
            icon.className = "bx bx-minus";
        } else {
            icon.className = "bx bx-plus";

        }
    })
})



// Select DOM elements
const menu = document.querySelector(".nav__menu"); // Fixed selector syntax
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Check if elements exist before adding event listeners
if (!menu || !menuBtn || !closeBtn) {
  console.error("One or more navigation elements not found in the DOM");
} else {
  // Show nav menu
  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  // Close nav menu
  const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  };

  closeBtn.addEventListener("click", closeNav);
}
    document.addEventListener
    ("contextmenu", function(e)
    {
        e.preventDefault()
    },false)