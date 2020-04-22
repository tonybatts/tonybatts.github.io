
 particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#04c2c9"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#e31b6d"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// <!--  NAV -->
const activeBtn = document.querySelectorAll(".btns");
const nav = document.querySelector("#myTopnav");
const icon = document.querySelector("#nav-icon1")
// <!-- STICKY SCROLL NAV -->
// window.onscroll = function () {scrollStickyNav()};

// function scrollStickyNav() {
//   if (window.pageYOffset > sticky) {
//     scrollsticky.classList.add("sticky");
//   } else {
//     scrollsticky.classList.remove("sticky");
//   }
// }
// <!-- ACTIVE NAV + MOBILE NAV -->

// Set active class on clicked nav links

activeBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
  var current = document.querySelectorAll(".active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  openDropNav()
  icon.classList.toggle("open")
  })
})

const openDropNav = function () {
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

document.querySelector(".hamburger").addEventListener("click", function () {
  icon.classList.toggle("open")
  openDropNav()
})

// <!-- MOBILE GALLERY -->

const galleryItems = document.querySelectorAll(".column");
const mobileActiveButton = document.querySelector("#buttonActive");
const mobileGalleryBtns = mobileActiveButton.querySelectorAll(".btn");

// Change mobile gallery column
document.querySelector("#galleryButtonOne").addEventListener("click", function () {
  galleryItems.forEach(function (image) {
    image.style.msFlex = "50%";  // IE10
    image.style.flex = "50%";
  })
})

document.querySelector("#galleryButtonTwo").addEventListener("click", function () {
  galleryItems.forEach(function (image) {
    image.style.msFlex = "100%";  // IE10
    image.style.flex = "100%";
  })
})

// Add active mobile gallery class
mobileGalleryBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const current = document.querySelectorAll(".active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  })
})

// Defer youtube
let deferVideo = function () {
  const vidDefer = document.querySelectorAll("iframe");
  vidDefer.forEach(function (vid) {
    if (vid.getAttribute('data-src')) {
      vid.setAttribute('src', vid.getAttribute('data-src'));
    }
  })
}
window.onload = deferVideo();

/** lazy load **/
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } 
});

// SLIDE UP ANIMATION ON SCROLL
let slideUpAnimation = function (){
  const images = document.querySelectorAll('.item');

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animate');
      } 
    });
  });

  images.forEach(image => {
    observer.observe(image);
  });
}
window.onload = slideUpAnimation()

// FLIP CARD ONCLICK
const card = document.querySelectorAll(".card1");
  
let flipCard = function() {
  card.forEach(function(cards) {
    cards.addEventListener('click', function(){
  
      if (cards.classList.contains("is-flipped")) {
        cards.classList.remove("is-flipped");
    
      } else {
        cards.classList.add("is-flipped");
      }
    })
  })
}
window.onload = flipCard()

// Shake animation
const shake = document.querySelector("#myTopnav")
const coffeeShakes = function () {
  document.querySelector(".coffee-shake").addEventListener("click", function () {
    shake.classList.toggle("shake")
  })
}
window.onload = coffeeShakes()

// remove slide up animation if user comes from link to bottom of the page
const removeSlideIn = function () {
  if (location.hash.includes("#contact")) {
    const slideUpItems = document.querySelectorAll(".item")
    slideUpItems.forEach(function (item) {
      item.classList.remove("item")
    })
  }
}
window.onload = removeSlideIn()

