const normalParticles = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const akatsukiParticles = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "images/akatsuki-2.webp",
        width: 100,
        height: 60
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const shinyPokemonParticles = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "pokemon",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 50,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

// PARTICLES
particlesJS("particles-js", normalParticles);

// NAV
const activeBtn = document.querySelectorAll(".btns");
const nav = document.querySelector("#myTopnav");
const icon = document.querySelector("#nav-icon1");

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
    openDropNav();
    icon.classList.toggle("open");
  });
});

const openDropNav = () => {
  if (nav.className === "topnav") {
    nav.className += " responsive";
    document.querySelector(".logo2.coffee-shake").style.display = "block";
  } else {
    nav.className = "topnav";
    document.querySelector(".logo2.coffee-shake").style.display = "none";
  }
};

document.querySelector(".hamburger").addEventListener("click", () => {
  icon.classList.toggle("open");
  openDropNav();
});

// MOBILE GALLERY
const galleryItems = document.querySelectorAll(".column");
const mobileActiveButton = document.querySelector("#buttonActive");
const mobileGalleryBtns = mobileActiveButton.querySelectorAll(".btn");

// Change mobile gallery column
document.querySelector("#galleryButtonOne").addEventListener("click", () => {
  galleryItems.forEach((image) => {
    image.style.msFlex = "50%"; // IE10
    image.style.flex = "50%";
  });
});

document.querySelector("#galleryButtonTwo").addEventListener("click", () => {
  galleryItems.forEach((image) => {
    image.style.msFlex = "100%"; // IE10
    image.style.flex = "100%";
  });
});

// Add active mobile gallery class
mobileGalleryBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const current = document.querySelectorAll(".active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
});

// LAZY LOAD IFRAMES
const deferVideo = () => {
  const vidDefer = document.querySelectorAll("iframe");
  if ("IntersectionObserver" in window) {
    let lazyYoutube = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyVid = entry.target;
          lazyVid.src = lazyVid.dataset.src;
          lazyVid.classList.remove("lazyVid");
          lazyYoutube.unobserve(lazyVid);
        }
      });
    });
    vidDefer.forEach((lazyVid) => {
      lazyYoutube.observe(lazyVid);
    });
  }
};

deferVideo();

// LAZY LOAD IMAGES
document.addEventListener("DOMContentLoaded", () => {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

// SLIDE UP ANIMATION ON SCROLL
const slideUpAnimation = function () {
  const images = document.querySelectorAll(".item");

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animate");
      }
    });
  });

  images.forEach((image) => {
    observer.observe(image);
  });
};

slideUpAnimation();

// FLIP CARD
const card = document.querySelectorAll(".card1");

const flipCard = function () {
  card.forEach(function (cards) {
    cards.addEventListener("click", function () {
      if (cards.classList.contains("is-flipped")) {
        cards.classList.remove("is-flipped");
      } else {
        cards.classList.add("is-flipped");
      }
    });
  });
};

flipCard();

// COFFEE SHAKES
const shake = document.querySelector("#myTopnav");
const coffeeShakes = function () {
  document.querySelector(".coffee-shake").addEventListener("click", function () {
    shake.classList.toggle("shake");
    document.querySelector(".coffee-shake").style.imageRendering = "auto";
    document.querySelector(".coffee-shake").src = "images/TB-90w.png";
    document.querySelector(".coffee-shake").srcset = "images/TB-90w.png 1x, images/TB-90w-retina.png 2x";
  });
};

coffeeShakes();

// REMOVE SLIDE IN ANIMATION IF USER LANDS ON FORM
const removeSlideIn = function () {
  if (location.hash.includes("#contact")) {
    const slideUpItems = document.querySelectorAll(".item");
    slideUpItems.forEach(function (item) {
      item.classList.remove("item");
    });
  }
};

removeSlideIn();

