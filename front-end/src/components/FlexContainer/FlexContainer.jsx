import styles from "./FlexContainer.module.css"

export const FlexContainer = ({ children }) => (
    <div className={styles.flexContainer}>
        {children}
    </div>
)