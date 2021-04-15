import React from 'react';
import './ItemListContainer.css';
import MessageCard from '../messageCard/MessageCard';
import ItemCounter from '../itemCounter/ItemCounter';
import ItemCounterVisualizer from '../itemCounter/ItemCounterVisualizer.js';


export default function ItemListContainer(props){

    return (
        <div className="home_bg">
        <ItemCounter nombre ="remera" stock = {5} initial ={1}/>
        <MessageCard title = {props.greeting} />
        </div>
      );
}