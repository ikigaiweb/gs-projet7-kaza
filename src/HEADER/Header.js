import React from "react";                   // j'importe Réact de Réact
import HLOGO from "./Header-LOGO.png";       // j'importe le Logo du Header
import { NavLink } from "react-router-dom";  // j'importe le Navlink (permettant de creer des lien dans le navigateur) du réact-router
import "./Header.css";

export default function Header() {
    return (
        <div>
            <header className="header">
                <img src={HLOGO} alt="Logo header" className="logo" />

                <nav>
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </nav>
            </header>
        </div>
    );
}
