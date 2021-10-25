import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFireContext } from '../contexts/FireContext';
import ItemList from './ItemList';
import Loading from './Loading';

function ItemListContainer(){
    const[products, setProducts] = useState(false)
    const[loading, setLoading] = useState(true)
    const { category } = useParams()
    const { fireTask } = useFireContext()

    useEffect(() => {
        setLoading(true)
    }, [category])

    useEffect(() => {
        loading && (setProducts(fireTask.getProducts(null, null, category)))
    }, [category, loading])

    useEffect(() => {
        products && setLoading(false)
    }, [products])

    return(
        loading ?
            <Loading/> 
        :
            <ItemList list={products}/>
    )
}


export default ItemListContainer;