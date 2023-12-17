import { CenteredContent } from "../CenteredContent/CenteredContend"
import { Product } from "../Product/Product"
import styles from "./BestSellers.module.css"

export const BestSellers = ({ products }) => (
    <CenteredContent>
        <h2 className={styles.bestSellersHeader}>Sprawdź nasze bestellery</h2>
        <div className={styles.productWrapper}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </CenteredContent>
)