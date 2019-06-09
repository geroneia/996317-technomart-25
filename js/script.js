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

// почему-то этот код, относящийся к сообщению о добавлении в корзину, отлично работает в консоли инструменов разработчика и совсем не работает,
//  когда его же, без изменений, переносишь сюда

