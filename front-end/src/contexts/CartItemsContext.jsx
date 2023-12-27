import { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartItemsContext = createContext([])

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage('cart_products', [])

    const addProductToCart = (product) => {
        const newState = [...cartItems, product]
        setCartItems(newState)
    }

    return (
        <CartItemsContext.Provider value={[cartItems, addProductToCart]}>
            { children}
        </CartItemsContext.Provider>
    )
}

export const useCartItems = () => useContext(CartItemsContext)