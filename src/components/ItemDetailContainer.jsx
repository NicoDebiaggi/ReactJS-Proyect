import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import { useFireContext } from '../contexts/FireContext';


function ItemDetailContainer(){
    const[product, setProduct] = useState(false)
    const[loading, setLoading] = useState(true)
    const { itemId } = useParams();
    const { fireTask } = useFireContext()

    useEffect(() => {
        loading && fireTask.getProduct(itemId).then((prod) => setProduct(prod))
    }, [itemId , loading])    

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