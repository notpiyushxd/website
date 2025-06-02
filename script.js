const flavors = [
  "Classic Milk Tea 🧋",
  "Taro Boba 💜",
  "Matcha Latte 🍵",
  "Brown Sugar Milk 🍯",
  "Honeydew Boba 🍈",
  "Strawberry Milk Tea 🍓"
];

const moreFlavors = [
  "Mango Boba 🥭",
  "Coffee Boba ☕",
  "Coconut Milk Tea 🥥"
];
const allFlavors = flavors.concat(moreFlavors);

function randomFlavor() {
  const random = allFlavors[Math.floor(Math.random() * allFlavors.length)];
  document.getElementById("flavorDisplay").innerText = `Try: ${random}`;
}

// Fun facts for Home page
const funFacts = [
  "Boba tea originated in Taiwan in the 1980s!",
  "Tapioca pearls are made from cassava root.",
  "There are fruit teas, milk teas, and even cheese teas!",
  "Boba is also called 'bubble tea' or 'pearl milk tea'.",
  "You can get boba hot or cold!"
];
function showRandomFact() {
  const factDiv = document.getElementById("factDisplay");
  if (factDiv) {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    factDiv.innerText = fact;
  }
}
// Show a fact on load
window.addEventListener("DOMContentLoaded", showRandomFact);

// Quote rotator for About page
const quotes = [
  "\"Boba is happiness in a cup!\"",
  "\"Life is sweet with a little boba.\"",
  "\"Keep calm and drink bubble tea.\"",
  "\"Boba: the best way to treat yourself!\"",
  "\"Sip, smile, repeat.\""
];
let quoteIdx = 0;
function rotateQuote() {
  const quoteDiv = document.getElementById("quoteDisplay");
  if (quoteDiv) {
    quoteDiv.innerText = quotes[quoteIdx];
    quoteIdx = (quoteIdx + 1) % quotes.length;
  }
}
window.addEventListener("DOMContentLoaded", () => {
  rotateQuote();
  setInterval(rotateQuote, 3500);
});
