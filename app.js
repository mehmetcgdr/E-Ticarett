let slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let auto = true;
let intervalTime = 5000;
let slideInterval;

let againInterval = () => {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    }
};


next.addEventListener("click", () => {
    nextSlide();
    againInterval();
});

prev.addEventListener("click", () => {
    prevSlide();
    againInterval();
});

const nextSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}



function prevSlide() {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        slides[slides.length - 1].classList.add("active");
    }
}

if(auto){
    slideInterval= setInterval(nextSlide, intervalTime);
}