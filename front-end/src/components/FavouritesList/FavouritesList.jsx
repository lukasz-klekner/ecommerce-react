import styles from "./FavouritesList.module.css"
import { CenteredContent } from "../CenteredContent/CenteredContend";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export const FavouritesList = ({ favourites }) => (
    <CenteredContent>
        <div className={styles.favouritesList}>
            <h2>Ulubione</h2>
            <div>
                {favourites.map(favourite => (
                    <FavouriteProduct key={favourite.id} favourite={favourite} />
                ))}
            </div>
        </div>
    </CenteredContent>
)