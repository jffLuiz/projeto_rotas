import React from 'react'

import './Muscular.css'
import Inicio from '../Inicio/Inicio'
import Titulo from '../Titulo/Titulo.jsx'
import MuscularHeader from "./MuscularHeader"
import { Route, Switch } from 'react-router'

export default function Muscular() {
    return (
        <div>
            <MuscularHeader />

            <Titulo texto="Muscular" />

            <div className="muscular">
                
            </div>

        </div>

    )
}

