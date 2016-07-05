$(document).ready(function() {

    $('article p').contents().filter(function(){return this.nodeType === 3}).wrap('<div />');
    // on click event on all anchors with a class of scrollTo
    $('a.scrollTo').on('click', function(){
      
      // data-scrollTo = section scrolling to name
      var scrollTo = $(this).attr('data-scrollTo');
      
      // animate and scroll to the sectin 
      $('body, html').animate({
        
        // the magic - scroll to section
        "scrollTop": $('#'+scrollTo).offset().top
      }, 2000 );
      return false;
    })

    $('.manito img').on('click', function(){ 
            if ($('.manito').hasClass('activo')) {
                $('.manito').removeClass('activo');

            }else{
                $('.manito').addClass('activo');
            }
    });

    $('.hamburger img').on('click', function(){ 
            if ($('nav').hasClass('desplegado')) {
                $('nav').removeClass('desplegado');

            }else{
                $('nav').addClass('desplegado');
            }
    });

    var summaries = $('.cta');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];

        summary.scrollToFixed({
            marginTop:($(window).height() / 2)-(summary.outerHeight(true) / 2),
            limit: function() {
                var limit = 0;
                if (next) {
                    limit = $(next).parent().offset().top - $(this).outerHeight(true) - 20;
                } else {
                    limit = $('footer').offset().top - $(this).outerHeight(true) - 10;
                }
                return limit;
            },
            zIndex: 999
        });
    });

    var historias = $('article p div');

    historias.textillate({
        inEffects: [],
        autoStart: true,
        loop: false,
        in: {
            effect: 'fadeIn',
            delayScale: 0,
            delay: 0,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () {}
        },
        out: {
            effect: 'rotateOutDownLeft',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () {}
        },
        callback: function () {},
        type: 'word'
    });

    $('.cta a').on('click', function (e) {
        e.preventDefault();
        var articulo = $(this).attr('href');
        if( $(articulo).data("visible") === "no" ) {
            $(articulo + " p div").textillate('in');
            $(articulo).data("visible", "si");
        }else{
            $(articulo + " p div").textillate('out');
            $(articulo).data("visible", "no");
        }
    });
});

