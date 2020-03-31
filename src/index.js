$('.testimonial__outer').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: {
		slidesToShow: 1,        
      }
    },
  ]
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
