import { createContext, useContext, useState } from "react";
import { CURRENCIES } from "../constants/currencies";

const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(localStorage['selected_currency'] || CURRENCIES.PLN)

    return  (
        <CurrencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext)