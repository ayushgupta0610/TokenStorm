(function($) {          
    $(document).ready(function(){ 

         


        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 400) {
                $('nav').addClass("nav_background");
                $('#nav_top').removeClass("nav_top")
            } else {
                $('nav').removeClass("nav_background");
                $('#nav_top').addClass("nav_top")
            }
        });



        // Add smooth scrolling to all links
     $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
              });



  $('.fancybox').fancybox({
    beforeShow : function(){
    this.title =  $(this.element).data("caption");
    }
    });

    });
})(jQuery);

function drop(){
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}









  