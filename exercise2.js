// Make the slider's autoplay feature stops.
$(window).load(function() {
  $(".flexslider").flexslider({
    slideshow: false
  });
});

/* When the user clicks on the first tab of the slider, 
change all the sections' hero image background-colour to purple and to green when the second tab is clicked. */
$(".dellmetrics-pl-tab").on("click", function() {
  if ($(".dellmetrics-pl-tab").hasClass("active")) {
    $(".gray-light").css("background", "purple");
  } else {
    $(".gray-light").css("background", "green");
  }
});
