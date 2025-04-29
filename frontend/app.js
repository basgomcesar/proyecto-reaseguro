import { ContractService } from "../backend/contracts.js";

const listEl = document.getElementById("contract-list");
const nameInput = document.getElementById("contract-name");
const amountInput = document.getElementById("premium-amount");
const addBtn = document.getElementById("add-contract");

const service = new ContractService();

function renderContracts() {
  listEl.innerHTML = "";
  service.getContracts().forEach((c) => {
    const li = document.createElement("li");
    const nameEl = document.createElement("h3");
    nameEl.textContent = c.name;
    const premiumEl = document.createElement("span");
    premiumEl.textContent = `$${c.premium}`;
    li.appendChild(nameEl);
    li.appendChild(premiumEl);
    listEl.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const premium = parseFloat(amountInput.value);
  if (name && premium) {
    service.addContract(name, premium);
    renderContracts();
    nameInput.value = "";
    amountInput.value = "";
  }
});

renderContracts();