// WORK GUESS GAME
let playedBefore = 0;

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((newletter) => {
    if (this.guessedLetters.includes(newletter) || newletter === " ") {
      puzzle += newletter;
    } else {
      puzzle += "_";
    }
  });

  return puzzle.toUpperCase();
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
};

Hangman.prototype.calculateStatus = function () {
  const failed = this.remainingGuesses === 0;
  const finished = !this.getPuzzle().includes("_");
  if (failed) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hangman.prototype.gameOver = function (eventListener) {
  if (this.status === "failed") {
    window.removeEventListener("keypress", eventListener);
    const guessesEl = document.querySelector("#guesses");
    guessesEl.style.color = "#E31B6D";
    let puzzleEl = document.querySelector("#puzzle");
    puzzleEl.classList.add("incorrect");
    setTimeout(() => {
      puzzleEl.textContent = "SORRY TRY AGAIN";
      puzzleEl.classList.remove("incorrect");
    }, 550);
  }
};

Hangman.prototype.winner = function (eventListener) {
  const guessesEl = document.querySelector("#guesses");
  const myImage = document.querySelector(".tony-image");
  const firstTitle = document.querySelector("#first-title");
  const secondTitle = document.querySelector("#second-title");
  const name = document.querySelector("#tony");

  if (this.status === "finished" && playedBefore === 0) {
    window.removeEventListener("keypress", eventListener);
    guessesEl.style.color = "#04C2C9";
    myImage.src = "images/rick.gif";
    myImage.srcset = "images/rick.gif";
    firstTitle.textContent = "Never gonna ";
    secondTitle.textContent = " down";
    name.textContent = "let you";
    document.querySelector(".mobilenone").click();
    playedBefore = 1;
  } else if (this.status === "finished" && playedBefore === 2) {
    window.removeEventListener("keypress", eventListener);
    guessesEl.style.color = "#04C2C9";
    myImage.src = "images/warning.png";
    myImage.srcset = "images/warning.png";
    myImage.style.width = "200px";
    myImage.style.padding = "20px";
    firstTitle.textContent = "DO NOT";
    secondTitle.textContent = "";
    name.textContent = " CLICK";
    name.style.color = "#04C2C9";
    playedBefore = 2;

    myImage.addEventListener("click", () => {
      document.body.innerHTML = "";
      const upset = document.createElement("h1");
      const fixButton = document.createElement("button");
      const dontFixButton = document.createElement("button");

      fixButton.style.padding = "15px";
      fixButton.style.width = "90px";
      dontFixButton.style.width = "90px";
      dontFixButton.style.padding = "15px";
      fixButton.style.margin = "10px";
      dontFixButton.style.margin = "10px";
      dontFixButton.textContent = "Not sorry";
      fixButton.textContent = "Sorry";
      upset.textContent = "Why did you delete my website???";

      document.body.appendChild(upset);
      document.body.appendChild(fixButton);
      document.body.appendChild(dontFixButton);

      let pettyUser = 0;
      const responses = [
        "Well that's just petty",
        "You monster!!!",
        "This site took me so long to build :(",
        "You've got to be a little sorry right?",
        "No shame...no shame at all",
        "Don't you have better things to do?",
        "I bet you think you're so cool going around deleting peoples hard work"
      ];

      fixButton.addEventListener("click", () => {
        location.reload();
      });

      dontFixButton.addEventListener("click", () => {
        if (pettyUser !== responses.length) {
          upset.innerText = responses[pettyUser];
          pettyUser++;
        } else {
          upset.innerText = "Ha! Now you have to be sorry! Muah haha!";
          dontFixButton.textContent = "Sorry";
          dontFixButton.addEventListener("click", () => {
            location.reload();
          });
        }
      });
    });
    document.querySelector(".mobilenone").click();
  } else if (this.status === "finished" && playedBefore === 1) {
    guessesEl.style.color = "#04C2C9";
    myImage.style.imageRendering = "pixelated";
    myImage.src = "images/itachi.gif";
    myImage.srcset = "images/itachi.gif";
    firstTitle.textContent = "Forgive me";
    secondTitle.textContent = " ";
    name.textContent = " Sasuke...";
    document.querySelector(".mobilenone").click();
    particlesJS("particles-js", akatsukiParticles);
    playedBefore = 2;
  }
};

document.querySelector(".logo1").addEventListener("click", () => {
  const puzzleEl = document.querySelector("#puzzle");
  const guessesEl = document.querySelector("#guesses");
  const game1 = new Hangman("Never gonna give you up", 5);
  const game2 = new Hangman("Self Destruct", 3);
  const game3 = new Hangman("akatsuki", 3);

  if (playedBefore === 2) {
    puzzleEl.textContent = game2.getPuzzle();
    guessesEl.style.color = "";
    guessesEl.textContent = game2.remainingGuesses;
  } else if (playedBefore === 1) {
    puzzleEl.textContent = game3.getPuzzle();
    guessesEl.style.color = "";
    guessesEl.textContent = game3.remainingGuesses;
  } else {
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.style.color = "";
    guessesEl.textContent = game1.remainingGuesses;
  }

  const windowEvent = (e) => {
    const guess = String.fromCharCode(e.charCode);

    if (playedBefore === 2) {
      game2.makeGuess(guess);
      guessesEl.textContent = game2.remainingGuesses;
      puzzleEl.textContent = game2.getPuzzle();
      // guessesEl.textContent = game1.remainingGuesses
      game2.calculateStatus();
      game2.gameOver(windowEvent);
      game2.winner(windowEvent);
    } else if (playedBefore === 1) {
      game3.makeGuess(guess);
      guessesEl.textContent = game3.remainingGuesses;
      puzzleEl.textContent = game3.getPuzzle();
      // guessesEl.textContent = game1.remainingGuesses
      game3.calculateStatus();
      game3.gameOver(windowEvent);
      game3.winner(windowEvent);
    } else {
      game1.makeGuess(guess);
      guessesEl.textContent = game1.remainingGuesses;
      puzzleEl.textContent = game1.getPuzzle();
      // guessesEl.textContent = game1.remainingGuesses
      game1.calculateStatus();
      game1.gameOver(windowEvent);
      game1.winner(windowEvent);
    }
  };

  window.addEventListener("keypress", windowEvent);
});

// POKEMON EASTER EGG
let pokemonClicks = 0;

const catchPokemon = () => {
  const name = document.querySelector("#tony");
  const firstSentance = document.querySelector("#first-title");
  const secondSentance = document.querySelector("#second-title");
  const localPoke = JSON.parse(localStorage.getItem("pokemon"));
  const image = document.querySelector(".tony-image");
  const ball = document.querySelector(".poke-ball");

  secondSentance.style.color = "white";
  image.style.imageRendering = "pixelated";

  currentPoke = JSON.stringify({
    name: name.textContent,
    sprite: image.src
  });

  if (localStorage.getItem("pokemon") && ball.classList.value === "poke-ball poke-caught") {
    name.textContent = localPoke.name;
    firstSentance.textContent = "Your ";
    secondSentance.textContent = " says hi!";
    image.src = localPoke.sprite;
    image.srcset = localPoke.sprite;
    ball.classList.remove("poke-caught");
  } else if (!localPoke || (ball.classList.value === "poke-ball" && !localPoke.name.includes(name.textContent))) {
    ball.classList.add("poke-caught");
    secondSentance.style.color = "#83FF33";
    secondSentance.textContent = " was caught!";
    localStorage.setItem("pokemon", currentPoke);
  } else {
    ball.classList.add("poke-caught");
    firstSentance.textContent = "";
    secondSentance.style.color = "#04C2C9";
    secondSentance.textContent = " returned to pokeball";
    localStorage.setItem("pokemon", currentPoke);
  }
};

const buildPokeball = (isOnLoad = false) => {
  const ball = document.querySelector(".poke-ball");
  ball.style.display = "block";

  if (isOnLoad) {
    ball.classList.add("poke-caught");
  }

  document.querySelector(".poke-ball").addEventListener("click", catchPokemon);
};

// show pokeball if user has a store pokemon on load
if (localStorage.getItem("pokemon")) {
  buildPokeball(true);
}

const getPokemonList = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=493");
    const data = await response.json();
    const pokemonArray = data.results;

    // cache the resopnse in local storage
    localStorage.setItem("pokeArray", JSON.stringify(pokemonArray));

    // after storing response we don't want to make this api request again
    document.querySelector(".tony-image").removeEventListener("click", getPokemonList);

    // fetch one of the pokemon
    fetchPokemonData();

    // fetch another pokemon whenever a user clicks the pokemon image
    document.querySelector(".tony-image").addEventListener("click", fetchPokemonData);

    // initialize pokeball and functionlity
    buildPokeball();

    // this makes the pokemon pixel art crisp
    document.querySelector(".tony-image").style.imageRendering = "pixelated";
  } catch (error) {
    console.log(`Could not grab Pokemon :(: ${error}`);
  }
};

