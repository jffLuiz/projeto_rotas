import React from 'react'

import './Cutaneos.css'
import Titulo from '../Titulo/Titulo'
import CutaneosHeader from './CutaneosHeader'
import { Route, Switch } from 'react-router'

export default function Superiores() {
    return (
        <div>
            <CutaneosHeader />

            <Titulo texto="Cutaneos" />

            <div className="cutaneos">
                
            </div>

        </div>

    )
}

