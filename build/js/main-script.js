"use strict";

$(function (){
    $('body').on('click', function (){
        $(this).addClass('test');
    })

    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
	    // do something…
    });

    $(".js-owl-carousel").owlCarousel({
        items: 1,
        dots: true
    });
})