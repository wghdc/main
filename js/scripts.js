/*!
    * Start Bootstrap - Agency v6.0.1 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
 $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict





var thumbnails = document.getElementById("thumbnails");
var imgs = thumbnails.getElementsByTagName("img");
var main = document.getElementById("main");
var counter = 0;

for(let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    main.src = this.src;
  });
}


// Video Feature
$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});
