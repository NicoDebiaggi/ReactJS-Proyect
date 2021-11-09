import { useCartContext } from '../contexts/CartContext';
import { useFireContext } from '../contexts/FireContext';
import { useEffect, useState } from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';

const roundNumber = (number) => {
    return Math.round(number * 100) / 100   
}

const CartSummary = () => {
    const {cart, cartTask} = useCartContext()
    const { fireTask } = useFireContext()

    const [totalItems, setTotalItems] = useState(cartTask.totalItems())
    const [productsMoney, setProductsMoney] = useState(roundNumber(cartTask.totalMoney()))
    const [taxes, setTaxes] = useState(roundNumber(productsMoney*0.01))
    const [totalMoney, setTotalMoney] = useState(roundNumber(productsMoney + 20 + taxes))
        
    useEffect(() => {
        setTotalItems(cartTask.totalItems())
        setProductsMoney(roundNumber(cartTask.totalMoney()))
    }, [cart])

    useEffect(() => {
        setTaxes(roundNumber(productsMoney*0.01))
        setTotalMoney(roundNumber(productsMoney + 20 + taxes))
    }, [productsMoney])

    useEffect(() => {
        (fireTask.orderState !== null) && cartTask.endCart()
    }, [fireTask.orderState])


    const clientMockUp = {
        buyer: {
            name: 'Juan Perez',
            email: 'juan@perez.com',
            phone: '123456789',
            address: 'Calle 123 #123-123'
        },
        items: [...cart],
        total: totalMoney
    }

    return ( 
        <Card > 
            <Card.Body>
                <Card.Title><b>Order Summary</b></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">

                <ListGroup.Item className="d-flex justify-content-between">
                    <span>Items({totalItems}):</span>
                    <span>${productsMoney}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between">
                    <span>Shipping:</span>
                    <span>$20</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between">
                    <span>Taxes:</span>
                    <span>${taxes}</span>
                </ListGroup.Item>

            </ListGroup>
            <Card.Body>

                <Card.Title className="d-flex justify-content-between" style={{"color": "red"}}>
                    <span><b>Order Total:</b></span>
                    <span><b>${totalMoney}</b></span>
                </Card.Title>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <Button variant="primary" className="w-100" size="lg" onClick={() => {
                    fireTask.putOrder(clientMockUp.buyer, clientMockUp.items, clientMockUp.total)
                }}>
                    Place your order
                </Button>
            </Card.Footer>
        </Card>
    );
}
 
export default CartSummary;