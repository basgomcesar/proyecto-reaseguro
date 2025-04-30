export async function fetchContracts() {
  const response = await fetch("http://localhost:3000/contracts");
  if (!response.ok) {
    throw new Error("Failed to fetch contracts");
  }
  return response.json();
}

export async function createContract(contract) {
  try {
    const response = await fetch("http://localhost:3000/contracts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contract.name,
        premiumAmount: contract.premiumAmount,
        startDate: contract.startDate.toISOString(),
        endDate: contract.endDate.toISOString(),
      }),
    });

    // Verifica si la respuesta es JSON válido
    const text = await response.text();
    let data;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (e) {
      throw new Error(`La respuesta no es JSON válido: ${text}`);
    }

    if (!response.ok) {
      throw new Error(data?.message || `Error HTTP ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("Error detallado en createContract:", error);
    throw error; // Re-lanza para manejar en handleAddContract
  }
}