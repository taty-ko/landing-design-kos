function initEmptySlide() {
    const margin = $(".container")[0].getClientRects()[0].x;
    $(".item1").css("margin-left", Math.floor(margin) - 15);
  }
  
  $(window).resize(function () {
    initEmptySlide();
  });
  
  $(document).ready(function () {
    initEmptySlide();
  
    $(".variable").slick({
      dots: false,
      focusOnSelect: false,
      infinite: false,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      centerPadding: "40px",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: true
          }
        }
      ]
    });
  });