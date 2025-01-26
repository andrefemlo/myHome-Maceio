// AOS
// AOS.init({
//   duration: 700,
//   once: true,
// });


// SwiperJS 
// var swiper = new Swiper('.swiper.choice', {
//   loop: true,
//   lazyLoading: true,
//   centeredSlides: true,
//   spaceBetween: 16,
//   speed: 3000,
//   autoplay: {
//     delay: 600,
//     disableOnInteraction: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1.2,
//     },
//     520: {
//       slidesPerView: 2,
//       centeredSlides: false,
//     },
//     676: {
//       slidesPerView: 3,
//       centeredSlides: false,
//     },
//     920: {
//       loop: false,
//       centeredSlides: false,
//       slidesPerView: 4
//     }
//   },
// });
// var swiper = new Swiper('.swiper.choices', {
//   loop: true,
//   lazyLoading: true,
//   centeredSlides: true,
//   spaceBetween: 16,
//   speed: 3000,
//   autoplay: {
//     delay: 600,
//     disableOnInteraction: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1.2,
//     },
//     520: {
//       slidesPerView: 2,
//       centeredSlides: false,
//     },
//     676: {
//       slidesPerView: 3,
//       centeredSlides: false,
//     },
//     920: {
//       loop: false,
//       centeredSlides: false,
//       slidesPerView: 4
//     }
//   },
// });

// var swiper = new Swiper('.swiper.transformations', {
//   loop: true,
//   centeredSlides: true,
//   speed: 800,
//   pauseOnInteraction: true,
//   autoplay: {
//     delay: 600,
//     disableOnInteraction: true,
//   },
//   spaceBetween: 12,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     676: {
//       slidesPerView: 2,
//       centeredSlides: false,
//     },
//   },
// });


// function aceitarCookies() {
//   var dataExpiracao = new Date();
//   dataExpiracao.setDate(dataExpiracao.getDate() + 30);

//   document.cookie = "cookiesAceitos=true; expires=" + dataExpiracao.toUTCString() + "; path=/";
//   document.getElementById("cookieNotice").style.display = "none";
// }

// function verificarCookiesAceitos() {
//   var cookiesAceitos = document.cookie.includes("cookiesAceitos=true");
//   if (!cookiesAceitos) {
//     document.getElementById("cookieNotice").style.display = "block";
//   } else {
//     document.getElementById("cookieNotice").style.display = "none";
//   }
// }

// window.onload = verificarCookiesAceitos

// Acordeão
document.addEventListener("DOMContentLoaded", function () {
  var accordion = document.querySelectorAll(".accordion");

  accordion.forEach((el) => {
    var accordionItems = el.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
      var header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
        var currentActiveItem = item.classList.contains("active");

        accordionItems.forEach(function (el) {
          el.classList.remove("active");
        });

        if (!currentActiveItem) {
          item.classList.add("active");
        }
      });
    });
  });
});

// Menu mobile;
// function openMobileSidebar() {
//   var item = document.querySelector('#navigation');
//   item.removeAttribute('style', 'display: none;');
// }

// function closeMobileSidebar() {
//   var item = document.querySelector('#navigation');
//   item.setAttribute('style', 'display: none;');
// }


// Use Lenis for Smooth Scroll
window.addEventListener('load', function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/lenis@1.1.13/dist/lenis.css';
  document.head.appendChild(link);
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
