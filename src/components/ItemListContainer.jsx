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
    //let apiURL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        category ?
            /* loading && fetch(apiURL + '/category/' + category)
                    .then(res => res.json())
                    .then(json => {
                        setProducts(json)
                    } )
                    .catch(() => console.log("error")) */
            loading && (setProducts(fireTask.getProducts(null, null, category)))
        :
            loading && (setProducts(fireTask.getProducts(null, null, category))) 
    }, [category])

    useEffect(() => {
        setLoading(true)
    }, [category])

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