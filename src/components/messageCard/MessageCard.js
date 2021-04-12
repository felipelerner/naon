import React from 'react';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import './MessageCard.css';


export default function MessageCard(props){



    return (
        <div className="card">
        <p>{props.title}</p>
        </div>
      );
}