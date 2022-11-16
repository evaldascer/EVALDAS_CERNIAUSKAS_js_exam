/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

function getData() {
  return fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((dataInJS) => dataInJS);
}

async function init() {
  const db = await getData();
  db.forEach((obj) => {
    outputEl.append(createCard(obj));
  });
}

function createCard(obj) {
  cardEl = document.createElement("div");
  cardEl.className = "card";
  brandEl = document.createElement("h3");
  brandEl.textContent = obj.brand;
  cardEl.append(brandEl, createList(obj.models));
  return cardEl;
}

function createList(arr) {
  ulEl = document.createElement("ul");
  arr.forEach((el) => {
    liEl = document.createElement("li");
    liEl.textContent = el;
    ulEl.append(liEl);
  });
  return ulEl;
}
init();