const fetchPokemonData = async () => {
  try {
    const localPoke = JSON.parse(localStorage.getItem("pokeArray"));
    const randomPokemon = localPoke[Math.floor(Math.random() * localPoke.length)];
    const response = await fetch(randomPokemon.url);
    const data = await response.json();

    renderPokemon(data);
  } catch (error) {
    console.log("Error getting pokemon", error);
  }
};

const renderPokemon = (pokeData) => {
  const pokeImage = document.querySelector(".tony-image");
  const randomNum = Math.floor(Math.random() * 494);
  const firstTitle = document.querySelector("#first-title");
  const secondTitle = document.querySelector("#second-title");
  const pokeName = document.querySelector("#tony");
  secondTitle.style.color = "white";

  // Chance for shiny pokemon
  if (randomNum === pokeData.id || (pokemonClicks > 0 && pokemonClicks % 50 === 0)) {
    let particles = JSON.stringify(shinyPokemonParticles).replace("pokemon", pokeData.sprites.front_shiny);

    // display shiny every time a user visits again
    localStorage.setItem("shiny", pokeData.sprites.front_shiny);
    particlesJS("particles-js", JSON.parse(particles));
    pokeImage.src = pokeData.sprites.front_shiny;
    pokeImage.srcset = pokeData.sprites.front_shiny;
    firstTitle.textContent = "Shiny ";
    pokeName.textContent = `${pokeData.name.toUpperCase()}`;
    secondTitle.textContent = "appeared!";
  } else {
    // display normal pokemon
    pokeImage.src = pokeData.sprites.front_default;
    pokeImage.srcset = pokeData.sprites.front_default;
    firstTitle.textContent = "Wild ";
    pokeName.textContent = `${pokeData.name.toUpperCase()}`;
    secondTitle.textContent = "appeared!";
  }

  // increment clicks - if a user clicks 50 times give them a shiny
  pokemonClicks++;
};

