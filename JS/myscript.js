AOS.init();


AOS.init({
  offset: 120,
  delay: 0, 
  duration: 900, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
