import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemCounterContainer from './components/itemCounter/ItemCounterContainer';
import ItemDetail from './components/itemDetail/ItemDetail';
import ItemDetailList from './components/itemDetail/ItemDetailList';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';


export default class App extends React.Component {

  render(){
    return(
      <div className="home_bg">
      <NavBar />   
      <ItemDetailContainer/>
        <div className = "bodyApp">   
        {/*<ItemCounterContainer nombre ="remera" stock = {5} initial ={1}/>*/}
        
        <ItemListContainer greeting="Sitio en construccion" />
        </div>
      </div>
    )
  }
}



