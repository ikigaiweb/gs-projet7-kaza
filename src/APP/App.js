import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home";
import About from "../ABOUT/About";
import NotFound from "../404/NotFound";
import Location from "../LOCATION/Location";
import Header from "../HEADER/Header.js";
import Footer from "../FOOTER/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logement/:id" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* ICI on retrouve la creation de toutes mes routes (lien amenant à d'autres pages) */ 