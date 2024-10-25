import { Outlet, useLocation, Link } from "react-router-dom";
import LogoKasa from "./assets/LogoKasa.png";
import LogoKasaFooter from "./assets/LogoKasaFooter.png";
import "./App.scss";
import Banner from './components/Banner/Banner.jsx';
import BannerImageHome from './assets/Banner.jpg';
import BannerImageApropos from './assets/BannerApropos.jpg';

const App = () => {
  const location = useLocation(); 


  const isHomePage = location.pathname === '/';
  const bannerImage = isHomePage ? BannerImageHome : BannerImageApropos;
  const showText = isHomePage;

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

     
      <Banner key={location.pathname} image={bannerImage} showText={showText} />

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
