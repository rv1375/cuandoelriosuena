$(document).ready(function() {
    // on click event on all anchors with a class of scrollTo
    $('a.scrollTo').on('click', function(){
      
      // data-scrollTo = section scrolling to name
      var scrollTo = $(this).attr('data-scrollTo');
      
      // animate and scroll to the sectin 
      $('body, html').animate({
        
        // the magic - scroll to section
        "scrollTop": $('#'+scrollTo).offset().top
      }, 1000 );
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
            marginTop: 300,
            limit: function() {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                } else {
                    limit = $('footer').offset().top - $(this).outerHeight(true) - 10;
                }
                return limit;
            },
            zIndex: 999
        });
    });


});