import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Server Dashboard</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="hover:underline">Inicio</Link>
            <Link to="/projects" className="hover:underline">Proyectos</Link>
            <Link to="/about" className="hover:underline">Acerca</Link>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
