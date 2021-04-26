import React from 'react';
import './NavBar.css';
import logo from '../../img/logo_sisclo-02-02.png';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom'


export default function NavBar(){

    return (
        <div className="Nav">
          <header className="Nav-header">
            <Link to={`/`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <img className="Logo" src={logo}/>
            </Link>
              <ul>
                <Link to ={`/itemlist/roll`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <li>Rolls</li>
                </Link>
                <Link to ={`/itemlist/tabla`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <li>Tablas</li>
                </Link>  
                  <li>Contacto</li>
              </ul>
            <CartWidget />  
          </header>
        </div>
      );
}

