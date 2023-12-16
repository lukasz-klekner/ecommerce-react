import styles from "./TopBar.module.css"

export const TopBar = ({ children }) => (
    <div className={styles.topBar}>{children}</div>
)