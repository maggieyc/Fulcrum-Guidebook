/*
Author: Maggie Chen
Date: August 19, 2022
*/

// Determine the browser type.
let userAgent = navigator.userAgent;
let browserIsSafari = false;

if(userAgent.match(/safari/i)){
  browserName = true;
}

function scrollToElement(id){
  document.getElementById(id).scrollIntoView({behavior : 'smooth'});
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (!browserIsSafari && document.documentElement.scrollTop > 100 || browserIsSafari && document.body.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.getElementById("topBtn").style.display = "none";
  window.scrollTo({top: 0, behavior: 'smooth'});
}