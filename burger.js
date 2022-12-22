$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /*FIXED HEADER*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* SMOOTH SCROLL*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 600);
    });


    /*  MENU NAV TOGGLE */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* COLLAPSE */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /*SLIDER*/
    
    $("[data-slider]").slick ({
        infinity: true,
        fade: false,
        slidersToShow: 1,
        sliderToScroll: 1

    });


});