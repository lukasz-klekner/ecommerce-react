import styles from "./CartProductsList.module.css"
import { CenteredContent } from "../CenteredContent/CenteredContend";
import { CartProduct } from "../CartProduct/CartProduct";

export const CartProductsList = ({ products }) => (
    <CenteredContent>
        <div className={styles.cartProductsList}>
            <h2>Koszyk</h2>
            <div>
                {products.map(product => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    </CenteredContent>
)