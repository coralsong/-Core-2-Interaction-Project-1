let messageIndex = 0;

const savedIndex = localStorage.getItem("bookOfSandIndex");
if (savedIndex !== null) {
  messageIndex = parseInt(savedIndex, 10);
}

// allows javascript to run after the html page has loaded
document.addEventListener("DOMContentLoaded", () => {

  // text from the book of sand
  const personA = [
    "* Late one evening, a few months back, I heard a knock at my door. *",
    "* I opened it and a stranger stood there. *",
    "* Dressed in gray and carrying a gray suitcase in his hand, he had an unassuming look about him. *",
    "* I invited him in, pointing to a chair. *",
    "* He paused awhile before speaking. *",
    "I sell Bibles.",
    "I don’t only sell Bibles. I can show you a holy book I came across on the outskirts of Bikaner. It may interest you.",
    "* He opened the suitcase and lay the book on a table. *",
    "* Examining it, I was surprised by its unusual weight. On the spine were the words “Holy Writ” and, below them, “Bombay.” *",
    "I don’t know. I’ve never found out.",
    "* I noticed that one left-hand page bore the number (let us say) 40,514 and the facing right-hand page 999. *",
    "Look at the illustration closely. You’ll never see it again.",
    "No. I acquired the book in a town out on the plain in exchange for a handful of rupees and a Bible. Its owner told me his book was called the Book of Sand, because neither the book nor the sand has any beginning or end.",
    "* The stranger asked me to find the first page. *",
    "* I opened the book. Every time I tried, a number of pages came between the cover and my thumb. It was as if they kept growing from the book. *",
    "Now find the last page.",
    "* Again I failed. *",
    "It can’t be, but it is. None is the first page, none the last.",
    "I don’t know why they’re numbered in this arbitrary way. Perhaps to suggest that the terms of an infinite series admit any number.",
    "If space is infinite, we may be at any point in space. If time is infinite, we may be at any point in time.",
    "Yes, I’m a Presbyterian. I am reasonably sure of not having cheated the native when I gave him the Word of God in exchange for his devilish book.",
    "No. I’m offering it to you",
    "",
    "",
    "A black-letter Wiclif!",
    "It’s a deal.",
    "* I thought of keeping the Book of Sand in the space left on the shelf by the Wiclif, but in the end I decided to hide it behind the volumes of a broken set of “The Thousand and One Nights.” *",
    "* I went to bed and did not sleep. *",
    "* At three or four in the morning, I turned on the light. I got down the impossible book and leafed through its pages. *",
    "* I showed no one my treasure. *",
    "* To the luck of owning it was added the fear of having it stolen, and then the misgiving that it might not truly be infinite. *",
    "* I had only a few friends left; I now stopped seeing even them. *",
    "* A prisoner of the book, I almost never went out anymore. *",
    "* At night, in the meagre intervals my insomnia granted, I dreamed of the book. *",
    "* Summer came and went, and I realized that the book was monstrous. *",
    "* What good did it do me to think that I, who looked upon the volume with my eyes, who held it in my hands, was any less monstrous? *",
    "* Somewhere I recalled reading that the best place to hide a leaf is in a forest. *",
    "* One day I went there and, slipping past a member of the staff and trying not to notice at what height or distance from the door, *",
    "* I lost the Book of Sand on one of the basement’s musty shelves. *",
  ];

  const personB = [
    " ",
    " ",
    " ",
    " ",
    " ",
    "In this house are several English Bibles, including the first—John Wiclif’s. I also have Cipriano de Valera’s, Luther’s—which, from a literary viewpoint, is the worst—and a Latin copy of the Vulgate. As you see, it’s not exactly Bibles I stand in need of.",
    "",
    "",
    "Nineteenth-century, probably.",
    "* I opened the book at random. The script was strange to me. *",
    "",
    "It seems to be a version of Scriptures in some Indian language, is it not?",
    "",
    "",
    "",
    "",
    "This can't be.",
    "",
    "",
    "You are religious, no doubt?",
    "Do you intend to offer this curiosity to the British Museum?",
    "* I answered, in all truthfulness, that such a sum was out of my reach, and I began thinking. After a minute or two, I came up with a scheme. *",
    "I propose a swap",
    "I’ll offer you the amount of my pension check, which I’ve just collected, and my black-letter Wiclif Bible. I inherited it from my ancestors.",
    "* He turned the leaves and studied the title page with all the fervor of a true bibliophile. *",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];

  let charIndex = 0;
  // enter button is prohibited while message is being typed out. true=message is being typed, false=message is done typing.
  let isTyping = false;

  // allows javascript to get text from html
const typeA = document.getElementById("personA");
const typeB = document.getElementById("personB");
  const inputEl = document.getElementById("searchInput");

  // typing animation
function typeMessage(text, element, callback) {
    // locks input
    isTyping = true;
    // clears previous text
    element.textContent = "";
    charIndex = 0;

    // types one letter at a time with animation
    function typeChar() {
if (charIndex < text.length) {
  element.textContent += text[charIndex];
  charIndex++;
      setTimeout(typeChar, 60);
    } else {
      isTyping = false;
      if (callback) callback();
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

typeMessage(personA[messageIndex], typeA, () => {
  setTimeout(() => {
    typeMessage(personB[messageIndex], typeB);
  }, 500);
});

  // listens to every key pressed, but only react to "enter". 
inputEl.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  if (isTyping) return;

  // input belongs to Person B, but we don't check it
  inputEl.value = "";

  messageIndex++;
  localStorage.setItem("bookOfSandIndex", messageIndex);

  if (messageIndex < personA.length) {
    typeMessage(personA[messageIndex], typeA, () => {
      setTimeout(() => {
        typeMessage(personB[messageIndex], typeB);
      }, 500);
    });
  } else {
    typeB.textContent = "Done.";
    inputEl.disabled = true;
    localStorage.removeItem("bookOfSandIndex");
  }
});


  document.getElementById("reset").addEventListener("click", () => {
  localStorage.removeItem("bookOfSandIndex");
  location.reload();
});

});