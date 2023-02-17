import React, {Component} from 'react';
import './App.css'
import {CustomNavbar} from "./component/naveBar";
import {HomePage} from "./pages/homePage";
import {ServicePage} from "./pages/servicePage";
import {WhyKST} from "./pages/whyKst";
import {Benefits} from "./pages/benefits";
import {HowItsWorks} from "./pages/howItsWorks";
import {Footer} from "./pages/footer";

function App() {
    return (
        <>
            <CustomNavbar/>
            <HomePage/>
            <ServicePage/>
            <WhyKST/>
            <Benefits/>
            <HowItsWorks/>
            <Footer/>
        </>
    );
}

export default App;