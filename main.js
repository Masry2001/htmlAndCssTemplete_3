
// start animate width for skills section
let skills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

// end animate width for skills section

// start increasing nums for stats section

let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;


window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => {
                startCount(num);
            });
            started = true;
        }
    }
}

function startCount(element) {
    let goal = element.dataset.goal;

    let count = setInterval(() => {
        element.textContent++;

        if (element.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


// end increasing nums for stats section

