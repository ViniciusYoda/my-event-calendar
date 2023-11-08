import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Events</h1>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create-event">Criar Evento</Link></li>
          <li><Link to="/saved-events">Ver Eventos Salvos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
