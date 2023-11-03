/*Scroll*/

ScrollReveal({ 
    reset: true,
    distance: "20px",
    duration: 800,
    delay: 100
});

ScrollReveal().reveal('.contentsText', { delay: 200 });
ScrollReveal().reveal('.experience', { delay: 300, origin: "left" });
ScrollReveal().reveal('.information-detail', { delay: 300, origin: "bottom"});