import React from 'react';
import './ItemListContainer.css';
import MessageCard from '../messageCard/MessageCard';


export default function ItemListContainer(props){

    return (
        <div className="home_bg">
        <MessageCard title = {props.greeting} />
        </div>
      );
}