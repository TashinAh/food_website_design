$(document).ready(function(){
	$('.fa-bars').click(function(){
		$('.header-menu').slideToggle(500)
	})
	$('.fa-times').click(function(){
		$('#sidenav').slideUp(800)
	})
	$('.fa-magnifying-glass').click(function(){
		$('#search-form').animate({top: '0'}, 700)
	})
	$('.fa-close').click(function(){
		$('#search-form').animate({top: '-120vh'}, 600)
	})
})


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});




/*================ review swipper start ===================*/
 var swiper = new Swiper(".review-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints:{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      }
    });
