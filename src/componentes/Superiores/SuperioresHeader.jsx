import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/muscular"> Menu </Link> </li>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/muscular"> 3.4.1 BICIPIS </Link></li>
                    <li> <Link to="/muscular"> 3.4.2 TRICEPIS </Link></li>
                    <li> <Link to="/cutaneos"> 3.4.3 CUTANEOS </Link></li>
                    <li> <Link to="/muscular"> 3.4.4 PROFUNDOS </Link></li>
                </ul>
            </nav>
        </div>
    )
}

