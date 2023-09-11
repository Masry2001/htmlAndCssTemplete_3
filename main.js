// Start animate width for skills section
let skills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".progress span");

// Start increasing nums for stats section
let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = function () {
    // Check if the user has scrolled past the skills section
    if (window.scrollY >= skills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    // Check if the user has scrolled past the stats section and hasn't started counting yet
    if (window.scrollY >= stats.offsetTop && !started) {
        nums.forEach((num) => {
            startCount(num);
        });
        started = true;
    }
};

function startCount(element) {
    let goal = element.dataset.goal;

    let count = setInterval(() => {
        element.textContent++;

        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


let countDownDate = new Date("July 31 2031 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDifference = countDownDate - dateNow;

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days;

    let remaining = dateDifference % (1000 * 60 * 60 * 24);
    let hours = Math.floor(remaining / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours;

    remaining = dateDifference % (1000 * 60 * 60);
    let minutes = Math.floor(remaining / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes;

    remaining = dateDifference % (1000 * 60);
    let seconds = Math.floor(remaining / (1000));
    document.querySelector(".seconds").innerHTML = seconds;

    if (dateDifference < 0) {
        clearInterval(counter);
    }

}, 1000)