import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./Home.css";

export default function Front() {
    return (
        <Container fluid>
            <header className="header">
                <div className="header__title">
                    <h1>Descubre. Elige. Compra.</h1>
                    <p><Link to="/registro">Regístrate</Link> o <Link to="/login">inicia sesión</Link> y descubre los anuncios más random de KeepCoding</p>
                </div>
            
            </header>
        </Container>
    );
}