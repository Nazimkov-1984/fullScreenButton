document.querySelector("button")?.addEventListener("click", () => {
  document.documentElement.requestFullscreen()
  document.querySelector("button").style.backgroundColor = "green"
})
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    document.querySelector("button").style.backgroundColor = "grey"
  }
})
