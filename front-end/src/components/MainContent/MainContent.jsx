import styles from "./MainContent.module.css"

export const MainContent = ({ children }) => (
    <div className={styles.mainContent}>{children}</div>
)