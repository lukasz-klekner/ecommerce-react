import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies"
import { useCurrency } from "../../contexts/CurrencyContext"

export const Price = ({ product }) => {
    const [ currency ] = useCurrency()

    return (
        <>
            {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
            {CURRENCY_SIGN[currency]}
        </>
    )
}