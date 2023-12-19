import { CenteredContent } from "../CenteredContent/CenteredContend"
import { Product } from "../Product/Product"
import styles from "./Products.module.css"

export const Products = ({ products,headerText }) => (
    <CenteredContent>
        <h2 className={styles.productsHeader}>{headerText}</h2>
        <div className={styles.productWrapper}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </CenteredContent>
)