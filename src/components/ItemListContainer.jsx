import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import Loading from './Loading';

function ItemListContainer(){
    const[products, setProducts] = useState(false)
    const[loading, setLoading] = useState(true)
    const { category } = useParams();
    let apiURL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        category ?
            loading && fetch(apiURL + '/category/' + category)
                    .then(res => res.json())
                    .then(json => setProducts(json))
                    .catch(() => console.log("error"))
        :
            loading && fetch(apiURL)
                    .then(res => res.json())
                    .then(json => setProducts(json))        
                    .catch(() => console.log("error"))
    }, [loading])

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