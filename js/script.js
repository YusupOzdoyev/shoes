$(document).ready(function(){
    $('.catalog_slider').slick({
        dots: true,
        slidesToShow: 7,
        // autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        asNavFor: ".catalog_sliderbig",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.catalog_sliderbig').slick({
        arrows: false,
        asNavFor: ".catalog_slider",
    });
});