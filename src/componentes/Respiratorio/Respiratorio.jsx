import React from 'react'

import './Respiratorio.css'
import Inicio from '../Inicio/Inicio.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import RespiratorioHeader from "./RespiratorioHeader"
import { Route, Switch } from 'react-router'

export default function respiratorio() {
    return (
        <div>
            <RespiratorioHeader />

            <Titulo texto="Respiratorio" />

            <div className="respiratorio">
                
            </div>

        </div>

    )
}

