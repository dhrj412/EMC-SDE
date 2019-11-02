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

// fetching price and returning sum

(function () { let batteryUnitPrice = [];
const allPrices = document.getElementsByClassName("half-hero-pricing");
for (let i = 44; i < 48; i++) {
  const values = allPrices[i].innerText;
  batteryUnitPrice.push(Math.ceil(values.slice(12, 17)));
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
alert(arrSum(batteryUnitPrice));
}) ();


//Networking section with Cameras, Photo & Video images

let source = [];
const e = document.getElementsByClassName("half-inner-module-image");
for (let i = 24; i < 28; i++) {
    const values = e[i].innerHTML;
    source.push(values);
}
console.log(source);
for(let i = 40; i < 44; i++){
    for(let j = 0; j< source.length; j++)
    e[i].innerHTML = source[j];
}



