import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';
import ItemDetail from './ItemDetail';


function ItemDetailContainer(){
    const[product, setProducts] = useState(false)
    const[loading, setLoading] = useState(true)
    const { itemId } = useParams();
    const apiURL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        loading && fetch((apiURL + '/' + itemId))
                .then(res => res.json())
                .then(json => setProducts(json))
                .catch(() => console.log("error"))
    }, [])

    useEffect(() => {
        product && setLoading(false) 
    }, [product])

    return(
        loading ?
            <Loading/> 
        :
            <ItemDetail product={product}/>
    )
}


export default ItemDetailContainer;