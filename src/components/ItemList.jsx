import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from './Item'

function ItemList(props) {
    const[products, setProducts] = useState([])

    useEffect(function () {
        fetch(props.apiURL)
                .then(res => res.json())
                .then(json => setProducts(json))
    }, [props.apiURL])

    return (
        <Row xs={1} md={3} className="g-4" style={{width: '100%'}}>
            {
                products.map(el => <Item key={el.id} data={(el)}></Item>)
            }
        </Row>
    ) 
}

export default ItemList;

