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
                    <li> <Link to="/cutaneos"> 3.4.3.1 MEDIAL </Link></li>
                    <li> <Link to="/cutaneos"> 3.4.3.2 LATERAL </Link></li>
                    <li> <Link to="/cutaneos"> 3.4.3.3 TENDOES </Link></li>
                    <li> <Link to="/cutaneos"> 3.4.3.4 EXTENSOR </Link></li>
                    <li> <Link to="/cutaneos"> 3.4.3.5 ROTADORES </Link></li>
                </ul>
            </nav>
        </div>
    )
}

