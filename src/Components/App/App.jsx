import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Error from '../../Pages/Error/Error'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import '../../Styles/global-style.css'

function App() {
    return (
        <HashRouter>
            <Header/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            
            </Routes>
            
            <Footer/>
        </HashRouter>
        
    )
}

export default App