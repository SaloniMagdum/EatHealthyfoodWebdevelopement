// Cursor movement based on mouse position
var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + 20 + "px";
    cursor.style.top = event.clientY + "px";
    blur.style.left = event.clientX - 250 + "px";
    blur.style.top = event.clientY - 250 + "px";
});

// Adding mouseenter and mouseleave events to all h4 elements within #nav
var h4Elements = document.querySelectorAll("#nav h4");

h4Elements.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cursor.style.transform = "scale(3)";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    
    elem.addEventListener("mouseleave", function() {
        cursor.style.transform = "scale(1)";
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    });
});

// GSAP animations with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for #nav
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

// Animation for #main
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

// Animation for #about-us section
gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
});

// Animation for .card elements
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
});

// Animation for #colon1
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

// Animation for #colon2
gsap.from("#colon2", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
});

// Animation for #page4 h1
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
});