// if user has previously found a shiny, show on load
if (localStorage.getItem("shiny")) {
  const particles = JSON.stringify(shinyPokemonParticles).replace("pokemon", localStorage.getItem("shiny"));
  particlesJS("particles-js", JSON.parse(particles));
}

// fetch entire list of pokemon info
document.querySelector(".tony-image").addEventListener("click", getPokemonList);

// NARUTO RUN
const narutoRun = () => {
  document.querySelector("#hidden-leaf").addEventListener("click", () => {
    // build naruto dom element
    const narutoImg = document.createElement("img");
    narutoImg.classList.add("naruto", "run");
    narutoImg.src = "images/naruto.GIF";
    document.body.appendChild(narutoImg);
    // remove naruto dom element after animation
    const narutos = document.querySelectorAll(".naruto");
    narutos.forEach((oneNaruto) => oneNaruto.addEventListener("animationend", () => oneNaruto.remove()));
  });
};

narutoRun();

// KONAMI CODE
const keyPress = {
  keys: ""
};

const audio = new Audio("sound/toasty.mp3");

const showDan = (small = false) => {
  const dan = document.createElement("img");
  const width = small ? "100px" : "260px";

  audio.play();

  dan.src = "images/toasty.png";
  dan.style.width = width;
  dan.classList.add("toasty", "animateIn");
  dan.addEventListener("animationend", () => dan.remove());

  document.body.appendChild(dan);
};

