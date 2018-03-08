(function($) {
    $(document).ready(function(){



    $('.navbar-nav').on('click', 'li', function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });


});
})(jQuery);

$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
     $(this).css('background-image', 'url(' + imgSrc + ')');
  })


  $(".img-c").click(function() {
    let w = $(this).outerWidth()
    let h = $(this).outerHeight()
    let x = $(this).offset().left
    let y = $(this).offset().top


    $(".image").not($(this)).remove()
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("image")
    $(".image").css('top', y - 8);
    $(".image").css('left', x - 8);

      setTimeout(function() {
    copy.addClass("positioned")
  }, 0)

  })




})

$(document).on("click", ".img-c.active", function() {
  let copy = $(this)
  copy.removeClass("positioned active").addClass("postactive")
  setTimeout(function() {
    copy.remove();
  }, 500)
})
