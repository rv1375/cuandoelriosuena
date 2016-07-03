$(document).ready(function() {
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

    $('.cta a').on('click', function(e){
        e.preventDefault();
        $('#historia4 p').textillate({
            outEffects: [ 'hinge' ],
            loop: true,
            out: {
                    effect: 'hinge',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                    callback: function () {}
                }
        });
    });
});