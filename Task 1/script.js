/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const els = {
  inputForm: document.forms[0],
  output: document.getElementById("output"),
};

els.inputForm.addEventListener("submit", calculate);

function calculate(event) {
  event.preventDefault();
  const inputKg = +els.inputForm.elements.search.value;
  els.inputForm.search.value = "";
  els.output.innerHTML = "";
  const lbBox = createBox("Pounds:", inputKg * 2.2046, "#5cb85c");
  const gBox = createBox("Grams:", inputKg / 0.001, "blue");
  const ozBox = createBox("Ounces:", inputKg * 35.274, "tomato");
  els.output.append(lbBox, gBox, ozBox);
}

function createBox(title, weight, color) {
  const card = document.createElement("div");
  const titleEl = document.createElement("h2");
  const weightEl = document.createElement("h3");
  titleEl.textContent = title;
  weightEl.textContent = parseFloat(weight.toFixed(2));
  card.append(titleEl, weightEl);
  card.style.background = color;
  return card;
}
