$( document ).ready(function() {
		
	//Navbar scroll nav
	$('.navbar a.navbar-link[href^="#"]').click(function(){
        var linkPath = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(linkPath).offset().top - 65 }, 500);
        return false;
    });
	
	//Timer
	$('.header-main-text-timer').countdown('2017/10/04').on('update.countdown', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="header-main-text-timer-section">'
		+ '<div class="header-main-text-timer-section-top">%-D</div>'
		+ '<div class="header-main-text-timer-section-bottom">day%!D</div>'
		+ '</div>'
		+ '<div class="header-main-text-timer-divider">:</div>'		
		+ '<div class="header-main-text-timer-section">'		
		+ '<div class="header-main-text-timer-section-top">%H</div>'
		+ '<div class="header-main-text-timer-section-bottom">hour%!H</div>'
		+ '</div>'
		+ '<div class="header-main-text-timer-divider">:</div>'			
		+ '<div class="header-main-text-timer-section">'		
		+ '<div class="header-main-text-timer-section-top">%M</div>'
		+ '<div class="header-main-text-timer-section-bottom">min</div>'
		+ '</div>'
		+ '<div class="header-main-text-timer-divider">:</div>'			
		+ '<div class="header-main-text-timer-section">'		
		+ '<div class="header-main-text-timer-section-top">%S</div>'
		+ '<div class="header-main-text-timer-section-bottom">sec</div>'
		+ '</div>'));
	});	
	
	//Form popup
	$('.join-button, li.join a').magnificPopup({
		type:'inline',
		midClick: true 
	});	
	
	//White paper popup
	$('.navbar-whitepaper, .white-paper-button, .kick-up-text-link a').magnificPopup({
		type:'inline',
		midClick: true 
	});	
	
	//Phone mask
	$("#phone").mask("+7(999) 999-9999");
	
	//Contact forms
	$('#form').validate();
	$('#form2').validate();
	
	//Advantages swiper
	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		spaceBetween: 0,
		pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',			
        paginationClickable: true,
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
        autoplay: 5000,
		autoplayDisableOnInteraction: false,
        grabCursor: true,
		effect: 'fade',
		fade: {
			crossFade: true
		},
	});
	
	//About us parts match height
	$('.about-us-part').matchHeight();
	
	//Advisors match height
	$('.advisor').matchHeight();
	
	//Events match height
	$('.event-outer').matchHeight();

	//Team match height
	$('.member').matchHeight();
	
	//Partners match height
	$('.partner').matchHeight();	
	
	//AnimateMotions
	var smallCircleGreenAnimate = $('#small-circle-green-animate');
	var pathGreenAnimate = $('#path-green-animate');
	var smallCircleBlueAnimate = $('#small-circle-blue-animate');
	var pathBlueAnimate = $('#path-blue-animate');
	var smallCircleRedAnimate = $('#small-circle-red-animate');
	var pathRedAnimate = $('#path-red-animate');
	var smallCircleVioletAnimate = $('#small-circle-violet-animate');
	var pathVioletAnimate = $('#path-violet-animate');
	
	//Animate if visible
	var fired = 0;
	$(window).on( "scroll", function() {
		if ($('.token-terms-circles').isOnScreen() && fired == 0) {
			$('.token-terms-circles').addClass('visible-on-screen');
			smallCircleGreenAnimate[0].beginElement();
			pathGreenAnimate[0].beginElement();
			smallCircleBlueAnimate[0].beginElement();
			pathBlueAnimate[0].beginElement();
			smallCircleRedAnimate[0].beginElement();
			pathRedAnimate[0].beginElement();
			smallCircleVioletAnimate[0].beginElement();
			pathVioletAnimate[0].beginElement();
			//Counters
			$('.small-circle-green-text').counterUp({
				delay: 10,
				time: 700
			});
			$('.small-circle-blue-text').counterUp({
				delay: 10,
				time: 600
			});
			$('.small-circle-red-text').counterUp({
				delay: 10,
				time: 500
			});
			$('.small-circle-violet-text').counterUp({
				delay: 10,
				time: 600
			});			
			$('.counterup-green').counterUp({
				delay: 10,
				time: 700
			});
			$('.counterup-blue').counterUp({
				delay: 10,
				time: 600
			});	
			$('.counterup-red').counterUp({
				delay: 10,
				time: 500
			});	
			$('.counterup-violet').counterUp({
				delay: 10,
				time: 600
			});
			fired++;
		}
	});

});

//Form submit functions
function submitForm() {
	//console.log($('#form').valid());
	if ($('#form').valid()) {
		// ajax
		var formData = new FormData();
		formData.append('email', document.querySelector("#email").value);
		formData.append('name', document.querySelector("#name").value);
		formData.append('from', document.querySelector("#from").value);
		formData.append('investment', document.querySelector("#investment").value);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'form-parser.php');
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				$('.contactform').css( "display", "none" );
				$('.form-header').css( "display", "none" );
				$('.form-header.success').css( "display", "block" );
				setTimeout(function() {
					$('.contactform').css( "display", "block" );
					$('.form-header').css( "display", "block" );
					$('.form-header.success').css( "display", "none" );
					$('#email').val('');
					$('#name').val('');
					$('#from').val('');
					$('#investment').val('');					
				}, 3000);
			}
		}
		xhr.send( formData );
	}
}
function submitForm2() {
	//console.log($('#form').valid());
	if ($('#form2').valid()) {
		// ajax
		var formData = new FormData();
		formData.append('email2', document.querySelector("#email2").value);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'form-parser2.php');
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				$('.subscribe-form').css( "display", "none" );
				$('.subscribe-title-small.success').css( "display", "block" );
				setTimeout(function() {
					$('.subscribe-form').css( "display", "block" );
					$('.subscribe-title-small.success').css( "display", "none" );
					$('#email2').val('');
				}, 3000);
			}
		}
		xhr.send( formData );
	}
}