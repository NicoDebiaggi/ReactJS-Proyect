import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCartContext } from '../contexts/CartContext';
import { Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function CartWidget(){
    const {cart, cartTask} = useCartContext()
    const [widgetTotal, setWidgetTotal] = useState()

    useEffect(() => {
        setWidgetTotal(cartTask.totalItems())
    }, [cart])

    return(
        <Nav.Link as={Link} to="/cart">
            <ShoppingCartIcon/>
            {(widgetTotal == 0) ? null : widgetTotal}
        </Nav.Link>
    )
}

export default CartWidget;