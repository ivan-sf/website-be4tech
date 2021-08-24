window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
    	draggable: false,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  	breakpoint: 320,
			  	settings: {
				// Set to `auto` and provide item width to adjust to viewport
				// slidesToShow: 1,
				// slidesToScroll: 3,
				draggable: true,
				scrollLock: true,
				slidesToShow: 1.5,
				slidesToScroll: 5,
				duration: 0.25
			  }
			},{
			  // screens greater than >= 1024px
				breakpoint: 800,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
        		draggable: true,
				scrollLock: true,
			  }
			}
		]
	});
});