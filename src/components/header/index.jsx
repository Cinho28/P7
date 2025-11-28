
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.scss';

function Header() {
    return (
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
                <img src={logo} alt="Logo Kasa" className='header__logo--content'/>
            </div>
<nav className="header__nav">
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "header__nav--link active" : "header__nav--link"}
  >
    Accueil
  </NavLink>
  
  <NavLink 
    to="/about" 
    className={({ isActive }) => isActive ? "header__nav--link active" : "header__nav--link"}
  >
    A Propos
  </NavLink>
</nav>
          </div>
        </header>
    );
}
export default Header;
