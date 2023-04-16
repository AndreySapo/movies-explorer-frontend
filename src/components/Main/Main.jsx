import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

// ! компонент страницы «О проекте»
function Main() {
  return (
    <div className="Main">

    <Promo/>

    <AboutProject/>

    <Techs/>

    <AboutMe/>

    <Portfolio/>

    </div>
    );
}

export default Main