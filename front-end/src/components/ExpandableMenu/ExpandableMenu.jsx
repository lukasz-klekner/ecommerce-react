import { NavLink } from "react-router-dom";
import styles from "./ExpandableMenu.module.css"
import { CATEGORIES } from "../../constants/categories";
import ARROW_ICON from "../../assets/arrow.svg"


export const ExpandableMenu = () => {
    const ACTIVE_PATH = 'odziez'
    return (
        <div className={styles.expandableMenu}>
            <p>Kobieta</p>
            <ul>
                {CATEGORIES.map(({path, categoryName, subcategories}) =>(
                    <li key={path}>
                        <NavLink to={path}>
                            {categoryName}
                            <img src={ARROW_ICON} className={ACTIVE_PATH === path ? styles.expanded : ''} />
                        </NavLink>
                        {ACTIVE_PATH === path && <ul>
                            {subcategories.map(({path, categoryName}) => (
                                <li key={path}>
                                    <NavLink to={path}>
                                        {categoryName}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </div>
    )
}