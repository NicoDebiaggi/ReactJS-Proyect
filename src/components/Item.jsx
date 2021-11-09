import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (
        <Col style={{minHeight: 600}}>
            <Card>
                <Card.Img src={item.image} style={{height: 300, overflow: 'hidden', objectFit: 'contain'}}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{
                        (item.description.length > 200) 
                        ? item.description.substring(0, 200) + '...'
                        : item.description 
                    }</Card.Text>
                    <Button as={Link} to={"/item/" + item.id} variant="primary">See More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;