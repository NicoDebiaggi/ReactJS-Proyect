import CartWidget from "./CartWidget";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand as={Link} to="/">Tu E-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/category/electronics">Electronics</Nav.Link>

                        <Nav.Link as={Link} to="/category/jewelery">Jewelery</Nav.Link>

                        <NavDropdown title="Ropa" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/men's clothing">Men's clothing</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/women's clothing">Women's clothing</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )    
}

export default NavBar;