import { Link, useFetcher } from "react-router-dom";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import { useCurrency } from "../../contexts/CurrencyContext";
import styles from "./Product.module.css"

const ENDPOINT_TO_PATH_MAPPING = {
    men: "mezczyzna",
    women: "kobieta",
    children: "dziecko",
};

export const Product = ({ product }) => {
    const { Form } = useFetcher()
    const [ currency ] = useCurrency()

    return (
        <Link 
            to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`} 
            className={styles.product}
        >
            <img src={product.photos[0]}/>
            <h3>{product.productName}</h3>
            <p>{currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}{CURRENCY_SIGN[currency]}</p>
            <Form
                method="POST"
                action={`/add-to-favorites/${product.id}`}
                onClick={(event) => event.stopPropagation()}
            >
                <button>
                    <div className={styles.heart}></div>
                </button>
            </Form>
        </Link>
    )
} 