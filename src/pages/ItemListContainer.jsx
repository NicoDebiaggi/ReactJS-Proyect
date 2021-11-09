import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFireContext } from '../contexts/FireContext';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import Filters from '../components/Filter';

const ItemListContainer = () => {
    const[products, setProducts] = useState(false)
    const[loading, setLoading] = useState(true)
    const { fireTask } = useFireContext()
    
    const { category } = useParams()
    const [active, setActive] = useState(false)
    const [maxPrice, setMaxPrice] = useState(100);
    const [search, setSearch] = useState(false)

    const handleClick = () => setSearch(!search)

    useEffect(() => {

        setLoading(true)

        active
        ? fireTask.getProducts(maxPrice, category).then((prods) => setProducts(prods))
        : fireTask.getProducts(null, category).then((prods) => setProducts(prods))

    }, [category, active, search])

    useEffect(() => {

        products && setLoading(false)
        
    }, [products])

    return(
        loading ?
            <Loading/> 
        :
        <>
            <Filters 
            setMaxPrice={setMaxPrice} 
            maxPrice={maxPrice}
            active={active}
            setActive={setActive}
            handleClick={handleClick}
            />
            <ItemList list={products}/>
        </>
    )
}


export default ItemListContainer;