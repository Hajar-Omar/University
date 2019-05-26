$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

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
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



  //filter
  $(".filter").not('.business').hide('3000');
  $('.filter').filter('.business').show('3000');

  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    //if (value == "all") {
    //$('.filter').removeClass('hidden');
    // $('.filter').show('1000');
    //} else {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    if ($(".filter-button").removeClass("activeFilter")) {
      $(this).removeClass("activeFilter");
    }
    $(this).addClass("activeFilter");


    $(".filter").not('.' + value).hide('3000');
    $('.filter').filter('.' + value).show('3000');


    // }
  });

  //search
  $(".searchLink").click(function () {
    $("input[name=search]").toggleClass('showSearch');
  });

  //footer button to the top
  $(".toTop").click(function () {
    $('html,body').animate({
      scrollTop: $("header").offset().top
    },
      3000);
  });


  //tooltips
 // $('[data-toggle="tooltip"]').tooltip();
 

 //bolts links
 $(".boltsLink").click(function () {
  //alert($(this).attr('href'));
  $('html,body').animate({
     scrollTop: $($(this).attr('href')).offset().top 
    }, 1000);

  // $('.boltsItem').css({"background-color": "#fff"});
   //$(this).parent().css({"background-color": "#E67D20"});
});


//scrollspy
var $topNavElements = $('.bolts .boltsLink');
$('.screen').scrollspy({
    outCallback: function ($element) {
    $topNavElements.filter('[href="#' + $element.attr('id') + '"]').removeClass('activeLink');
    $element.find('.side').html('');
  },
  inCallback:  function ($element, side) {
    $topNavElements.filter('[href="#' + $element.attr('id') + '"]').addClass('activeLink');
    $element.find('.side').html(side);
  }
});

$('.screen').scrollspy({
    // window, document or any container element
    scrollElement:      window,
    // CSS class added to the section when you're viewing on
    activeClass:        'onScreen',
    // throttle the scroll trigger
    throttle:           250,
    // distance from bottom
    distanceBottom:     3,
    // fraction, pixel or percent
    distanceBottomUnit: 'fraction',
    // in-top, in-bottom, out-top, out-bottom
    addSideClasses:     false,
    // callbacks
    inCallback:         function ($element, side) {
        return true;
    },
    outCallback:        function ($element, side) {
        return true;
    }
  });
  


});









