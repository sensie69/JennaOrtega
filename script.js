const imgDisplay = document.querySelector(".img-display");
const allImages = [
  "https://images.unsplash.com/photo-1760468058185-72cfdb9d391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
  "https://images.unsplash.com/photo-1734626317227-75605555f791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1633527067691-85ee71dc5b73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
];

const threeNavLinks = document.querySelectorAll(".trends");

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
      imgDisplay.removeChild(imgDisplay.querySelector(".img-fluid"));
      imgDisplay.classList.add("hidden");
    });
  });
}

imageAnims();

//Gsap Code Here //
function imageAnimGsap(imgClass) {
  gsap.from(imgClass, {
    duration: 0.5,
    easing: "ease",
    y: 50,
    opacity: 0,
  });
}

// PAGE-2 ANIM BUT WITH THE IMAGE FROM PAGE-1//

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const jennaIMG = document.querySelector(".jenna-img");
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "page2",
      start: "50% 95%",
      end: "100% 80%",
      // markers:true,
      scrub: true,
      easing: "ease",
    },
  });

  t1.to(
    ".jenna-img",
    {
      scale: 20,
      zIndex: 25,
      position: "fixed",
      top: "58%",
      left: "100%",
      duration: 1,
      x: 0,
      y: 0,
    },
    "a"
  );

  t1.to(
    "#page1",
    {
      overflowY: "visible",
    },
    "b"
  );
  t1.to(
    ".jenna-text",
    {
      top: "-1%",
      opacity: 0,
    },
    "b"
  );
  t1.to(
    ".bottom-left",
    {
      top: "-1%",
      opacity: 0,
    },
    "b"
  );
  t1.to(
    ".links",
    {
      top: "-1%",
      opacity: 0,
      duration: 1,
    },
    "b"
  );
  t1.to(
    ".page2-first",
    {
      top: "0%",
      opacity: 1,
      duration: 1,
      zIndex: 50,
      scale: 1,
      backgroundColor: "#000",
    },
    "a"
  );

  //     page2-top //
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "start 40%", // Trigger when the top of .page2-first hits 80% from the window top
      end: "bottom 80%",
      markers: true,
      scrub: true,
    },
  });
  t2.to("#page2-h-1", {
    top: "10%",
    left:"55%", // Visible zone
    zIndex: 55,
    opacity: 1,
    duration: 1,
  });
  t2.to(".jenna-img", {
    
    display:"none"
  });
});
