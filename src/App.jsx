import { Outlet, useLocation, Link } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png";
import "./App.scss";

const App = () => {
  const location = useLocation(); 
  

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
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default App;