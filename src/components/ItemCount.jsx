import { useEffect, useState } from 'react';
import {ButtonGroup, Button} from 'react-bootstrap'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);
    const [onAdd, setOnAdd] = useState(initial);
    
    useEffect(() => {
        setCount(onAdd <= 0 ? 0 : onAdd >= stock ? stock : (onAdd))
    }, [onAdd])


    const Contador = ({valor}) => <input defaultValue={valor}/>

    return (
        <ButtonGroup size="sm">
            <Button onClick={() => setOnAdd(count-1)} className="mx-3">-</Button>
            <Contador valor={count}/>
            <Button onClick={() => setOnAdd(count+1)} className="mx-3">+</Button>
            <Button>
                Añadir al carrito
            </Button>
        </ButtonGroup>
    );
};

export default ItemCount;