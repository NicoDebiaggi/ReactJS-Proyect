import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item(props) {
    console.log("soy un item")
    return (
        <Col style={{minWidth: 200, height: 600}}>
            <Card>
                <Card.Img src={props.data.image} style={{height: 300, overflow: 'hidden', objectFit: 'contain'}}/>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.description}</Card.Text>
                    <Button as={Link} to={"/item/" + props.data.id} variant="primary">See More</Button>
                    {props.children}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;