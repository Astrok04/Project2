let summa = 0;
let summaEl = document.querySelector("#Summa");
let startBelopp = document.querySelector("#Startbelopp");
let månadsSparande = document.querySelector("#Månadssparande");
let sparTid = document.querySelector("#Spartid");

const kör = document.querySelector(".bakgrundRäkna");

kör.addEventListener("submit", räkna);

function räkna(evt) {
  evt.preventDefault();
  for (let i = 0; i < sparTid.value; i++) {
    summa += månadsSparande.value * 12 * 1.1 ** (i + 1);
  }
  summa += startBelopp.value * 1.1 * sparTid.value;
  summaEl.value = summa.toFixed(0);
  startBelopp.value = 0;
  månadsSparande.value = 0;
  sparTid.value = 0;
  summa = 0;
}
