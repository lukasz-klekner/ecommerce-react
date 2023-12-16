import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css"
import { CATEGORIES } from "../../constants/categories";

export const CategoryMenu = () => (
    <div className={styles.categoryMenu}>
        <ul>
            {CATEGORIES.map(({ categoryName,path }) => (
                <li key={path}>
                    <NavLink to={path}>
                        {categoryName}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
)