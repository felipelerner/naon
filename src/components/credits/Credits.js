import React from 'react'
import './Credits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';




export default function Credits() {



    return (
    <div className="credit">
        <div className="creditContainer">
            <h3>Créditos</h3>
            <h5>Sitio web diseñado y desarrollado por <em> Felipe Lerner</em></h5>
            <ul>
                <li><a href="https://github.com/felipelerner" target="_blank" style={{ color: 'inherit', textDecoration: 'inherit'}}><FontAwesomeIcon icon={faGithub}/></a></li>
                <li><a href="https://www.linkedin.com/in/felipelerner/" target="_blank" style={{ color: 'inherit', textDecoration: 'inherit'}}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="mailto:felilerner@gmail.com" target="_blank" style={{ color: 'inherit', textDecoration: 'inherit'}}><FontAwesomeIcon icon={faEnvelope}/></a></li>
            </ul>
        </div>
    </div>
    )
}
