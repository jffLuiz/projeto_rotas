import React from 'react'

import './Cardiovascular.css'
import Inicio from '../Inicio/Inicio.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import CardiovascularHeader from "./CardiovascularHeader"
import { Route, Switch } from 'react-router'

export default function cardiovascular() {
    return (
        <div>
            <CardiovascularHeader />

            <Titulo texto="Cardiovascular" />

            <div className="cardiovascular">
                
            </div>

        </div>

    )
}

