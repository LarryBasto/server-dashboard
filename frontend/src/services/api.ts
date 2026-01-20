const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getSystemInfo() {
  const res = await fetch(`${API_URL}/system`, {
    headers: { "x-api-key": API_KEY }
  });
  if (!res.ok) throw new Error("Error al obtener métricas");
  return res.json();
}
