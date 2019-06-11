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
  console.log("нажата правая стрелка");
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
  console.log("нажата левая стрелка");
  promoSlideLeft.classList.add("slide-active");
  dotLeft.classList.add("dot-active");
  console.log("Эй левая точка");
  if (promoSlideRight.classList.contains("slide-active")) {
    promoSlideRight.classList.remove("slide-active");
  }
  if (dotRight.classList.contains("dot-active")) {
    dotRight.classList.remove("dot-active");
  }
});

var servicesItems = document.querySelectorAll(".services-item");
var servicesSlides = document.querySelectorAll(".services-slide");
var slidesSwitcher = function (item, slide) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide.classList.add("services-slide-active");
    item.classList.add("active");
  });
};
for(var i = 0; i <servicesItems.length; i++) {
slidesSwitcher(servicesItems[i], servicesSlides[i]);
};

// var serviceDelivery = document.querySelector(".delivery");
// var slideDelivery = document.querySelector(".services-slide-1");
// var serviceWarranty = document.querySelector(".warranty");
// var slideWarranty = document.querySelector(".services-slide-2");
// var serviceCredit = document.querySelector(".credit");
// var slideCredit = document.querySelector(".services-slide-3");
// serviceWarranty.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   slideWarranty.classList.add("services-slide-active");
//   serviceWarranty.classList.add("active");
//   if (serviceDelivery.classList.contains("active")) {
//     serviceDelivery.classList.remove("active");
//   } else if (serviceCredit.classList.contains("active")) {
//     serviceCredit.classList.remove("active");
//   }
//   if (slideDelivery.classList.contains("services-slide-active")) {
//     slideDelivery.classList.remove("services-slide-active");
//   } else if (slideCredit.classList.contains("services-slide-active")) {
//     slideCredit.classList.remove("services-slide-active");
//   }
// });
// serviceDelivery.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   slideDelivery.classList.add("services-slide-active");
//   serviceDelivery.classList.add("active");
//   if (serviceWarranty.classList.contains("active")) {
//     serviceWarranty.classList.remove("active");
//   } else if (serviceCredit.classList.contains("active")) {
//     serviceCredit.classList.remove("active");
//   }
//   if (slideWarranty.classList.contains("services-slide-active")) {
//     slideWarranty.classList.remove("services-slide-active");
//   } else if (slideCredit.classList.contains("services-slide-active")) {
//     slideCredit.classList.remove("services-slide-active");
//   }
// });
// serviceCredit.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   slideCredit.classList.add("services-slide-active");
//   serviceCredit.classList.add("active");
//   if (serviceDelivery.classList.contains("active")) {
//     serviceDelivery.classList.remove("active");
//   } else if (serviceWarranty.classList.contains("active")) {
//     serviceWarranty.classList.remove("active");
//   }
//   if (slideDelivery.classList.contains("services-slide-active")) {
//     slideDelivery.classList.remove("services-slide-active");
//   } else if (slideWarranty.classList.contains("services-slide-active")) {
//     slideWarranty.classList.remove("services-slide-active");
//   }
// });
