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

function showSection(event, sectionId) {
  event.preventDefault();
  
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });

  var links = document.querySelectorAll('nav ul li a');
  links.forEach(function(link) {
      link.classList.remove('active');
  });

  document.getElementById(sectionId).style.display = 'block';
  event.target.classList.add('active');
}

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".text1",
  { x: 0 },
  { x: -1000,
    scrollTrigger: {
        trigger: ".content",
        start: 'top 600px',
        end: 'bottom 1000px',
        scrub: true
    }
  }
);

gsap.fromTo(".text-below",
  { x: -1000 },
  { x: 0,
    scrollTrigger: {
        trigger: ".content",
        start: 'top 600px',
        end: 'bottom 1000px',
        scrub: true
    }
  }
);

gsap.fromTo(".text2",
  { x: 0 },
  { x: -1000,
    scrollTrigger: {
        trigger: ".text2",
        start: 'top 500px',
        end: 'bottom 150px',
        scrub: true
    }
  }
);

gsap.fromTo(".text3",
  { x: -1000 },
  { x: 0,
    scrollTrigger: {
        trigger: ".text2",
        start: 'top 500px',
        end: 'bottom 150px',
        scrub: true
    }
  }
);
