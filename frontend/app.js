import { renderContracts } from "./ui/renderContracts.js";
import { createContract } from "./services/contractService.js";

// Module: Form Manager
const FormManager = (() => {
  const getFormElements = () => ({
    listEl: document.getElementById("contract-list"),
    nameInput: document.getElementById("contract-name"),
    amountInput: document.getElementById("premium-amount"),
    addBtn: document.getElementById("add-contract"),
    startDateInput: document.getElementById("start-date"),
    endDateInput: document.getElementById("end-date"),
    contractForm: document.getElementById("contract-form")
  });

  const clearForm = (elements) => {
    elements.nameInput.value = "";
    elements.amountInput.value = "";
    elements.startDateInput.value = "";
    elements.endDateInput.value = "";
  };

  return {
    getFormElements,
    clearForm
  };
})();

// Module: Validation
const Validation = (() => {
  const validateInputs = (name, premium) => {
    if (!name || isNaN(premium)) {
      alert("Por favor, introduce datos válidos.");
      return false;
    }
    return true;
  };

  const validateDates = (startDate, endDate) => {
    if (startDate >= endDate) {
      alert("La fecha de inicio debe ser anterior a la fecha de fin.");
      return false;
    }
    return true;
  };

  return {
    validateInputs,
    validateDates
  };
})();

// Module: Contract Handler
const ContractHandler = (() => {
  const handleSuccess = async (elements) => {
    alert("Contrato creado con éxito.");
    FormManager.clearForm(elements);
    await renderContracts(elements.listEl);
  };

  const handleError = (error) => {
    console.error("Error creating contract:", error);
    alert("Error al crear el contrato. Por favor, inténtalo de nuevo.");
  };

  const submitContract = async (elements) => {
    const { nameInput, amountInput, startDateInput, endDateInput } = elements;
    
    const name = nameInput.value.trim();
    const premium = parseFloat(amountInput.value);
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (!Validation.validateInputs(name, premium)) return;
    if (!Validation.validateDates(startDate, endDate)) return;

    try {
      await createContract({ name, premiumAmount: premium, startDate, endDate });
      await handleSuccess(elements);
    } catch (error) {
      handleError(error);
    }
  };

  return {
    submitContract
  };
})();

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  const elements = FormManager.getFormElements();

  // Configurar manejador de eventos
  const eventTarget = elements.contractForm || elements.addBtn;
  const eventType = elements.contractForm ? "submit" : "click";

  eventTarget.addEventListener(eventType, (e) => {
    if (elements.contractForm) e.preventDefault();
    ContractHandler.submitContract(elements);
  });

  // Renderizar contratos iniciales
  renderContracts(elements.listEl);
});