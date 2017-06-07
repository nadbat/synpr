$(document).on('ready', function() {
	$('.j-gallery').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		prevArrow: '<span class="partners__arrow-left"></span>',
		nextArrow: '<span class="partners__arrow-right">></span>',
	});
});


$('.j-docs-tab').each(function() {
            $(this).on('click', function() {
                $(this).find('.b-docs__sublist').slideToggle();
            });
        });