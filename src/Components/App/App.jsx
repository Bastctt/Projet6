import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import '../../Styles/global-style.css';

function App() {
    return (
        <HashRouter>
            <Header/>
            <Footer/>
            
            
            
        </HashRouter>
        
    )
}

export default App