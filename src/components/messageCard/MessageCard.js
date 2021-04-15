import React from 'react';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import './MessageCard.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function MessageCard(props){



    return (
        <div className="cardM">
        <p>{props.title}</p>
        </div>
      );
}