document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});

const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const video4 = document.getElementById("projectVideo4");
const video5 = document.getElementById("projectVideo5");

const videoList = [video1, video2, video3, video4, video5];

videoList.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("successMessage").style.display = "block";

  this.reset();

  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 2000);
});
