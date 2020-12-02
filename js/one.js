$(document).ready(function () {
    $nav = $('.nav');
     
 /*-------- Blog  ----------*/
     $('.owl-carousel').owlcarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
     });
});
