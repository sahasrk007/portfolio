document.addEventListener("click", function(event) {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    if (navbarToggler && navbarCollapse) {
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }

        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            });
        });
    }
});

const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
  