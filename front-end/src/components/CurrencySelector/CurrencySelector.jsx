import styles from "./CurrencySelector.module.css"
import { CURRENCIES } from "../../constants/currencies";
import { useCurrency } from "../../contexts/CurrencyContext";

export const CurrencySelector = () => {
    const [currency, setCurrency] = useCurrency()

    return (
        <select
            className={styles.currencySelector}
            value={currency}
            onChange={(event) => {
                setCurrency(event.target.value)
            }}
        >
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    )
} 