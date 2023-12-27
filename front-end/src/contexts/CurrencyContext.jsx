import { createContext, useContext } from "react";
import { CURRENCIES } from "../constants/currencies";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useLocalStorage('selected_currency', CURRENCIES.PLN)

    return  (
        <CurrencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext)