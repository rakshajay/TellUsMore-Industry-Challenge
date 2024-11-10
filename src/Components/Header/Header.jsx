import "./Header.scss";
import logoImg from "../../../src/assets/TELUS_Logo.svg";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header className="header">
        <div className="header__container">
            <div className="header__wrapper-logo">
            <NavLink to="/"><img src={logoImg} alt="Logo" /></NavLink>
            </div>
        </div>
        </header>
    );
}

export default Header;
