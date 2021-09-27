import ItemList from './ItemList';

let apiURL = 'https://fakestoreapi.com/products'

function ItemListContainer(){
    return(
        <ItemList apiURL={apiURL}></ItemList>
    )
}


export default ItemListContainer;