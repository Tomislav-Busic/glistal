const tl = gsap.timeline({defaults: { ease: "power1.out" } }); 

tl.fromTo(".home .back-img img", { opacity: 0}, { opacity: 1, duration: 1});
tl.fromTo(".home-content", { opacity: 0}, { opacity: 1, duration: 5});
tl.fromTo(".navbar", { opacity: 0}, { opacity: 1, duration: 6}, "-=5");

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
         // scroll-up button show/hide script
         if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Glistal", "Gliste za kompostiranje", "Granule glistala", "Gliste za ribolov"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    });

    // OWL CAROUSEL SCRIPT
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});  



