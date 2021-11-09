import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { ItemCount } from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext';


const ItemDetail = ({product}) => {
    const [count, setCount] = useState();
    const { cartTask } = useCartContext()

    return (
        <Container className="mb-5 p-5">
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <Image src={product.image} fluid/>        
                            </Col>
                            <Col md={12}>
                                <Row className="w-100 h-100">
                                    <Col>
                                        <Image src={product.image} fluid/>        
                                    </Col>       
                                    <Col>
                                        <Image src={product.image} fluid/>        
                                    </Col>       
                                    <Col>
                                        <Image src={product.image} fluid/>        
                                    </Col>       
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="p-5">
                        <h4>{product.title}</h4>
                        <p>{product.category}</p>
                        <br/>
                        <br/>
                        <h4><b>${product.price}</b></h4>
                        <br/>   
                        <h5 className="mb-5">{product.description}</h5>
                        <hr className="mb-5"/>
                        {cartTask.isInCart(product) ?
                            <Button as={Link} to="/cart" variant="outline-primary">Terminar mi compra</Button>
                            :
                            <ItemCount stock={product.stock} initial={1} count={count} setCount={setCount} cartTask={cartTask} product={product}/>  
                        }
                    </Col>
                </Row>
        </Container>
    ) 
}

export default ItemDetail;