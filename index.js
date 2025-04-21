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
    markers:true
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
