import NavBar from './components/NavBar'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
import End from './pages/End'
import { CartProvider } from './contexts/CartContext';
import { FireProvider } from './contexts/FireContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <FireProvider>
          <CartProvider>
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

              <Route exact path="/end">
                <End/> 
              </Route>

            </Switch>
          </CartProvider>
        </FireProvider>
      </Router>
    </>
  );
}

export default App;