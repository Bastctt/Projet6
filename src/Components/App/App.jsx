import React from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from '../RoutesConfig/RoutesConfig';
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import '../../Styles/global.scss'

function App() {
    return (
        <BrowserRouter>
            <Header/>
                <RoutesConfig />
            <Footer/>
        </BrowserRouter>
    )
}

export default App;