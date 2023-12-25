import { useContext, useState } from "react";
import { createContext } from "react";

const CartItemsContext = createContext([])

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage['cart_products']) || []
    })

    const addProductToCart = (product) =>  setCartItems(prevState => {
        const newState = [...prevState, product]
        localStorage['cart_products'] = JSON.stringify(newState)
        return newState
    } )

    return (
        <CartItemsContext.Provider value={[cartItems, addProductToCart]}>
            { children}
        </CartItemsContext.Provider>
    )
}

export const useCartItems = () => useContext(CartItemsContext)