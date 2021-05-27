import React from 'react'
import { useHistory } from 'react-router'
import whiteLogo from '../../img/logoWhite-04.png'
import CartWidget from '../cartWidget/CartWidget'
import './Home.css'


export default function Home() {

    let history = useHistory()

    function toRolls(){
        history.push
        ('/itemlist/roll')
    }

    function toTablas(){
        history.push
        ('/itemlist/tabla')
    }

    function toCredits(){
        history.push
        ('/credits')
    }

    return (
        <div className='homeContainer'>
            <div className='homePageBg'/>
            <div className="homeNav" />
            <div className='homeHeader'>
                <p onClick={toRolls}>Rolls</p>
                <p onClick={toTablas}>Tablas</p>
                <p onClick={toCredits}>Créditos</p> 
            </div>
            <img className='naonWhite' src={whiteLogo}/>
            </div>
        )
}
