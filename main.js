
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

// Set active class on clicked nav links

activeBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
  let current = document.querySelectorAll(".active");
  if (current[0]) {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  } else {
    this.className += " active";
  }
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
  if ("IntersectionObserver" in window) {
    let lazyYoutube = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyVid = entry.target;
          lazyVid.src = lazyVid.dataset.src;
          lazyVid.classList.remove("lazyVid");
          lazyYoutube.unobserve(lazyVid);
        }
      });
    });
    vidDefer.forEach(function(lazyVid) {
    lazyYoutube.observe(lazyVid);
    });
  }
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

// Word guess game

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("")
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = "playing"
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ""
  this.word.forEach((newletter) => {

    if (this.guessedLetters.includes(newletter) || newletter === " ") {
      puzzle += newletter
    } else {
      puzzle += "_"
    }

  })

  return puzzle.toUpperCase()

}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }

}

Hangman.prototype.calculateStatus = function () {
  const failed = this.remainingGuesses === 0
  const finished = !this.getPuzzle().includes("_")
  if (failed) {
    this.status = "failed"
  } else if (finished) {
    this.status = "finished"
  } else {
    this.status = "playing"
  }
}

Hangman.prototype.gameOver = function (eventListener) {
  if (this.status === "failed") {
    window.removeEventListener("keypress", eventListener)
    const guessesEl = document.querySelector("#guesses")
    guessesEl.style.color = "#E31B6D"
    let puzzleEl = document.querySelector("#puzzle")
    puzzleEl.classList.add("incorrect") 
    setTimeout(() => { 
      puzzleEl.textContent = "SORRY TRY AGAIN"
      puzzleEl.classList.remove("incorrect")
    }, 550)
  }
}

Hangman.prototype.winner = function (eventListener) {
  if (this.status === "finished") {
    window.removeEventListener("keypress", eventListener)
    const guessesEl = document.querySelector("#guesses")
    guessesEl.style.color = "#04C2C9"
    const myImage = document.querySelector(".tony-image")
    myImage.src = "images/rick.gif"
    myImage.srcset = "images/rick.gif"
    const firstTitle = document.querySelector("#first-title")
    firstTitle.textContent = "Never gonna "
    const secondTitle = document.querySelector("#second-title")
    secondTitle.textContent = " down"
    const name = document.querySelector("#tony")
    name.textContent = "let you"
    document.querySelector(".mobilenone").click()
  }
}

document.querySelector(".logo1").addEventListener("click", () => {
  
  const puzzleEl = document.querySelector("#puzzle")
  const guessesEl = document.querySelector("#guesses")
  const game1 = new Hangman("Never gonna give you up", 5)
  
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.style.color = ""
  guessesEl.textContent = game1.remainingGuesses

  const windowEvent = (e) => {
    const guess = String.fromCharCode(e.charCode)
      game1.makeGuess(guess)
      guessesEl.textContent = game1.remainingGuesses
      puzzleEl.textContent = game1.getPuzzle()
      // guessesEl.textContent = game1.remainingGuesses
      game1.calculateStatus()
      game1.gameOver(windowEvent)
      game1.winner(windowEvent)
      
  }

  window.addEventListener("keypress", windowEvent)

})

// pokemon

let fetchPokemon = function () {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      const pokemonArray = allpokemon.results
      const pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
      fetchPokemonData(pokemon);
    })
}

function fetchPokemonData(pokemon) {
  const url = pokemon.url // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  fetch(url)
    .then(response => response.json())
    .then(function (pokeData) {
      renderPokemon(pokeData)
    })
}

function renderPokemon(pokeData) {
  const firstTitle = document.querySelector("#first-title")
  const secondTitle = document.querySelector("#second-title")
  firstTitle.textContent = "Meet my "
  const pokeName = document.querySelector("#tony")
  pokeName.textContent = `${pokeData.name.toUpperCase()}.`
  secondTitle.textContent = "I'm a Pokémaster"
  const pokeImage = document.querySelector('.tony-image')
  pokeImage.src = pokeData.sprites.front_default
  pokeImage.srcset = pokeData.sprites.front_default
}
document.querySelector(".tony-image").addEventListener("click", fetchPokemon)