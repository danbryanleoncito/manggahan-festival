const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// Background-Scroll zoom effect
gsap.to("#Background-Scroll", {
  scale: 1.5,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "top",
    end: "bottom",
    scrub: true,
  }
});

// Overlay opacity fade
gsap.to("#Overlay", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "bottom 70%",
    end: "bottom +=260vh",
    scrub: true,
  }
});

// Background-Main zoom effect
gsap.to("#Background-Main", {
  scale: 1.3,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "top 104px",
    end: "bottom 208px",
    scrub: true,
  }
});

// Intro-Parent fade out
gsap.to("#Intro-Parent", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "bottom 70%",
    end: "bottom +=260vh",
    scrub: true,
    // markers:true
  }
});

gsap.to("#Background-Scroll", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "top 0%",
    end: "bottom 70%",
    scrub: true,
  }
})

// Hero-Parent fade in
gsap.to("#Hero-Parent", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "top 0%",
    end: "bottom 70%",
    scrub: true,
    
  }
});

// Pin the Sticky-Container during the scroll
ScrollTrigger.create({
  trigger: "#Sticky-Container",
  start: "top top",
  end: "bottom +=260vh",
  pin: true,
  scrub: true,
});


window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.remove(), 1000); // Optional fade-out
  }
});

gsap.to("#mainNavbar", {
  backdropFilter: "blur(0px)",
  backgroundColor: "rgba(255, 255, 255, 0)",
  scrollTrigger: {
    trigger: "#Sticky-Container",
    start: "top 10%",
    end: "bottom 70%",
    scrub: true,
    markers:true
  }
});

// Cards

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const image = card.querySelector('.card-thumbnail');
  const video = card.querySelector('.card-hover-video');

  if (!image || !video) return;

  card.addEventListener('mouseenter', () => {
    gsap.to(card, { scale: 1.05, duration: 0.5, ease: "power2.out" });

    image.style.display = "none";
    video.style.display = "block";
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, duration: 0.5, ease: "power2.out" });

    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    image.style.display = "block";
  });
});

// Schedule tabs

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabTarget = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      if (content.id === tabTarget) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});
