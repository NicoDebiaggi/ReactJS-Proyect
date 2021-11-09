import { useCartContext } from '../contexts/CartContext';
import { ListGroup, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';


const Cart = () => {
    const {cart, cartTask} = useCartContext()

    return(
        (cart.length === 0) ?
        <Container className="d-flex flex-column justify-content-center" style={{"minHeight": "90vh", "textAlign": "center"}}>
            
            <Row className="justify-content-around">
            <HiShoppingCart style={{fontSize: '200px'}}/>
            </Row>

            <Row>
                <h1>Your cart is currently empty!</h1>
            </Row>

            <Row className="justify-content-around">
                <Button variant="primary" style={{"width": "200px", "marginTop": "30px"}} as={Link} to="/">Back to shopping</Button>
            </Row>
            
        </Container>
        :
        <Container className="mt-5">
            <Row className="justify-content-around">
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row className="align-items-center">
                                <Col>
                                    <Card.Title><b>Cart</b></Card.Title>
                                </Col>
                                
                                <Col className="d-flex justify-content-sm-end">
                                    <Button variant="danger" onClick={() => cartTask.clear()}>Clear Cart</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                            {cart.map( prod => <CartItem prod={prod} />)}
                         <ListGroup.Item/>
                    </ListGroup>
                </Col>
                <Col>
                    <CartSummary />
                </Col>
            </Row>
        </Container>
    )
}

export default Cart