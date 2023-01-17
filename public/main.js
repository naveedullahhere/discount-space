$(document).ready(function () {
    (function ($) {
        "use strict";



        $(function () {
            var header = $(".start-style");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    header.removeClass('start-style').addClass("scroll-on");
                } else {
                    header.removeClass("scroll-on").addClass('start-style');
                }
            });
        });
    })(jQuery);



})


window.addEventListener('load', function () {
    $("#payInvoice").click(function () {
        $("#togglerBtnPaypal").slideToggle();
    });


    function fixedHeader(x) {
        if (x.matches) {
            document.getElementsByClassName("navigation-wrap")[0].classList.add("position-fixed");
        } else {
            document.getElementsByClassName("navigation-wrap")[0].classList.remove("position-fixed");
        }
    }

    var x = window.matchMedia("(max-width: 768px)")
    fixedHeader(x)
    x.addListener(fixedHeader)



        (function ($) {



            "use strict";

            $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
                if ($(window).width() > 768) {
                    var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
                    setTimeout(function () {
                        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                    }, 1);
                }
            });


        })(jQuery);
});

