jQuery(document).ready(function($){

/* ==================== add sortable and striped classes to tables */
// $('table').addClass('sortable');
$('table').addClass('striped');
/* add rel and value for sortable again */
// var aAsc = [];
// $('table.sortable').each(function(){
	// $(this).find('thead th, thead td').each(function(index){$(this).attr('rel', index);});
	// $(this).find('th,td').each(function(){$(this).attr('value', $(this).text());});
// });

/* ==================== add icon for image zoom */
$('a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".gif"],a[href$=".png"],a.lightbox,a.fancybox')
	.addClass('zoom')
	.append('<span class="zoom-icon"><i class="icon icon-search-plus"></i></span>');

/* ==================== slider http://bxslider.com/options */
bxSlider = $('.slider').bxSlider({
	nextText: '',
	prevText: '',
	slideWidth: 293,
	slideMargin: 25,
	captions: false,
	pager: false,
	controls: true,
	auto: false,
	adaptiveHeight: true,
	minSlides: 1,
	maxSlides: 3,
	moveSlides: 1
});
bxSlider = $('.sidebar-slider').bxSlider({
	nextText: '',
	prevText: '',
	// slideWidth: 293,
	// slideMargin: 25,
	captions: false,
	pager: true,
	controls: false,
	auto: true,
	adaptiveHeight: true,
	// minSlides: 1,
	// maxSlides: 3,
	// moveSlides: 1
});

/* ====== mediathek-slider */
// var mediathekSlider = $('.single-medium .mediathek-slider').bxSlider({
var mediathekSlider = $('.mediathek-slider').bxSlider({
	nextText: '',
	prevText: '',
	// slideWidth: 220,
	// slideMargin: 1,
	adaptiveHeight: true,
	captions: false,
	pager: false,
	controls: true,
	minSlides: 1,
	maxSlides: 1,
	moveSlides: 1,
	// pagerCustom: '.pager',
	infiniteLoop: false,
	hideControlOnEnd: true,
	onSliderLoad:function($slideElement, currentIndex){
		changeThumbSlider(thumbSlider,currentIndex); // set first thumb on active
	},
	onSlideBefore:function($slideElement, oldIndex, newIndex){
		changeThumbSlider(thumbSlider,newIndex); // change thumb
	}
});
// pager of mediathekSlider
// var thumbSlider = $('.single-medium .pager').bxSlider({
var thumbSlider = $('.pager').bxSlider({
	nextText: '',
	prevText: '',
	slideWidth: 100,
	slideMargin: 10,
	pager: false,
	controls: true,
	minSlides: 1,
	maxSlides: 6,
	moveSlides: 1,
	infiniteLoop: false,
	hideControlOnEnd: true
});
// sync thumb and main slider
linkMainSliders(mediathekSlider,thumbSlider);
function linkMainSliders(bigS,thumbS){

    // $('.single-medium .pager').on("click","a",function(event){
    $('.pager').on("click","a",function(event){
		event.preventDefault();
		var newIndex=$(this).attr("data-slide-index");
		bigS.goToSlide(newIndex);
    });

}
// change thumbslider
function changeThumbSlider(slider,newIndex){

	!newIndex ? newIndex = 0 : '';

    // var $thumbS=$('.single-medium .pager');
    var $thumbS=$('.pager');
    $thumbS.find('.active').removeClass("active");
    $thumbS.find('a[data-slide-index="'+newIndex+'"]').parent().addClass("active");
	
	if (newIndex > 0) {
		if (slider.getSlideCount()-newIndex>=5)slider.goToSlide(newIndex);
		else slider.goToSlide(slider.getSlideCount()-5);
	}

}

/* ==================== shariff override */
// $('.shariff li a span.fa-twitter').addClass('icon-twitter');
// $('.shariff li a span.fa-facebook').addClass('icon-facebook');
// $('.shariff li a span.fa-google-plus').addClass('icon-google-plus');
// $('.shariff li a span.fa-info').addClass('icon-info');
// $('.shariff li a span.fa').removeClass('fa').addClass('icon');

/* ==================== fixed navigation */
$(window).bind('scroll', function() {
	$(window).scrollTop() > 110 ? $('.page-navigation').addClass('fixed') : $('.page-navigation').removeClass('fixed');
});

/* ==================== toggle container */
// prevent iframe from loading
var $iframe = $('.single-na5108seminar .googlemap iframe');
$iframe.attr('data-src', $iframe.attr('src')).removeAttr('src');

$('.toggle').click(function(e) {
	
	var $hash = $(this).prop('hash');
	$($hash).toggle(function(){ if ($hash == '#mapcanvas') { initializeGoogleMaps(); } });
	
	$('i', this).toggleClass('icon-arrow-down');
	
	return false;
});

});