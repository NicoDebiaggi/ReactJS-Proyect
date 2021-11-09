import { createContext, useState, useContext } from 'react'
import { useHistory } from "react-router";


const Context = createContext()

export const useCartContext = () => useContext(Context)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const history = useHistory();

    const cartTask = {}

    cartTask.addProduct = (product, amount) => {
        cartTask.isInCart(product)
        ? setCart(() => {
            let newCart = cart
            let productIndex = newCart.findIndex(item => item.product.id === product.id)
            newCart[productIndex].amount = newCart[productIndex].amount + amount
            
            return newCart
        })
        : setCart(() => [...cart, {product: product, amount: amount}])
    }

    cartTask.setAmount = (product, amount) => {
        let newCart = [...cart]
        let productIndex = newCart.findIndex(item => item.product.id === product.id)
        newCart[productIndex].amount = amount

        cartTask.isInCart(product)
        && 
        setCart(newCart) 
    }

    cartTask.removeProduct = (product) => {
        if (cartTask.isInCart(product)){
            setCart(() => {
                let newCart = [...cart]
                let productIndex = newCart.findIndex(item => item.product.id === product.id)
                newCart.splice(productIndex, 1)
                return newCart
            })
        }
    }
    cartTask.clear = () => {
        setCart([])
    }

    cartTask.isInCart = (product) => {
        return cart.find(item => item.product.id === product.id) ? true : false
    }

    cartTask.totalItems = () => {
        let totalItems = 0
        cart.forEach(el => totalItems += el.amount)

        return totalItems
    }

    cartTask.totalMoney = () => {
        let totalMoney = 0
        cart.forEach(el => totalMoney += (el.amount * el.product.price))

        return totalMoney
    }

    cartTask.endCart = () => {
        history.push("/end")
        cartTask.clear()
    }

    return (
        <Context.Provider value={{cart, cartTask}}>
            {children}
        </Context.Provider>
    )
}