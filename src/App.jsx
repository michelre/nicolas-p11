import { Outlet } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png"; // Import du logo pour le footer
import DescriptionFooter from "./assets/DescriptionFooter.png"; // Import de l'image de description
import "./App.scss";

const App = () => {
  return (
    <>
      <header>
        <img src={LogoKasa} alt="Kasa Logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/a-propos">A Propos</a>
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
