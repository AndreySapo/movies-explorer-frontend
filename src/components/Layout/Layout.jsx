import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ isLoggedIn, children, onOpen, header, footer }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onOpen={onOpen} header={header}/>
          {children}
      <Footer footer={footer}/>
    </>
  );
}

export default Layout;