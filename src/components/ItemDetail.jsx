import { Row, Col, Container, Image } from "react-bootstrap";
import ItemCount from './ItemCount';

function ItemDetail({product}) {
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
                        <ItemCount stock={5} initial={3}/>  
                    </Col>
                </Row>
        </Container>
    ) 
}

export default ItemDetail;