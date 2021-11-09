import { Container, Row } from "react-bootstrap";
import Item from './Item'
import { ImCross } from "react-icons/im";


const ItemList = ({list}) => {
    
    return (
        <Row xs={1} md={3} className="g-4" style={{width: '100%', margin: '0'}}>
            {
                (Object.keys(list).length > 0) 
                ? list.map(el =>  <Item key={el.id} item={(el)}/>) 
                : <Container className="d-flex flex-column justify-content-center text-center" style={{"minHeight": "80vh"}} >  
                    <Row className="justify-content-around">
                    <ImCross style={{fontSize: '200px', marginBottom: '20px'}}/>
                    </Row>
        
                    <Row>
                        <h1>No items here!</h1>
                    </Row>
                </Container>
            }
        </Row>
    ) 
}

export default ItemList;