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


$('.j-content-tab').each(function() {
 $(this).on('click', function() {
  $(this).find('.b-content__sublist').slideToggle();
  $(this).find('.b-content__arrow').toggleClass('is-active');
 });
});

(function($tabs) {
 if (!$tabs.length) {
  return;
 }
 var $link = $tabs; //ссылка
 var $tab = $('.b-content__list'); //контент

 $link.on('click', function(e) {
  var $self = $(this);
  var index = $self.index();
  e.preventDefault();
  if (!$self.hasClass('is-active')) {
   $link.removeClass('is-active');
   $self.addClass('is-active');
   $tab.hide();
   $tab.eq(index).fadeIn();
  }
 });
})($('.j-tabs'));

$(document).on('ready', function(){
    (function($descriptionTabs) {
 if (!$descriptionTabs.length) {
  return;
 }
 var $link = $descriptionTabs; //ссылка
 var $tab = $('.description-content'); //контент

 $link.on('click', function(e) {
  var $self = $(this);
  var index = $self.index();
  e.preventDefault();
  if (!$self.hasClass('is-active')) {
   $link.removeClass('is-active');
   $self.addClass('is-active');
   $tab.hide();
   $tab.eq(index).fadeIn();
  }
 });
})($('.j-description-tab'));
})

