import styles from "./FullWidthButton.module.css"

export const FullWidthButton = ({ children, onClick, isBlack }) => (
    <button className={`${styles.button} ${isBlack ? styles.black : ''}`} onClick={onClick}>
        {children}
    </button>
)