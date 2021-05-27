import React from 'react';
import './NavBar.css';
import logo from '../../img/naon-03.png';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom'


export default function NavBar(){



    return (
        <div className="Nav">
          <header className="Nav-header">
            <Link to={`/`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <img className="Logo" src={logo} alt="logo naon"/>
            </Link>
              <ul>
                <Link to ={`/itemlist/roll`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <li>Rolls</li>
                </Link>
                <Link to ={`/itemlist/tabla`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <li>Tablas</li>
                </Link>  
                <Link to ={`/credits`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <li>Créditos</li>
                </Link>
              </ul>
            <CartWidget/>  
          </header>
        </div>
      );
}

