import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Item from './Item'

function ItemList({list, children}) {
    console.log(list)
    return (
        <Row xs={1} md={3} className="g-4" style={{width: '100%'}}>
            {
                list.map(el => <Item key={el.id} data={(el)}>
                    {children}
                </Item>)
            }
        </Row>
    ) 
}

export default ItemList;