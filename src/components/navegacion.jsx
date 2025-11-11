// import link
import { Link } from 'react-router-dom'

// import react useState y useEffect
import { useState, useEffect } from 'react'

// import proyecto
import Test from "../pages/test.jsx";
import Pokemon from '../pages/Pokemon.jsx';

function Navegacion() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">PixelPlay</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/juegos" className="nav-link text-white">Juegos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link text-white">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/test" className="nav-link text-white" onClick={() => {setCount(0)}}>Test</Link>
                        </li>
                         <li className="nav-item">
                            <Link to="/pokemon" className="nav-link text-white">Pokemon</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/juegossencillo" className="nav-link text-white">Juegos Sencillo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navegacion