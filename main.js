let mydateCount = new Date("Dec 31,2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = mydateCount - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".dyas").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".miuntes").innerHTML = min < 10 ? `0${min}` : min;
  document.querySelector(".seconds").innerHTML = sec < 10 ? `0${sec}` : sec;
}, 1000);

let ourSkills = document.querySelector(".our-skills");
let ourSkillsSpans = document.querySelectorAll(
  ".our-skills .skill .the-progress span"
);
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 300) {
    ourSkillsSpans.forEach((el) => {
      el.style.width = el.dataset.width;
    });
  }
};

let stats = document.querySelector(".stats");
let myNumber = document.querySelectorAll(".stats .number");
let stopCount = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!stopCount) {
      myNumber.forEach((e) => {
        startCount(e);
      });
      stopCount = true;
    }
  }
});

function startCount(e) {
  let goal = e.dataset.clint;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
