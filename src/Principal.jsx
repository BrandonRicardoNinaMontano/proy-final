// Principal.jsx
import { Route, Routes, Link } from "react-router-dom";
import Actores from "./Actores";
import Peliculas from "./Peliculas";
import './estilos.css';

function Inicio(proms) {
  return (
    <div className="contenido">
      <h2>Actores del Momento</h2>
      <Actores />
    </div>
  );
}

function Principal(proms) {
  return (
    <div className="layout">
      {/* Barra de Título */}
      <header className="barra-titulo">
        <h1>"Cinemateca Boliviana"</h1>
        <h3>Desarrollado por Brandon Ricardo Nina Montaño</h3>
      </header>

      {/* Barra de Navegación */}
      <nav className="menu">
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/pag2">PELICULAS</Link></li>
        </ul>
      </nav>

      {/* Sección de contenido */}
      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/pag2" element={<Peliculas />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Cinemateca Boliviana - Todos los derechos reservados.</p>
        <p>Para Brandon Ricardo Nina Monataño</p>
      </footer>
    </div>
  );
}

export default Principal;
