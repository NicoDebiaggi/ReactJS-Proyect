import { useCartContext } from '../contexts/CartContext';
import { ListGroup, Container, Row, Col, Image } from 'react-bootstrap';
import { ItemCountCart } from './ItemCount'

const Cart = () => {
    const {cart, cartTask} = useCartContext()
    return(
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        {cart.map(prod => 
                            <ListGroup.Item key={prod.product.id}>
                                <Row className="align-items-center">
                                    <Col md={2} style={{"height": "150px"}}>
                                        <Image src={prod.product.image} className="h-100" fluid />    
                                    </Col>
                                    <Col md={6}>
                                        {prod.product.title}        
                                    </Col>
                                    <Col style={{"textAlign": "center"}}>
                                        {prod.product.price}            
                                    </Col>
                                    <Col style={{"textAlign": "center"}}>
                                        <ItemCountCart stock={5} amount={prod.amount} cartTask={cartTask} product={prod.product}/>        
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                         <ListGroup.Item/>
                    </ListGroup>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart