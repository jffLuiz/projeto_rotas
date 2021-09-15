import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> INICIO </Link> </li>
                    <li> <Link to="/esqueletico"> 1-ESQUELÉTICO </Link></li>
                    <li> <Link to="/articular"> 2-ARTICULAR </Link></li>
                    <li> <Link to="/muscular"> 3-MUSCULAR </Link></li>
                    <li> <Link to="/cardiovascular"> 4-CARDIOVASCULAR </Link></li>
                    <li> <Link to="/respiratorio"> 5-RESPIRATÓRIO </Link></li>
                </ul>
            </nav>
        </div>
    )
}

