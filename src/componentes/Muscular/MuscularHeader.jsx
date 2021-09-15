import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/muscular"> 3.1 CABEÇA </Link></li>
                    <li> <Link to="/muscular"> 3.2 PESCOÇO </Link></li>
                    <li> <Link to="/muscular"> 3.3 TRONCO </Link></li>
                    <li> <Link to="/superiores"> 3.4 SUPERIORES </Link></li>
                    <li> <Link to="/muscular"> 3.5 INFERIORES </Link></li>
                </ul>
            </nav>
        </div>
    )
}

