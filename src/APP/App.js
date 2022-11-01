import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home";
import About from "../ABOUT/About";
import NotFound from "../404/NotFound";
import Location from "../LOCATION/Location";
import Header from "../HEADER/Header.js";
import Footer from "../FOOTER/Footer.js";
import ErrorBoundary from "./ErrorBoundary"

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/logement/:id" element={<Location />}   errorElement={<ErrorBoundary />} />
                
                
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;



/* ICI on retrouve la creation de toutes mes routes (lien amenant à d'autres pages) 
 <Route element={NotFound} /> autre version page 404
  <Route path="/logement/:id" element={true ? <Location /> : <Link replace to={<NotFound />} /> } />
  <Route path="/logement/:id" element={true ? <Location /> :<Route replace to={"/*"} /> } />

<Route path="/logement/:id" element={<Location />} 
                       loader={async ({ params }) => {
                       const res = await fetch(`/logement/${params.id}`);
                       if (res.status === 404) {
                       throw new Response("Not Found", { status: 404 });
    } }} />

https://reactrouter.com/en/main/route/error-element

*/

