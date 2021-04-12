import React from 'react';
import './NavBar.css';
import logo from '../../img/logo_sisclo-02-02.png';
import CartWidget from '../cartWidget/CartWidget';


export default function NavBar(){

    return (
        <div className="Nav">
          <header className="Nav-header">
            <img className="Logo" src={logo}/>
              <ul>
                  <li>Remeras</li>
                  <li>Pilusos</li>
                  <li>Medias</li>
              </ul>
            <CartWidget />  
          </header>
        </div>
      );
}
