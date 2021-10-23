import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'

export const ItemCount = ({stock, initial, count, setCount, cartTask, product}) => {
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

export const ItemCountCart = ({stock, amount, cartTask, product}) => {
    const [count, setCount] = useState(amount);

    useEffect(() => {
        setCount((count) <= 0 ? 0 : (count) >= stock ? stock : (count))
        cartTask.setAmount(product, count)
    }, [count, stock, product])

    return (
        <ButtonGroup size="sm" className="align-items-center">
            <Button onClick={() => setCount((count-1) <= 0 ? 0 : (count-1) >= stock ? stock : (count-1))} className="mx-3">-</Button>
            <p className="m-0">{count}</p>
            <Button onClick={() => setCount((count+1) <= 0 ? 0 : (count+1) >= stock ? stock : (count+1))} className="mx-3">+</Button>
        </ButtonGroup>
    );
};