let skills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".progress span");


window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}