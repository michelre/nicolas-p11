import { Outlet } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png"; // Import du logo pour le footer
import DescriptionFooter from "./assets/DescriptionFooter.png"; // Import de l'image de description
import "./App.scss";
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <header>
      <Link to="/"> 
          <img src={LogoKasa} alt="Kasa Logo" />
        </Link>
        <nav>
          <ul>
            <li>
            <Link to="/">Accueil</Link>
            </li>
            <li>
            <Link to="/a-propos">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <img
          src={LogoKasaFooter}
          alt="Kasa Footer Logo"
          className="footer-logo"
        />
        <img
          src={DescriptionFooter}
          alt="Description Footer"
          className="footer-description"
        />
      </footer>
    </>
  );
};

export default App;
