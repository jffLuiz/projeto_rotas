import React from 'react'

import './Articular.css'
import Inicio from '../Inicio/Inicio.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import ArticularHeader from "./ArticularHeader"
import { Route, Switch } from 'react-router'

export default function articular() {
    return (
        <div>
            <ArticularHeader />

            <Titulo texto="Articular" />

            <div className="articular">
                
            </div>

        </div>

    )
}

