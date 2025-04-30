import { fetchContracts } from "../services/contractService.js";

export async function renderContracts(listEl) {
  listEl.innerHTML = "";

  try {
    const contracts = await fetchContracts();

    contracts.forEach((contract) => {
      const li = document.createElement("li");

      const nameEl = document.createElement("h3");
      nameEl.textContent = contract.name;

      const premiumEl = document.createElement("span");
      premiumEl.textContent = `$${contract.premiumAmount}`;

      li.appendChild(nameEl);
      li.appendChild(premiumEl);
      listEl.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching contracts:", error);
  }
}
