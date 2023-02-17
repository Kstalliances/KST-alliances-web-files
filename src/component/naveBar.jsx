import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/customNavbar.css';
import logo from '../images/logo.jpg';

export const CustomNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'white'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="130px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#whyKst">Why Us?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#benefits">Benifits</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
