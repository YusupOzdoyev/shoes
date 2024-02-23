$(document).ready(function(){
    $('.catalog_slider').slick({
        slidesToShow: 5,
        dots: true,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        asNavFor: ".catalog_sliderbig",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    });
    $('.catalog_sliderbig').slick({
        arrows: false,
        asNavFor: ".catalog_slider",
    });
});