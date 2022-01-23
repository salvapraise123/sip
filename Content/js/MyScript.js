$(document).ready(function () {

    var owl = $('.TestimonialCarousel');
    owl.owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        dots: true,
        dotsEach: 1,
        center: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    var owl = $('.PorfolioCarousel');
    owl.owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        dots: true,
        dotsEach: 1,
        center: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
})


new WOW().init();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.ReboticsNav').outerHeight();
$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.ReboticsNav').addClass('sticknavbar');
            $('.back-to-top').fadeIn();
        }
        else {
            $('.back-to-top').fadeOut();
            $('.ReboticsNav').removeClass('sticknavbar');
        }
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('.ReboticsNav').css({ 'top': '-60px', 'opacity': '0' });
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('.ReboticsNav').css({ 'top': '0', 'opacity': '1' });
        }
    }
    lastScrollTop = st;
}

// footer heading animation starts here

var FooterHeadingAnimation = document.querySelector('.FooterAnimation');
FooterHeadingAnimation.innerHTML = FooterHeadingAnimation.textContent.replace(/\S/g, "<div class='wow letter'>$&</div>");
var AnimationDelay;
var NthSpan = 1;
for (var i = 0.1, l = 0.6; i <= l; i += 0.05) {
    // debugger
    AnimationDelay = i;
    $(".FooterAnimation .letter:nth-child(" + NthSpan + ")").css({
        "animation": "SingleLetterAnimation 0.8s ease-in " + AnimationDelay + "s backwards"
    });
    NthSpan++
};

$(window).on('load', function () {
    $("#page-loader").addClass("Vanished");
    $("#page-loader").fadeOut("800");
});

 
