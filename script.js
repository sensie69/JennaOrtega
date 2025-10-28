const imgDisplay = document.querySelector(".img-display");
const allImages = [
  "https://images.unsplash.com/photo-1760468058185-72cfdb9d391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
  "https://images.unsplash.com/photo-1734626317227-75605555f791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1633527067691-85ee71dc5b73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
];

const threeNavLinks = document.querySelectorAll(".trends");

// Image hover animations
function imageAnims() {
  threeNavLinks.forEach((link, index) => {
    link.addEventListener("mouseenter", () => {
      const img = document.createElement("img");
      img.classList.add("img-fluid");
      img.src = allImages[index];
      imgDisplay.appendChild(img);

      imgDisplay.classList.remove("hidden");
      imageAnimGsap(".img-fluid");
      imgDisplay.classList.add("block");
    });
  });
  
  threeNavLinks.forEach((link, index) => {
    link.addEventListener("mouseleave", () => {
      imgDisplay.classList.remove("block");
      const fluidImg = imgDisplay.querySelector(".img-fluid");
      if (fluidImg) {
        imgDisplay.removeChild(fluidImg);
      }
      imgDisplay.classList.add("hidden");
    });
  });
}

imageAnims();

// GSAP image entrance animation
function imageAnimGsap(imgClass) {
  gsap.from(imgClass, {
    duration: 0.5,
    ease: "power2.out",
    y: 50,
    opacity: 0,
  });
}

// GSAP ScrollTrigger animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Timeline 1: Page 1 to Page 2 transition
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      // markers: true, // Uncomment for debugging
    },
  });

  // Animate Jenna image scaling and positioning
  t1.to(
    ".jenna-img",
    {
      scale: 20,
      zIndex: 25,
      position: "fixed",
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      duration: 1,
    },
    "transition"
  );

  // Fade out page 1 content
  t1.to(
    ".jenna-text",
    {
      opacity: 0,
      y: -100,
      duration: 0.8,
    },
    "transition"
  );

  t1.to(
    ".bottom-left",
    {
      opacity: 0,
      y: -100,
      duration: 0.8,
    },
    "transition"
  );

  t1.to(
    ".links",
    {
      opacity: 0,
      y: -100,
      duration: 0.8,
    },
    "transition"
  );

  // Bring in page 2 first background
  t1.to(
    ".page2-first",
    {
      top: "0%",
      scale: 1,
      opacity: 1,
      backgroundColor: "#000",
      zIndex: 50,
      duration: 1,
    },
    "transition"
  );

  // Timeline 2: Page 2 heading reveal
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "center top",
      scrub: 1,
      // markers: true, // Uncomment for debugging
    },
  });

  // Fade out the scaled Jenna image
  t2.to(
    ".jenna-img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "reveal"
  );

  // Reveal page 2 first heading
  t2.to(
    "#page2-h-1",
    {
      top: "10%",
      opacity: 1,
      duration: 1,
    },
    "reveal"
  );

  // Timeline 3: Page 2 second heading reveal
  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "center top",
      end: "bottom top",
      scrub: 1,
      // markers: true, // Uncomment for debugging
    },
  });

  // Fade out first heading
  t3.to(
    "#page2-h-1",
    {
      opacity: 0,
      y: -50,
      duration: 0.5,
    },
    "secondHeading"
  );

  // Reveal second heading
  t3.to(
    "#page2-h-2",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "secondHeading+=0.3"
  );
});
