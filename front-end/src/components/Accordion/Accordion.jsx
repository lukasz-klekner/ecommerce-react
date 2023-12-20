import styles from "./Accordion.module.css"
import ARROW_ICON from "../../assets/arrow.svg"
import { useState } from "react"

export const Accordion = ({ items }) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)

    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.title}>
                    <div className={styles.item} onClick={() => setActiveItemIndex(index)}>
                        <p>{item.title}</p>
                        <img src={ARROW_ICON} className={activeItemIndex === index ? styles.expanded : ''} />
                    </div>
                    {activeItemIndex === index && <p>{item.content}</p>}
                </li>
            ))}
        </ul>
    )
}