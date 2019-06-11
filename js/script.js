var loginLink = document.querySelector(".button-feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = document.querySelector(".modal-feedback-close");
var login = popupFeedback.querySelector("[name=user-name]");
loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-feedback-show");
  login.focus();
});
closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-feedback-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-feedback-show");
    }
  }
});

var map = document.querySelector(".map-link");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-button");
map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-show");
});
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("map-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("map-show")) {
      evt.preventDefault();
      popupMap.classList.remove("map-show");
    }
  }
});

var toCart = document.querySelectorAll(".to-cart");
var popupCart = document.querySelector(".modal-cart");
var closeCart = document.querySelector(".modal-cart-close");
var cartBack = document.querySelector(".button-modal-close");
for (var i = 0; i < toCart.length; i++) {
  toCart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-cart-show");
  })
};
closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-cart-show");
});
cartBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-cart-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupCart.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      popupCart.classList.remove("modal-cart-show");
    }
  }
});


var arrowRight = document.querySelector(".arrow-right");
var promoSlideRight = document.querySelector(".slide-2");
var dotRight = document.querySelector(".dot-right");
var arrowLeft = document.querySelector(".arrow-left");
var promoSlideLeft = document.querySelector(".slide-1");
var dotLeft = document.querySelector(".dot-left");
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
dotRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlideRight.classList.add("slide-active");
  dotRight.classList.add("dot-active");
  dotLeft.classList.remove("dot-active");
  if (promoSlideLeft.classList.contains("slide-active")) {
    promoSlideLeft.classList.remove("slide-active");
  };
});
dotLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlideLeft.classList.add("slide-active");
  dotLeft.classList.add("dot-active");
  dotRight.classList.remove("dot-active");
  if (promoSlideRight.classList.contains("slide-active")) {
    promoSlideRight.classList.remove("slide-active");
  };
});

var servicesItems = document.querySelectorAll(".services-item");
var servicesSlides = document.querySelectorAll(".services-slide");
var slidesSwitcher = function (item, slide) {
  item.addEventListener("click", function (evt) {
    for (var j = 0; j < servicesItems.length; j++) {
      servicesItems[j].classList.remove("active");
      servicesSlides[j].classList.remove("services-slide-active");
    };
    // servicesItems.forEach(function (el) {
    //   el.classList.remove("active")
    // });
    // servicesSlides.forEach(function (el) {
    //   el.classList.remove("services-slide-active")
    // });
    evt.preventDefault();

    slide.classList.add("services-slide-active");
    item.classList.add("active");
  });
};
for (var i = 0; i < servicesItems.length; i++) {
  slidesSwitcher(servicesItems[i], servicesSlides[i]);
};
