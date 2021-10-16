import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
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
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;