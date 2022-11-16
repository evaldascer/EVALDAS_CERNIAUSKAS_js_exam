/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const els = {
  btn: document.getElementById("btn__element"),
  state: document.getElementById("btn__state"),
};

els.btn.addEventListener("click", counterAdd);

function counterAdd() {
  els.state.textContent = +els.state.textContent + 1;
}
