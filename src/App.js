import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCounterContainer from './components/itemCounter/ItemCounterContainer';

export default class App extends React.Component {

  render(){
    return(
      <div className="home_bg">
      <NavBar />   
        <div className = "bodyApp">   
        {/*<ItemCounterContainer nombre ="remera" stock = {5} initial ={1}/>*/}
        <ItemListContainer greeting="Sitio en construccion" />
        </div>
      </div>
    )
  }
}



