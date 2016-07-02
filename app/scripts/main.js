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