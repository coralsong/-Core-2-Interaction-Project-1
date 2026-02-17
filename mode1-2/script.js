let messageIndex = 0;

const savedIndex = localStorage.getItem("bookOfSandIndex");
if (savedIndex !== null) {
  messageIndex = parseInt(savedIndex, 10);
}

// allows javascript to run after the html page has loaded
document.addEventListener("DOMContentLoaded", () => {

  // text from the book of sand
  const messages = [
    "I sell Bibles",
    "I don’t only sell Bibles. I can show you a holy book I came across on the outskirts of Bikaner. It may interest you. an infinite number of lines;",
    "I don’t know. I’ve never found out.",
    "No, unquestionably this is not—more geometrico—the best way of beginning my story.",
    "To claim that it is true is nowadays the convention of every made-up story.",
    "Mine, however, is true."
  ];

  let charIndex = 0;
  // enter button is prohibited while message is being typed out. true=message is being typed, false=message is done typing.
  let isTyping = false;

  // allows javascript to get text from html
  const typeEl = document.getElementById("type");
  const inputEl = document.getElementById("searchInput");

  // typing animation
  function typeMessage(text) {
    // locks input
    isTyping = true;
    // clears previous text
    typeEl.textContent = "";
    charIndex = 0;

    // types one letter at a time with animation
    function typeChar() {
      if (charIndex < text.length) {
        typeEl.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeChar, 60);
      } else {
        isTyping = false;
      }
    }

    typeChar();
  }

  // ignores capitalization, punctuation, extra space when user typed.
  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[—–]/g, "-")
      .replace(/[^\w\s]/g, "")
      .trim();
  }

  typeMessage(messages[messageIndex]);

  // listens to every key pressed, but only react to "enter". 
  inputEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    if (isTyping) return;

    // reads what user typed.
    const userText = inputEl.value;

if (normalize(userText) === normalize(messages[messageIndex])) {
  messageIndex++;
  inputEl.value = "";
  

  // save progress
  localStorage.setItem("bookOfSandIndex", messageIndex);

  if (messageIndex < messages.length) {
    typeMessage(messages[messageIndex]);
  } else {
    typeEl.textContent = "Done.";
    inputEl.disabled = true;
    localStorage.removeItem("bookOfSandIndex"); // optional
  }

      // else=if user typed wrong.
    } else {
      // stays on the same message of error.
      const currentMessage = messages[messageIndex];

      typeEl.textContent = "Try again.";

      setTimeout(() => {
        typeMessage(currentMessage);
      }, 1200);
    }
  });

  document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("bookOfSandIndex");
  location.reload();
});

});