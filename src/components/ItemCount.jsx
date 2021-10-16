import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'

const ItemCount = ({stock, initial, count, setCount, cartTask, product}) => {
    const [onAdd, setOnAdd] = useState(initial);

    useEffect(() => {
        setCount(onAdd <= 0 ? 0 : onAdd >= stock ? stock : (onAdd))
    }, [onAdd, setCount, stock])


    const Contador = ({valor}) => <input defaultValue={valor}/>

    return (
        <ButtonGroup size="sm">
            <Button onClick={() => setOnAdd(count-1)} className="mx-3">-</Button>
            <Contador valor={count}/>
            <Button onClick={() => setOnAdd(count+1)} className="mx-3">+</Button>
            <Button onClick={() => cartTask.addProduct(product, count)}>
                Añadir al carrito
            </Button>
        </ButtonGroup>
    );
};

export default ItemCount;