import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from '../contexts/CartContext';
import { Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const CartWidget = () => {
    const {cart, cartTask} = useCartContext()
    const [widgetTotal, setWidgetTotal] = useState()

    useEffect(() => {
        setWidgetTotal(cartTask.totalItems())
    }, [cart])

    return(
        <Nav.Link as={Link} to="/cart">
            <HiShoppingCart style={{fontSize: '30px'}}/>
            {(widgetTotal === 0) ? null : widgetTotal}
        </Nav.Link>
    )
}

export default CartWidget;