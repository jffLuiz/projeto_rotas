import React from 'react'

import './Superiores.css'
import Titulo from '../Titulo/Titulo'
import SuperioresHeader from './SuperioresHeader'
import { Route, Switch } from 'react-router'

export default function Superiores() {
    return (
        <div>
            <SuperioresHeader />

            <Titulo texto="Superiores" />

            <div className="superiores">
                
            </div>

        </div>

    )
}

