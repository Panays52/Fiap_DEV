document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

window.onscroll = function () {
  updateLoadingBar();
};
function updateLoadingBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".loading-bar").style.width = scrolled + "%";
}








document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const sectionId = link.getAttribute('data-section');
          const sections = document.querySelectorAll('section.cursos');

          sections.forEach(section => {
              if (section.id === sectionId) {
                  section.classList.remove('d-none');
              } else {
                  section.classList.add('d-none');
              }
          });
      });
  });
});

