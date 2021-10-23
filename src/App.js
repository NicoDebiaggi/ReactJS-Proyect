import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext';
import { FireProvider } from './contexts/FireContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <FireProvider>
        <CartProvider>
          <Router>
            <NavBar/>
            <Switch>

              <Route exact path="/">
                <ItemListContainer/> 
              </Route>

              <Route exact path="/category/:category">
                <ItemListContainer/> 
              </Route>

              <Route exact path="/item/:itemId">
                <ItemDetailContainer/> 
              </Route>

              <Route exact path="/cart">
                <Cart/> 
              </Route>

            </Switch>
          </Router>
        </CartProvider>
      </FireProvider>
    </>
  );
}

export default App;