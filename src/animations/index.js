import gsap from "gsap";

// Declare a general timeline to use in all the animation functions
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0, // Hide scroll immediately
    css: { overflowY: "hidden", overflowX: "hidden" },
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.0,  // Faster duration
      delay: 0.5,     // Shorter delay to speed things up
      y: 70,
      skewY: 10,
      stagger: 0.3,   // Faster stagger between text animations
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 0.8,  // Reduce time for exit animation
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    // Reset the landing section's overflow
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })

    // Restore scroll on body after the preloader completes
    .to("body", {
      duration: 0,
      css: { overflowY: "scroll" }, // Re-enable scroll only after preloader disappears
    })

    // Preloader hides and content is revealed
    .to(".preloader", {
      duration: 0.8,  // Make the preloader disappear faster
      height: "0vh",
      ease: "Power3.easeOut",
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    })
    .to(".home-content", {
      duration: 0.1,
      css: { visibility: "visible" },
    })

    // Optional: additional animations after preloader
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};
