import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ isLoggedIn, children, onOpen }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onOpen={onOpen}/>
          {children}
      <Footer />
    </>
  );
}

export default Layout;