export async function fetchContracts() {
    const response = await fetch("http://localhost:3000/contracts");
    if (!response.ok) {
      throw new Error("Failed to fetch contracts");
    }
    return response.json();
  }
  
  export async function createContract(contract) {
    const response = await fetch("http://localhost:3000/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create contract");
    }
  
    return response.json();
  }
  