/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const els = {
  btnEl: document.getElementById("btn"),
  outputEl: document.getElementById("output"),
  messageEl: document.getElementById("message"),
};

els.btnEl.addEventListener("click", renderUsers);

// ============================ FUNCTIONS   =============================

function getData() {
  return fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs)
    .catch((err) => console.warn("Problem in getting users", err));
}

async function renderUsers() {
  const users = await getData();
  users.forEach((userObj) => els.outputEl.append(createCard(userObj)));
  els.messageEl.style.display = "none";
}

function createCard(userObj) {
  const card = document.createElement("div");
  const photo = document.createElement("img");
  const login = document.createElement("p");
  photo.src = userObj.avatar_url;
  login.textContent = userObj.login;
  card.append(photo, login);
  return card;
}
