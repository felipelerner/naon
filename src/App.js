import React from 'react';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import { CartProvider } from './context/CartContext';
import CartPage from './components/cart/Cart';
import BuyForm from './components/buyForm/BuyForm'
import Credits from './components/credits/Credits';


export default function App(){

  return(
    <CartProvider>
    <div className="home_bg">
    <Router>
      <Route exact path="/" >
        <div className="home">
          <Home/>
        </div> 
      </Route>
      <NavBar />   
        <Switch>
          <Route path="/itemdetail/:id">
          <ItemDetailContainer/>
          </Route>
          <Route path="/itemlist/:category">
            <div className = "bodyApp">   
            <ItemListContainer greeting="Sitio en construccion" />
            </div>
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route path="/cart/buy">
            <BuyForm/>
          </Route>
          <Route path="/credits">
            <Credits/>
          </Route>
        </Switch>
    </Router>
    </div>
    </CartProvider>
  )

}




