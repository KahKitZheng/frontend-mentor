const navEl = document.getElementById("navEl");
const navBtnEl = document.getElementById("navBtnEl");

navBtnEl.addEventListener("click", () => {
  navEl.classList.toggle("open");
  navBtnEl.classList.toggle("open");
});
