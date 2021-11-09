import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap';
import { useCartContext } from '../contexts/CartContext';
import { ItemCountCart } from '../components/ItemCount'

const CartItem = ({ prod }) => {
    const { cartTask } = useCartContext()

    return ( 
        <ListGroup.Item key={prod.product.id}>
            <Row className="align-items-center">

                <Col md={2} style={{"height": "150px"}}>
                    <Image src={prod.product.image} className="h-100" fluid />    
                </Col>

                <Col md={5}>
                    {prod.product.title}        
                </Col>

                <Col style={{"textAlign": "center"}}>
                    ${prod.product.price}            
                </Col>

                <Col style={{"textAlign": "center", "display": "flex"}}>
                    <ItemCountCart stock={5} amount={prod.amount} cartTask={cartTask} product={prod.product}/>  

                    <Button variant="danger" onClick={() => cartTask.removeProduct(prod.product)}>X</Button>
                </Col>

            </Row>
        </ListGroup.Item>
    );
}
 
export default CartItem;