import React from 'react'

import './Esqueletico.css'
import Inicio from '../Inicio/Inicio.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import EsqueleticoHeader from "./EsqueleticoHeader"
import { Route, Switch } from 'react-router'

export default function Esqueletico() {
    return (
        <div>
            <EsqueleticoHeader />

            <Titulo texto="Esqueletico" />

            <div className="esqueletico">
                
            </div>

        </div>

    )
}

