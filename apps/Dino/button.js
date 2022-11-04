function stuff() {
  document.getElementById("button").classList.add("ohidden");
  setTimeout(() => {
    location = "index.html";
  },350);
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("button").addEventListener("click", stuff);
});

