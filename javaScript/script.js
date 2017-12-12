//Preloader
    $(window).on('load', function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });


//Navbar Javascript
      $(function() {
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1500, 'easeInOutExpo');
              event.preventDefault();
          });
      });
      // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
          target: '.navbar-fixed-top'
      })
      // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });

//Login/Register button javascript
    $(document).ready(function() {
        $('.beta-home-button').bind("mouseover", function(){
            var color  = $(this).css("background-color");
            $(this).css("background", "#c19a6b");
            $(this).css("border-color", "#c19a6b");
            $(this).bind("mouseout", function(){
                $(this).css("background", color);
                $(this).css("border-color", "black");
            })    
        })    
    })

    //google map api call

    function initMap() {
        var uluru = {lat: 28.7501, lng: 77.1177};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }