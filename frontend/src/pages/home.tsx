import ServerStats from "../components/ServerStats";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard del Servidor</h1>
      <ServerStats />
    </div>
  );
}
