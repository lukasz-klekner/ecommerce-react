import styles from "./FavouritesList.module.css"
import { CenteredContent } from "../CenteredContent/CenteredContend";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export const FavouritesList = ({ products }) => (
    <CenteredContent>
        <div className={styles.favouritesList}>
            <h2>Ulubione</h2>
            <div>
                {products.map(product => (
                    <FavouriteProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    </CenteredContent>
)