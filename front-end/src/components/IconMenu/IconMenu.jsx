import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css"
import BAG_ICON from "../../assets/bag.svg"
import HEART_ICON from "../../assets/heart.svg"

const cartTtems = 2

export const IconMenu = () => (
        <ul className={styles.iconMenu}>
            <li>
                <Link to="/ulubione">
                    <img src={HEART_ICON} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={BAG_ICON} />
                    <div className={styles.numberOfProducts}>{cartTtems}</div>
                </Link>
            </li>
        </ul>
    )