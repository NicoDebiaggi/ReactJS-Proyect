import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createContext, useContext } from 'react'

const app = firebase.initializeApp({
    apiKey: "AIzaSyClFW0w9EKGWfwhEb0LcSceS6xLg4s-psg",
    authDomain: "react-app-coder.firebaseapp.com",
    projectId: "react-app-coder",
    storageBucket: "react-app-coder.appspot.com",
    messagingSenderId: "1079241243756",
    appId: "1:1079241243756:web:d29974d3cb14b67c78ec49"
})

const db = app.firestore()
const productsRef = db.collection("products")
const ordersRef = db.collection("orders")


const Context = createContext()

export const useFireContext = () => useContext(Context)

export function FireProvider({children}){
    const fireTask = {}

    fireTask.getProducts = (order, price, category) => {
        let query;
        let products = [];

        /* price && (query = productsRef.where("price", "<", price)) */
        category? query? (query = query.where("category", "==", category)) : (query = productsRef.where("category", "==", category)) : (query = query)
        /* order && query? (query = query) : (query = productsRef.orderBy(order)) */

        query || (query = productsRef)

        query.get()
        .then(querySnapshot => {
            querySnapshot.forEach( doc => {
                let objToPush = {id: doc.id, ...doc.data()}
                products.push(objToPush)
            })
            
        console.log(products)
        })
        return products
    }

    fireTask.getProduct = (id) => {
        productsRef.doc(id).get()
        .then( doc => {
            let obj = {id: doc.id, ...doc.data()}
            console.log(obj)
            return obj
        })
    }

    fireTask.putOrder = (buyer, items, total, setOrder) => {
        ordersRef.add({
            buyer: buyer,
            items: items,
            date: firebase.firestore.Timestamp.now(),
            total: total
        })
        .then(setOrder("Felicitaciones por tu compra!"))
        .catch((error) => {
            setOrder(`Hubo un error con tu compra intentalo de nuevo mas tarde`)
            console.error(error)
        })
    }

    fireTask.addProduct = (product) => { 
        /*productsRef.add({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating
        })  */
    }


    return (
        <Context.Provider value={{fireTask}}>
            {children}
        </Context.Provider>
    )
}