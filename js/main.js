$(".burger").click(function () {
	$(".burger, .header__items").toggleClass("active");
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

// let skillsCard = document.querySelectorAll(".skills__card"),
// 	skillsProgress = document.querySelectorAll(".skills__progress");

// let skillsProgressStart = 0,
// 	skillsProgressEnd = 90,
// 	speed = 30;

// let progress = setInterval(() => {
// 	skillsProgressStart++;

// 	skillsProgress.textContent = `${skillsProgressStart}%`
// 	skillsCard.style.background = `conic-gradient(#37a7a2 ${skillsProgressStart * 3.6}deg, #ededed 0deg)`

// 	if(skillsProgressStart == skillsProgressEnd){
// 		clearInterval(progress);
// 	}

// }, speed);