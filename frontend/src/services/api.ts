const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getSystemInfo() {
  if (!API_URL || !API_KEY) {
    throw new Error("Faltan variables de entorno: VITE_API_URL o VITE_API_KEY");
  }

  const response = await fetch(`${API_URL}/system`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  if (!response.ok) throw new Error("Error al obtener datos del sistema");

  return response.json();
}
