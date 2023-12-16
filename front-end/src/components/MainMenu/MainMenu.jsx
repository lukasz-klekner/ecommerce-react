import { NavLink } from "react-router-dom"
import styles from "./MainMenu.module.css"
import { GENDERS } from "../../constants/categories"

export const MainMenu = () => (
        <ul className={styles.mainMenu}>
            {GENDERS.map(({categoryName, path}) => (
                <li key={path}>
                    <NavLink to={path}>{categoryName}</NavLink>
                </li>
            ))}
        </ul>
)
