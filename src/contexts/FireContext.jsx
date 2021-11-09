import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createContext, useContext, useState } from 'react'


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

export const FireProvider = ({children}) => {
    const [orderState, setOrderState] = useState(null)
    const [orderMessage, setOrderMessage] = useState("Error")

    const fireTask = {}

    fireTask.orderState = orderState; 
    fireTask.setOrderState = setOrderState; 
    fireTask.orderMessage = orderMessage; 
    fireTask.setOrderMessage = setOrderMessage; 

    fireTask.getProducts = (price, category) => {
        let query;
        let products = [];

        price && (query = productsRef.where("price", "<", price))
        category && (query? (query = query.where("category", "==", category)) : (query = productsRef.where("category", "==", category)))

        query || (query = productsRef)

        return query.get()
        .then(querySnapshot => {
            querySnapshot.forEach( doc => {
                products.push({id: doc.id, ...doc.data()})
            })
            return products
        })
    }

    fireTask.getProduct = (id) => {
        return productsRef.doc(id).get()
        .then( doc => {return {id: doc.id, ...doc.data()}})
    }

    fireTask.putOrder = (buyer, items, total) => {
        ordersRef.add({
            buyer: buyer,
            items: items,
            date: firebase.firestore.Timestamp.now(),
            total: total
        })
        .then(() => {
            setOrderMessage("Felicitaciones por tu compra!")
            setOrderState(true)
        })
        .catch((error) => {
            setOrderMessage(`Hubo un error con tu compra intentalo de nuevo mas tarde`)
            setOrderState(false)
            console.error(error)
        })
    }

    return (
        <Context.Provider value={{fireTask}}>
            {children}
        </Context.Provider>
    )
}