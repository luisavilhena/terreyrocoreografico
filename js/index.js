//js functions

//menu
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
}

$(document).ready(function(){
	  $('.carousel').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  // dots: true,
		  adaptiveHeight: true,
		  // variableWidth: true,
	  });
	});

//menu
$(document).ready(function(){
	var colorSelect = $('#menu-item-7 > a').css("color")
	$('#menu-item-7 > a').css("color", "black");
  $('#menu-item-7').hover(function() {
	  	$('#menu-item-7 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-7 > a').css("color", "black")}
	);
	var colorClick = $('.current_page_item > a').css("color")
	if ($('#menu-item-7 > ul > li').hasClass("current_page_item")) {
		$('#menu-item-7 > a').css("color", colorClick)
		$('#menu-item-7').hover(function() {
		  	$('#menu-item-7 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-7 > a').css("color", colorClick)
		  }
		);
	} else {
		$('#menu-item-7 > a').css("color", "black");
	}

	$('.template-tc__title > h1').css("color", colorClick);
	$('strong').css("color", colorClick);
});
$(document).ready(function(){
	var colorSelect8 = $('#menu-item-8 > a').css("color")
	$('#menu-item-8 > a').css("color", "black");

  $('#menu-item-8').hover(function() {
	  	$('#menu-item-8 > a').css("color", colorSelect8)
	  }, function() { 
	  	$('#menu-item-8 > a').css("color", "black")}
	);
	//em caso de adicionar submenu
	///////////////////
	// if ($('#menu-item-8 > ul > li').hasClass("current_page_item")) {
	// 	var colorClick8 = $('.current_page_item > a').css("color")
	// 	$('#menu-item-8 > a').css("color", colorClick8)
	// 	$('#menu-item-8').hover(function() {
	// 	  	$('#menu-item-8 > a').css("color", colorSelect8)
	// 	  }, function() { 
	// 	  	$('#menu-item-8 > a').css("color", colorClick8)
	// 	  }
	// 	);
	// }
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-9 > a').css("color")
	$('#menu-item-9 > a').css("color", "black");

  $('#menu-item-9').hover(function() {
	  	$('#menu-item-9 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-9 > a').css("color", "black")}
	);
	if ($('#menu-item-9 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-9 > a').css("color", colorClick)
		$('#menu-item-9').hover(function() {
		  	$('#menu-item-9 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-9 > a').css("color", colorClick)
		  }
		);
	} else {
		$('#menu-item-9 > a').css("color", "black");
	}

});
$(document).ready(function(){
	var colorSelect = $('#menu-item-10 > a').css("color")
	$('#menu-item-10 > a').css("color", "black");

  $('#menu-item-10').hover(function() {
	  	$('#menu-item-10 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-10 > a').css("color", "black")}
	);
	if ($('#menu-item-10 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-10 > a').css("color", colorClick)
		$('#menu-item-8').hover(function() {
		  	$('#menu-item-10 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-10 > a').css("color", colorClick)
		  }
		);
	} else {
		$('#menu-item-10 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-11 > a').css("color")
	$('#menu-item-11 > a').css("color", "black");

  $('#menu-item-11').hover(function() {
	  	$('#menu-item-11 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-11 > a').css("color", "black")}
	);
	if ($('#menu-item-11 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-11 > a').css("color", colorClick)
		$('#menu-item-11').hover(function() {
		  	$('#menu-item-11 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-11 > a').css("color", colorClick)
		  }
		);
	}else {
		$('#menu-item-11 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-12 > a').css("color")
	$('#menu-item-12 > a').css("color", "black");

  $('#menu-item-12').hover(function() {
	  	$('#menu-item-12 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-12 > a').css("color", "black")}
	);
	if ($('#menu-item-12 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-12 > a').css("color", colorClick)
		$('#menu-item-12').hover(function() {
		  	$('#menu-item-12 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-12 > a').css("color", colorClick)
		  }
		);
	}else {
		$('#menu-item-12 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-13 > a').css("color")
	$('#menu-item-13 > a').css("color", "black");

  $('#menu-item-13').hover(function() {
	  	$('#menu-item-13 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-13 > a').css("color", "black")}
	);
	if ($('#menu-item-13 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-13 > a').css("color", colorClick)
		$('#menu-item-13').hover(function() {
		  	$('#menu-item-13 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-13 > a').css("color", colorClick)
		  }
		);
	}else {
		$('#menu-item-13 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-14 > a').css("color")
	$('#menu-item-14 > a').css("color", "black");

  $('#menu-item-14').hover(function() {
	  	$('#menu-item-14 > a').css("color", colorSelect)
	  }, function() { 
	  	$('#menu-item-14 > a').css("color", "black")}
	);
	if ($('#menu-item-14 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-14 > a').css("color", colorClick)
		$('#menu-item-14').hover(function() {
		  	$('#menu-item-14 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-14 > a').css("color", colorClick)
		  }
		);
	}else {
		$('#menu-item-14 > a').css("color", "black");
	}
});

//home

$(document).ready(function(){
	if ($(window).width() > 801) {
	  $(window).on('scroll', function(event) {
	  	//right
	  	if($(window).scrollTop() > 10) {
	  		$('.box-1').addClass('box-active');
	  	}
	  	if($(window).scrollTop() > 100) {
	  		$('.box-2').addClass('box-active');
	  	}
	    if($(window).scrollTop() > 800) {
	  		$('.box-3').addClass('box-active');
	  	}
	  	if($(window).scrollTop() < 799) {
	  		$('.box-3').removeClass('box-active');
	  	}
	  	if($(window).scrollTop() > 1450) {
	  		$('.box-4').addClass('box-active');
	  	}
	  	if($(window).scrollTop() < 1449) {
	  		$('.box-4').removeClass('box-active');
	  	}
	  	if($(window).scrollTop() > 1700) {
	  		$('.box-5').addClass('box-active');
	  	}
	  	if($(window).scrollTop() < 1699) {
	  		$('.box-5').removeClass('box-active');
	  	}
	  });
	}
});

$(document).ready(function(){
	if ($(window).width() < 800) {
		$(window).on('scroll', function(event) {
			//right
			if($(window).scrollTop() > 10) {
				$('.box-1').addClass('box-active');
			}
			if($(window).scrollTop() > 100) {
				$('.box-2').addClass('box-active');
			}
		  if($(window).scrollTop() > 200) {
				$('.box-3').addClass('box-active');
			}
		  if($(window).scrollTop() < 199) {
				$('.box-3').removeClass('box-active');
			}
			if($(window).scrollTop() > 350) {
				$('.box-4').addClass('box-active');
			}
		  if($(window).scrollTop() < 344) {
				$('.box-4').removeClass('box-active');
			}
			if($(window).scrollTop() > 360) {
				$('.box-5').addClass('box-active');
			}
			if($(window).scrollTop() < 310) {
				$('.box-5').removeClass('box-active');
			}
		});
	}
	console.log($(window).scrollTop())
});

//home click box
$('.box-1').on('click', () => {
  $('.box-1').toggleClass('box-open');
});
$('.box-2').on('click', () => {
  $('.box-2').toggleClass('box-open');
});
$('.box-3').on('click', () => {
  $('.box-3').toggleClass('box-open');
});
$('.box-4').on('click', () => {
  $('.box-4').toggleClass('box-open');
});
$('.box-5').on('click', () => {
  $('.box-5').toggleClass('box-open');
});

