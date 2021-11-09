import { InputGroup, FormControl, Container, Form } from "react-bootstrap";
import { GoSearch } from 'react-icons/go';

const Filters = ({setMaxPrice, maxPrice, active, setActive,handleClick}) => {

    const handleMaxPrice = (e) => {
        (e.target.value < 0) ? setMaxPrice(0) 
        : Number.isInteger(parseInt(e.target.value)) 
            ? setMaxPrice(parseInt(e.target.value)) 
            : setMaxPrice(maxPrice)
    };

    const handleActive = (e) => {
        setActive(e.target.checked);
    };

    return (
        <Container className="d-flex justify-content-end align-items-center" style={{height: 60}}>
            <Form.Check 
                type={"checkbox"}
                label={"Activar filtros"}
                onChange={handleActive}
                checked={active}
            />

            <InputGroup className="mx-3" style={{width: 200}}>
                <InputGroup.Text id="inputGroup-sizing-default">Max Price</InputGroup.Text>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="number"
                value={maxPrice}
                onChange={handleMaxPrice}
                />
            </InputGroup>

            <GoSearch className="mx-3" style={{fontSize: 30, "cursor": 'pointer'}} onClick={handleClick}/>
        </Container>
    );
}
 
export default Filters;