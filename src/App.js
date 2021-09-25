import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import globalCSS from './styles/global.css'

let mensaje = "Hola Mundo"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={mensaje}/>
    </>
  );
}

export default App;