import { useFireContext } from '../contexts/FireContext';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdError } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const End = () => {
    const { fireTask } = useFireContext()

    return ( 
        <Container className="d-flex flex-column justify-content-center" style={{"minHeight": "90vh", "textAlign": "center"}}>
            
            <Row className="justify-content-around">
                {
                    (fireTask.orderState === true) 

                    ?<BsBagCheckFill style={{"fontSize": "200px", "marginBottom": "20px"}}/>

                    :<MdError style={{"fontSize": "200px"}}/>
                }
            </Row>

            <Row>
                <pre><h1>{fireTask.orderMessage}</h1></pre>
            </Row>

            <Row className="justify-content-around">
                <Button variant="primary" style={{"width": "200px", "marginTop": "30px"}} as={Link} to="/" onClick={() => {
                    fireTask.setOrderState(null)
                    fireTask.setOrderMessage("")
                }}>Back to shopping</Button>
            </Row>
            
        </Container>
     );
}
 
export default End;