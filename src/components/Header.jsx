import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>🎬 Miyka cinema</h1>
    <nav>
      <Link to="/">Фільми</Link>
      <Link to="/tickets">Квитки</Link>
      <Link to="/account">Акаунт</Link>
    </nav>
  </header>
);

export default Header;
