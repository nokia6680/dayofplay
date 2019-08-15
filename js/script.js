var menuText = document.querySelector(".nav-menu");
var menuList = document.querySelector(".nav-list");
var menuOpen = document.querySelector(".header-nav__btn--open");
var menuClose = document.querySelector(".header-nav__btn--close");

if (menuText) {
  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuText.classList.add("nav-menu--active");
    menuList.classList.add("nav-list--active");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuText.addEventListener("click", function(event) {
    event.stopPropagation();
    menuText.classList.remove("nav-menu--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  menuClose.addEventListener("click", function() {
    menuText.classList.remove("nav-menu--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuText.classList.remove("nav-menu--active");
      menuList.classList.remove("nav-list--active");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  });
}
/*Открытие попапа*/
var popupBody = document.querySelector(".popup-howto");
var popupOpen = document.querySelector(".nav-list__link--howto");
var popupClose = document.querySelector(".popup-howto__close");

if (popupBody) {
  popupOpen.addEventListener("click", function(event) {
    event.preventDefault();
    popupBody.classList.add("popup-howto--active");
  });

  popupBody.addEventListener("click", function(event) {
    event.stopPropagation();
    popupBody.classList.remove("popup-howto--active");
  });

  popupClose.addEventListener("click", function() {
    popupBody.classList.remove("popup-howto--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popupBody.classList.remove("popup-howto--active");
    }
  });
}

/*Открытие попапа*/
var popup2Body = document.querySelector(".popup-prize");
var popup2Open = document.querySelector(".nav-list__link--prize");
var popup2Close = document.querySelector(".popup-prize__close");

if (popup2Body) {
  popup2Open.addEventListener("click", function(event) {
    event.preventDefault();
    popup2Body.classList.add("popup-prize--active");
  });

  popup2Body.addEventListener("click", function(event) {
    event.stopPropagation();
    popup2Body.classList.remove("popup-prize--active");
  });

  popup2Close.addEventListener("click", function() {
    popup2Body.classList.remove("popup-prize--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popup2Body.classList.remove("popup-prize--active");
    }
  });
}

$(document).ready( function() {
    $("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });
});
