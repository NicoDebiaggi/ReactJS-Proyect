import {Spinner, Container, Row, Col} from 'react-bootstrap'

export default function Loading() {
    return (
        <Container >
            <Row className="justify-content-center p-5 m-5">
                <Col xs="auto">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    ) 
}