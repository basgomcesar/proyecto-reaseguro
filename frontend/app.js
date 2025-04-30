import { renderContracts } from "./ui/renderContracts.js";
import { createContract } from "./services/contractService.js";

document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("contract-list");
  const nameInput = document.getElementById("contract-name");
  const amountInput = document.getElementById("premium-amount");
  const addBtn = document.getElementById("add-contract");

  async function handleAddContract() {
    const name = nameInput.value.trim();
    const premium = parseFloat(amountInput.value);

    if (!name || isNaN(premium)) {
      alert("Por favor, introduce datos válidos.");
      return;
    }

    try {
      await createContract({ name, premiumAmount: premium });
      await renderContracts(listEl);

      nameInput.value = "";
      amountInput.value = "";
    } catch (error) {
      console.error("Error creating contract:", error);
      alert("Error al crear el contrato. Por favor, inténtalo de nuevo.");
    }
  }

  addBtn.addEventListener("click", handleAddContract);

  renderContracts(listEl);
});
