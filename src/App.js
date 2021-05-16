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


export default function App(){

  return(
    <CartProvider>
    <div className="home_bg">
    <Router>
    <NavBar />   
      <Switch>
      <Route exact path="/" >
        <div className="home">
          <Home/>
        </div> 
      </Route>
          <Route path="/itemdetail/:id">
          <ItemDetailContainer/>
          </Route>
          <Route path="/itemlist/:category">
            <div className = "bodyApp">   
            {/*<ItemCounterContainer nombre ="remera" stock = {5} initial ={1}/>*/}
            <ItemListContainer greeting="Sitio en construccion" />
            </div>
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route path="/cart/buy">
            <BuyForm/>
          </Route>
      </Switch>
    </Router>
    </div>
    </CartProvider>
  )

}




