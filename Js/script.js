const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    gsap.to(".nav-links", { x: "0" });
    gsap.to(".line", { backgroundColor: "black" });
    gsap.set("body", { overflow: "hidden" });
  } else {
    gsap.to(".nav-links", { x: "100%" });
    gsap.to(".line", { backgroundColor: "white" });
    gsap.fromTo(".nav-links a", { opacity: 0, y: 0 }, { opacity: 1, y: 20, delay: 1, stagger: 0.5 });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  }
});

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});
