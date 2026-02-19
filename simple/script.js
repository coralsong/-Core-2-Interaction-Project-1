let index = 0;

const messages = [
  "The line is made up of an infinite number of points;",
  "the plane is made up of an infinite number of lines;",
  "Mine, however, is true."
];

const textEl = document.getElementById("type");
const inputEl = document.getElementById("searchInput");

// type one message
function showMessage(text) {
  textEl.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    textEl.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(interval);
    }
  }, 60);
}

// show first message
showMessage(messages[index]);

// move forward on Enter
inputEl.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  index++;
  inputEl.value = "";

  if (index < messages.length) {
    showMessage(messages[index]);
  } else {
    textEl.textContent = "Done.";
    inputEl.disabled = true;
  }
});
