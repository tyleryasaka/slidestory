	var slidestory_width = $('#slidestory-frame').width();
	$('#slidestory-frame').css({'height':(slidestory_width/2)+'px'});
	var current_slide=1;
	var total_slides=$('#slidestory-frame').children().length;
	toggleSlide();

	function nextSlide() {
	    toggleSlide();
	    if(current_slide<total_slides) current_slide+=1;
	    else current_slide=1;
	    toggleSlide();
	}

	function prevSlide() {
	    toggleSlide();
	    if(current_slide>1) current_slide-=1;
	    else current_slide=total_slides;
	    toggleSlide();
	}

	function toggleSlide() {
	    $('#slidestory-frame img:nth-child('+current_slide+')').toggleClass('show-slide');
	    $('#slidestory-text div:nth-child('+current_slide+')').toggleClass('show-slide');
	    $('#slidestory-control #counter').html(current_slide+' of '+total_slides+' photos.');
	}
