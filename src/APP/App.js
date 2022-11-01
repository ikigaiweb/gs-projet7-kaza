import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home";
import About from "../ABOUT/About";
import NotFound from "../404/NotFound";
import Location from "../LOCATION/Location";
import Header from "../HEADER/Header.js";
import Footer from "../FOOTER/Footer.js";
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/logement/:id"
                    element={<Location />}
                    errorElement={<ErrorBoundary />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
