import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/articular"> 1.1  </Link></li>
                    <li> <Link to="/articular"> 1.2  </Link></li>
                    <li> <Link to="/articular"> 1.3  </Link></li>
                    <li> <Link to="/articular"> 1.4  </Link></li>
                    <li> <Link to="/articular"> 1.5  </Link></li>
                </ul>
            </nav>
        </div>
    )
}

