import { Routes, Route } from "react-router-dom";
import Hebergements from '../../Pages/Hebergements/Hebergements'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Error from '../../Pages/Error/Error'

function RoutesConfig() {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hebergement/:id" element={<Hebergements />} errorElement={<Error />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    );
}

export default RoutesConfig;