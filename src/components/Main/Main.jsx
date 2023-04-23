import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Layout from '../Layout/Layout';

// ! компонент страницы «О проекте»
function Main({isLoggedIn}) {
  // TODO перед деплоем переставить isLoggedIn!!!
  return (
    <Layout isLoggedIn={false}> 
      <main className="Main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </Layout>
  );
}

export default Main