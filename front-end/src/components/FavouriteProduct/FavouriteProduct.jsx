import styles from "./FavouriteProduct.module.css"
import REMOVE_ICON from "../../assets/remove.svg"
import BAG_ICON from "../../assets/bag.svg"
import { useFetcher } from "react-router-dom"

export const FavouriteProduct = ({ favourite }) => {
    const { Form } = useFetcher()
    return (
        <div className={styles.favouriteProduct}>
            <img src={favourite.product.photos[0]} />
            <div className={styles.favouriteProductInfo}>
                <div className={styles.topRow}>
                    <h3>
                        {favourite.product.brand} {favourite.product.productName}
                    </h3>
                    <p>{favourite.product.pricePLN}zł</p>
                </div>
                <p className={styles.priceRow}>
                    <span>Cena: </span>
                    {favourite.product.pricePLN}zł
                </p>
                <div className={styles.buttonRow}>
                    <Form
                        method="DELETE"
                        action={`/delete-from-favorites/${favourite.id}`}
                    >
                        <button>
                            <img src={REMOVE_ICON} />
                            Usuń
                        </button>
                    </Form>
                    <button>
                        <img src={BAG_ICON} />
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    )
} 