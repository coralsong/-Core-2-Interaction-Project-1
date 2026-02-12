// allows javascript to run after the html page has loaded
document.addEventListener("DOMContentLoaded", () => {

  // text from the book of sand
  const messages = [
    "The line is made up of an infinite number of points;",
    "the plane is made up of an infinite number of lines;",
    "the hypervolume of an infinite number of volumes.... ",
    "No, unquestionably this is not—more geometrico—the best way of beginning my story.",
    "To claim that it is true is nowadays the convention of every made-up story.",
    "Mine, however, is true.",
    "I live alone in a fourth-floor apartment on Belgrano Street, in Buenos Aires.",
    "Late one evening, a few months back, I heard a knock at my door.",
    "I opened it and a stranger stood there."
    "He was a tall man, with nondescript features—or perhaps it was my myopia that made them seem that way."
    "Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him."
    "I saw at once that he was a foreigner."
    "At first, he struck me as old;"
    "only later did I realize that I had been misled by his thin blond hair, which was, in a Scandinavian sort of way, almost white."
    "During the course of our conversation, which was not to last an hour, I found out that he came from the Orkneys."
    "I invited him in, pointing to a chair."
    "He paused awhile before speaking."
    "A kind of gloom emanated from him—as it does now from me."
    "“I sell Bibles,” he said."
    "Somewhat pedantically, I replied, “In this house are several English Bibles, including the first—John Wiclif’s."
    "I also have Cipriano de Valera’s, Luther’s—which, from a literary viewpoint, is the worst—and a Latin copy of the Vulgate."
    "As you see, it’s not exactly Bibles I stand in need of.”"
    "After a few moments of silence, he said, “I don’t only sell Bibles."
    "I can show you a holy book I came across on the outskirts of Bikaner."
    "It may interest you.”"
    "He opened the suitcase and lay the book on a table."
    "Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him."
    "Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him."
    "Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him."
    "Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him."
  ];

  // messageIndex tracks which message user is on. 0=first message, 1=second message, etc.
  let messageIndex = 0;
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

      if (messageIndex < messages.length) {
        typeMessage(messages[messageIndex]);
      } else {
        typeEl.textContent = "Done.";
        inputEl.disabled = true;
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
});