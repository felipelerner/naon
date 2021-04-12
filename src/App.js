import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

export default class App extends React.Component {

  render(){
    return(
      <div>
      <NavBar />
      <ItemListContainer greeting="Sitio en construcción" />
      </div>
    )
  }
}



