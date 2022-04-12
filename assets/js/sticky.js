sticky = $("#navbar").offset().top;

$(window).scroll(function(){
	if($(window).scrollTop() >= sticky) {
		$("#navbar").addClass("sticky");
		$('.nav').addClass("sticky-effect");
		
	} else {
		$("#navbar").removeClass("sticky");
		$('.nav').removeClass("sticky-effect");
		
	}
});

$('document').ready(function () {
	var trigger = $('#hamburger'),
	isClosed = true;
	trigger.click(function () {
		burgerTime();
	});

	function burgerTime() {
		if (isClosed == true) {
			trigger.removeClass('is-open');
			$('.item').addClass('active');
			$('ul').addClass('burger_activ');
			trigger.addClass('is-closed');
			isClosed = false;
		} else {
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			$('.item').removeClass('active');
			$('ul').removeClass('burger_activ');
			isClosed = true;
		}
	}
});