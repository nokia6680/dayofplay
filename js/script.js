var menuText = document.querySelector(".header-nav__layout");
var layer = document.querySelector(".header-nav");
var menuList = document.querySelector(".nav-list");
var menuOpen = document.querySelector(".header-nav__btn--open");
var menuClose = document.querySelector(".header-nav__btn--close");

if (menuText) {
  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuText.classList.add("header-nav__layout--active");
    layer.classList.add("header-nav--active");
    menuList.classList.add("nav-list--active");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuText.addEventListener("click", function(event) {
    event.stopPropagation();
    menuText.classList.remove("header-nav__layout--active");
    layer.classList.remove("header-nav--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  menuClose.addEventListener("click", function() {
    menuText.classList.remove("header-nav__layout--active");
    layer.classList.remove("header-nav--active");
    menuList.classList.remove("nav-list--active");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuText.classList.remove("header-nav__layout--active");
      layer.classList.remove("header-nav--active");
      menuList.classList.remove("nav-list--active");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  });
}

$(".slider").slick({
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',

  responsive: [{
      breakpoint: 9999,
      settings: {
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
      }
    },
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        arrows: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
      }
    }
  ]
});

$(document).ready(function(){
	$("#main").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.slider__item').click(function(){
    pers = $(this).find('.slider__item-photo').attr('alt');
    $('.popup-form').css('display','flex');
    $('.popup-form__name').html(pers);
    $('input[name="pers"]').val(pers);
  });

  $('.popup-form__close').click(function(){
    $('.popup-form').css('display','none');
  });
  $('.popup-done__close').click(function(){
    $('.popup-done').css('display','none');
  });

  $('.main-form').submit(function(){

    var $form = $('.main-form');

    $.post($form.attr('action'), $form.serialize(), function(data){

        $('[name="name"],[name="tel"],[name="esse"]').val('');

        $('.popup-form').css('display','none');
        $('.popup-done').css('display','flex');
    });

    return false;
  });
});
