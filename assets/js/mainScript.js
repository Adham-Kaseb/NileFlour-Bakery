


var backTopBtn = document.querySelector(".back_top");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
});

backTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  //  reset: 'true',
});

sr.reveal(`.sr1`);
sr.reveal(`.sr2`, {rotate: {z: -15}});