import { Card, Button, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Item(props) {
    return (
        <Col style={{minWidth: 200, height: 600}}>
            <Card>
                <Card.Img src={props.data.image} style={{height: 300, overflow: 'hidden', objectFit: 'contain'}}/>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.data.description}</Card.Text>
                    <LinkContainer to={"/item/" + props.data.id}>
                        <Button variant="primary">See More</Button>
                    </LinkContainer>
                    {props.children}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;