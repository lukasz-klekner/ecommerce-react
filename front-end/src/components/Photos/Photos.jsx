import styles from "./Photos.module.css"
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

export const Photos = ({ product }) => {
    const [activePhoto, setActivePhoto] = useState(product.photos[0])

    return (
        <FlexContainer>
            <div className={styles.thumbnails}>
                {
                    product.photos.map(photo => (
                        <img 
                            key={photo} 
                            src={photo} 
                            className={photo=== activePhoto ? styles.active : ''}
                            onClick={() => setActivePhoto(photo)}
                        />
                    ))
                }
            </div>
            <img className={styles.mainPhoto} src={activePhoto} />
         </FlexContainer>
    )
}