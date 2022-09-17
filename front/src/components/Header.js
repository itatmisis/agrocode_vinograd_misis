import "../styles/Header.css";
import {Link} from "react-router-dom"
export default function Header({ ...props }) {
  return (
    <header>
      <div className="logo"></div>
      <div className="links">
        <Link to="/about">
          О сервисе
        </Link>
        <Link to="/map">
          Карта
        </Link>
        <Link to="/smt">
          Что-то
        </Link>
      </div>
    </header>
  );
}
