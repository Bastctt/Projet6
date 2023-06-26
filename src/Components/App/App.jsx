import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hébergements from '../../Pages/Hébergement/Hébergements'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Error from '../../Pages/Error/Error'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import '../../Styles/global-style.css'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Hébergements/:id" element={<Hébergements />} errorElement={<Error />} />
            <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App