const konamiCode = (e) => {
  keyPress.keys += e.keyCode;
  if (keyPress.keys === "38384040373937396665") {
    showDan();
    document.querySelector("body").removeEventListener("keydown", konamiCode);
  } else if (keyPress.keys.length >= 20) {
    document.querySelector("body").removeEventListener("keydown", konamiCode);
  }
};

window.onload = document.querySelector("body").addEventListener("keydown", konamiCode);

// CHECK IF USER IS MOBILE
const isMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
};

// ITACHI EASTER EGG
const mobileLogo = document.querySelector(".coffee-shake");
document.querySelector(".akatsuki").addEventListener("click", () => {
  document.querySelector(".topnav").classList.remove("shake");
  mobileLogo.style.imageRendering = "pixelated";
  mobileLogo.style.display = "none";
  setTimeout(() => {
    mobileLogo.srcset = "images/itachi.gif";
    mobileLogo.src = "images/itachi.gif";
    mobileLogo.style.display = "block";
  }, 100);
  particlesJS("particles-js", akatsukiParticles);
  document.querySelector(".coffee-shake").addEventListener(
    "click",
    () => {
      particlesJS("particles-js", normalParticles);
    },
    { once: true }
  );
});

// HANDLE FORM
let submitForm = async (e) => {
  e.preventDefault();

  document.querySelector('input[type="submit"]').value = "Loading...";

  document.querySelector(".error").style.display = "none";

  const myForm = e.target;
  const formData = new FormData(myForm);

  const result = await fetch("https://formspree.io/f/xzbyybjg", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then((data) => {
      if (data.status !== 200) {
        throw new Error("submission failed");
      }
      return true;
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".error").style.display = "block";
      document.querySelector('input[type="submit"]').value = "Error";
    });

  if (result) {
    document.querySelector('input[type="submit"]').value = "Success";
    myForm.reset();

    document.querySelectorAll(".success").forEach((el) => {
      el.style.display = "block";
    });

    document.querySelectorAll(".form-input").forEach((input) => {
      input.setAttribute("disabled", "");
    });

    document.querySelectorAll(".requirements").forEach((el) => {
      el.style.display = "none";
    });

    if (isMobile()) {
      showDan(true);
    }
  }
};

window.addEventListener("load", () => {
  document.querySelector(".tony-form").addEventListener("submit", submitForm);
});

document.querySelector(".tony-form").addEventListener("focusin", (event) => {
  if (event.target.type !== "submit") {
    event.target.style.border = "0px solid #e31b6d";
  }
});

document.querySelector(".tony-form").addEventListener("focusout", (event) => {
  // removes white space in form values
  if (event.target.value.length > 0) {
    event.target.value = event.target.value.trim();
  }

  // adds red border if required feild is empty
  if (event.target.value.length < 1 && event.target.hasAttribute("required")) {
    event.target.style.border = "1px solid #e31b6d";
  }

  if (event.target.value.length < 1 && event.target.hasAttribute("required")) {
    event.target.parentElement.nextElementSibling.style.display = "block";
  } else if (event.target.value.length > 0 && event.target.hasAttribute("required")) {
    event.target.parentElement.nextElementSibling.style.display = "none";
    event.target.style.border = "0px solid #e31b6d";
  }
});
