$(".burger").click(function () {
	$(".burger, .header__items").toggleClass("active");
	$('body').toggleClass('lock');
});

$('.header__link').on('click', function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 1500);
});

function mobileOnlySlider() {
  $(document).ready(function () {
    $('.portfolio__grid').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      touchMove: true,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          settings: "unslick"
        }
      }]
    });
  });
}
if (window.innerWidth < 480) {
  mobileOnlySlider();
}
$(window).resize(function (e) {
  if (window.innerWidth < 480) {
    if (!$('.portfolio__grid').hasClass('slick-initialized')) {
      mobileOnlySlider();
    }

  } else {
    if ($('.portfolio__grid').hasClass('slick-initialized')) {
      $('.portfolio__grid').slick('unslick');
    }
  }
});


function rain() {
	let amount = 30;
	let header = document.querySelector('.header');
	let i = 0;
	while (i < amount) {
		let drop = document.createElement('i');

		let size = Math.random() * 5;
		let posX = Math.floor(Math.random() * window.innerWidth);
		let delay = Math.random() * -20;
		let duration = Math.random() * 5;

		drop.style.width = 0.5 + size + 'px';
		drop.style.left = posX + 'px';
		drop.style.animationDelay = delay + 's';
		drop.style.animationDuration = duration + 's';
		header.appendChild(drop);
		i++
	}
}
rain();

var headerTop = $('.header__nav');
	var doc = $(document);

	function headerFixed() {
		var threshold = doc.scrollTop() > 150;

		if (threshold) {
			headerTop.addClass('scrolled');
		} else {
			headerTop.removeClass('scrolled');
		}
	}
	$(window).on('scroll', headerFixed);

	headerFixed();
