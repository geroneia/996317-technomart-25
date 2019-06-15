const loginLink = document.querySelector(".button-feedback");
const popupFeedback = document.querySelector(".modal-feedback");
const closeFeedback = document.querySelector(".modal-feedback-close");
const login = document.querySelector("[name=user-name]");

if (loginLink) {
  loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-feedback-show");
    login.focus();
  });
}

if (closeFeedback) {
  closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-feedback-show");
  });
}

if (popupFeedback) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-feedback-show")) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-feedback-show");
      }
    }
  });
}

const map = document.querySelector(".map-link");
const popupMap = document.querySelector(".modal-map");
const closeMap = document.querySelector(".modal-map-button");

if (map) {
  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("map-show");
  });
}

if (closeMap) {
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("map-show");
  });
}

if (popupMap) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("map-show")) {
        evt.preventDefault();
        popupMap.classList.remove("map-show");
      }
    }
  });
}

const toCart = document.querySelectorAll(".to-cart");
const popupCart = document.querySelector(".modal-cart");
const closeCart = document.querySelector(".modal-cart-close");
const cartBack = document.querySelector(".button-modal-close");

if (toCart) {
  for (let i = 0; i < toCart.length; i++) {
    toCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCart.classList.add("modal-cart-show");
      closeCart.focus();
    })
  }
}

if (closeCart) {
  closeCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-cart-show");
  });
}

if (cartBack) {
  cartBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-cart-show");
  });
}

if (popupCart) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupCart.classList.contains("modal-cart-show")) {
        evt.preventDefault();
        popupCart.classList.remove("modal-cart-show");
      }
    }
  });
}

const arrowRight = document.querySelector(".arrow-right");
const promoSlideRight = document.querySelector(".slide-2");
const dotRight = document.querySelector(".dot-right");
const arrowLeft = document.querySelector(".arrow-left");
const promoSlideLeft = document.querySelector(".slide-1");
const dotLeft = document.querySelector(".dot-left");

if (arrowRight) {
  arrowRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlideRight.classList.add("slide-active");
    dotRight.classList.add("dot-active");
    if (promoSlideLeft.classList.contains("slide-active")) {
      promoSlideLeft.classList.remove("slide-active");
    }
    if (dotLeft.classList.contains("dot-active")) {
      dotLeft.classList.remove("dot-active");
    }
  });
}

if (arrowLeft) {
  arrowLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlideLeft.classList.add("slide-active");
    dotLeft.classList.add("dot-active");
    if (promoSlideRight.classList.contains("slide-active")) {
      promoSlideRight.classList.remove("slide-active");
    }
    if (dotRight.classList.contains("dot-active")) {
      dotRight.classList.remove("dot-active");
    }
  });
}

if (dotRight) {
  dotRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlideRight.classList.add("slide-active");
    dotRight.classList.add("dot-active");
    dotLeft.classList.remove("dot-active");
    if (promoSlideLeft.classList.contains("slide-active")) {
      promoSlideLeft.classList.remove("slide-active");
    }
  });
}

if (dotLeft) {
  dotLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoSlideLeft.classList.add("slide-active");
    dotLeft.classList.add("dot-active");
    dotRight.classList.remove("dot-active");
    if (promoSlideRight.classList.contains("slide-active")) {
      promoSlideRight.classList.remove("slide-active");
    }
  });
}

const servicesItems = document.querySelectorAll(".services-item");
const servicesSlides = document.querySelectorAll(".services-slide");

if (servicesItems && servicesSlides) {
  const slidesSwitcher = function (item, slide) {
    item.addEventListener("click", function (evt) {
      for (let j = 0; j < servicesItems.length; j++) {
        servicesItems[j].classList.remove("active");
        servicesSlides[j].classList.remove("services-slide-active");
      }
      evt.preventDefault();

      slide.classList.add("services-slide-active");
      item.classList.add("active");
    });
  };

  for (let i = 0; i < servicesItems.length; i++) {
    slidesSwitcher(servicesItems[i], servicesSlides[i]);
  }
}

