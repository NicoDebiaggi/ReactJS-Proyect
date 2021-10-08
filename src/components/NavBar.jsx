import CartWidget from "./CartWidget";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>Tu E-Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to={"/category/electronics"}>
                            <Nav.Link>Electronics</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={"/category/jewelery"}>
                            <Nav.Link>Jewelery</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Ropa" id="collasible-nav-dropdown">
                            <LinkContainer to={"/category/men's clothing"}>
                                <NavDropdown.Item>Men's clothing</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={"/category/women's clothing"}>
                                <NavDropdown.Item>Women's clothing</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )    
}

export default NavBar;