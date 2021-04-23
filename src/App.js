import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
        <div className="home_bg">
        <NavBar />   
  
        <Route>
        <ItemDetailContainer/>
        </Route>
          <div className = "bodyApp">   
          {/*<ItemCounterContainer nombre ="remera" stock = {5} initial ={1}/>*/}
          
          <ItemListContainer greeting="Sitio en construccion" />
          </div>
        </div>
        </Switch>
      </Router>
    )
  }
}



