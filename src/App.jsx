import Navbar from "./Navbar";
import Footer, { F } from "./Footer";
import logo from "./assets/react.svg"

const App = () => {
  return (
    <div>
      <Navbar /><br /><br />
      <img src={logo} alt="logo" />
      <h1>Hello World</h1>
      <Footer />
      <br />
      <F />
    </div>
  );
};

export default App;
