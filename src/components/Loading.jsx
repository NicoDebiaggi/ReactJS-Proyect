import {Spinner, Container, Row, Col} from 'react-bootstrap'

const Loading = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Spinner animation="border" role="status" style={{zoom: "2"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    ) 
}

export default Loading