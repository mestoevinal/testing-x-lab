import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppCss from './App.module.scss'
import Address from "./pages/Address/Address";
import News from "./pages/News/News";
import AppRouter from "./AppRouter/AppRouter";

function App() {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className={AppCss.container}>
                    <Navbar/>
                    <AppRouter/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
