//koodi allikas: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// Võtab html-ist nupu.
let mybutton = document.getElementById("myBtn");

// Näitab nuppu, kui lehe kasutaja kerib 20px alla.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kui kasutaja vajutab nuppule, läheb tagasi üles.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}