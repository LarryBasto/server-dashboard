import { useEffect, useState } from "react";
import { getSystemInfo } from "../services/api";

interface SystemInfo {
  os: string;
  os_version: string;
  cpu_percent: number;
  ram_percent: number;
  disk_percent: number;
  uptime_seconds: number;
}

export default function ServerStats() {
  const [info, setInfo] = useState<SystemInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSystemInfo()
      .then(setInfo)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!info) return <div>Cargando métricas...</div>;

  const hours = Math.floor(info.uptime_seconds / 3600);
  const minutes = Math.floor((info.uptime_seconds % 3600) / 60);

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Métricas del Servidor</h2>

      <p>Sistema: {info.os} {info.os_version}</p>

      <div className="mt-2">
        <p>CPU: {info.cpu_percent}%</p>
        <div className="w-full bg-gray-300 h-4 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: `${info.cpu_percent}%` }}></div>
        </div>
      </div>

      <div className="mt-2">
        <p>RAM: {info.ram_percent}%</p>
        <div className="w-full bg-gray-300 h-4 rounded">
          <div className="bg-green-500 h-4 rounded" style={{ width: `${info.ram_percent}%` }}></div>
        </div>
      </div>

      <div className="mt-2">
        <p>Disco: {info.disk_percent}%</p>
        <div className="w-full bg-gray-300 h-4 rounded">
          <div className="bg-yellow-500 h-4 rounded" style={{ width: `${info.disk_percent}%` }}></div>
        </div>
      </div>

      <p className="mt-2">Uptime: {hours}h {minutes}m</p>
    </div>
  );
}
