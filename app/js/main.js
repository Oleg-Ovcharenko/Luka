window.onload = function() {
  var menu_btn = document.getElementById('menu_head');
  var menu_con = document.getElementById('menu_items_container');

  var visible = false;

  menu_btn.onclick = function() {
    if(visible == true){
      visible = false;
      menu_con.style.display = "none";
    } else {
      visible = true;
      menu_con.style.display = "block";
    }
  };

  /*=== SLIDER ===*/

  var slides = document.querySelectorAll('#slider .header_slider__slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,5000);

  function nextSlide() {
      slides[currentSlide].className = 'header_slider__slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'header_slider__slide showing';
  }

};