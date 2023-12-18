/* eslint-disable no-unused-vars */
import styles from "./CartSummary.module.css"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg"

export const CartSummary = ({ products }) => (
    <div className={styles.cartSummary}>
        <h2>Podsumowanie</h2>
        <div className={styles.cartRow}>
            <p>Wartość produktów:</p>
            <p>199zł</p>
        </div>
        <div className={styles.cartRow}>
            <p>Koszt dostawy:</p>
            <p>9,99zł</p>
        </div>
        <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
            <p>Do zapłaty:</p>
            <p>208,99zł</p>
        </div>
        <FullWidthButton isBlack>Do zapłaty</FullWidthButton>
        <div className={styles.deliveryInfo}>
            <img src={CAR_ICON} />
            <p>Darmowa dostawa od 500zł</p>
        </div>
    </div>
)