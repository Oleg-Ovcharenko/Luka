jQuery(document).ready(function($){
  console.log(flexslider);
  $('.slider').flexslider({
    selector: ".tabs > .tab",
    animation: "slide"
  });
});


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {
      lat: 49.8448856,
      lng: 24.0234585
    },
    disableDefaultUI: true
  });
}
