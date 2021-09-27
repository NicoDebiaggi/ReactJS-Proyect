import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Nav } from "react-bootstrap"

function CartWidget(){
    return(
        <Nav.Link href="#"><ShoppingCartIcon/></Nav.Link>
    )
}

export default CartWidget;