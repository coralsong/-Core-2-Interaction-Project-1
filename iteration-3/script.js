const input = document.getElementById("searchInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});
