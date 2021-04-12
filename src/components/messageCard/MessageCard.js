import React from 'react';
import './MessageCard.css';


export default function MessageCard(props){



    return (
        <div className="card">
        <p>{props.title}</p>
        </div>
      );
}