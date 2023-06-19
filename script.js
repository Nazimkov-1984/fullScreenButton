const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});
