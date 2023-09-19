let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").style.transform = "translateY(0)";
  } else {
    document.querySelector(".navbar").style.transform = "translateY(-100%)";
  }
  prevScrollPos = currentScrollPos;
}
