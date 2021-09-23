import CartWidget from "./CartWidget";
import navBarCSS from "../styles/navBar.css";

function NavBar() {
    return (
        <nav>
            <i>logo</i>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )    
}

export default NavBar;