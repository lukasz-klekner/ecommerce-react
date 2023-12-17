import { CenteredContent } from "../CenteredContent/CenteredContend"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import styles from "./Hero.module.css"

export const Hero = ({ heroImgUrl }) => (
    <div className={styles.hero} style={{ backgroundImage: `url(${heroImgUrl})` }}>
        <CenteredContent>
            <div className={styles.contentWrapper}>
                <h2>Letnie promocje do -70%!</h2>
                <p>Tylko najlepsze okazje!</p>
                <FullWidthButton>Sprawdź produkty</FullWidthButton>
            </div>
        </CenteredContent>
    </div>
)