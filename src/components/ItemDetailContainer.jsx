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
    //const apiURL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        loading ? (setProduct(fireTask.getProduct(itemId))) : setProduct(product)
        console.log(product)
    }, [itemId , loading])    

    useEffect(() => {
        product && setLoading(false) 
    }, [product , loading])

    return(
        loading ?
            <Loading/> 
        :
            <ItemDetail product={product}/>
    )
}


export default ItemDetailContainer;