import { useEffect, useState } from "react";
import { getSystemInfo } from "./services/api";
import SystemCard from "./components/SystemCard";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getSystemInfo().then(setData).catch(console.error);
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "24px" }}>
      <h1>Server Dashboard</h1>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <SystemCard label="CPU %" value={data.cpu_percent} />
        <SystemCard label="RAM %" value={data.ram_percent} />
        <SystemCard label="Disco %" value={data.disk_percent} />
        <SystemCard label="Uptime (s)" value={data.uptime_seconds} />
      </div>
    </div>
  );
}

export default App;
