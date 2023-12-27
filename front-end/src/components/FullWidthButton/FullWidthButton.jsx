import styles from "./FullWidthButton.module.css"

export const FullWidthButton = ({ children, onClick, isBlack, isInverted }) => (
    <button className={`${styles.button} ${isBlack ? styles.black : ''} ${isInverted ? styles.inverted : ''}`} onClick={onClick}>
        {children}
    </button>
)