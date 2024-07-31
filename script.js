var h5timer = document.querySelector("#line1-part1 h5");
console.log(h5timer);
var grow = 0;

setInterval(function () {
  if (grow < 100) {
    h5timer.innerHTML = grow++;
  } else {
    h5timer.innerHTML = grow;
  }
}, 40);

var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.4,
});

tl.from("#line1-part1", {
  opacity: 0,
  duration: 0.2,
});

tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});

tl.to("#loader", {
  opacity: 0,
  delay: 4,
  duration: 0.4,
});

tl.from("#page1", {
  y: 1200,
  opacity: 0,
  delay: 0.2,
  ease: Power4,
  duration: 0.5,
});

tl.to("#loader", {
  display: none,
});
