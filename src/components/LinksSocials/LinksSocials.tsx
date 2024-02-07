import styles from "./LinksSocials.module.scss";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as WatsappIcon } from "../../assets/svg/whatsappFooter.svg";
import telegramSrc from "../../assets/svg/telegram.png";

const LinksSocials = () => {
    return (
        <div className={styles.links}>
            <div className={styles.link}>
                <InstagramIcon />
            </div>
            <div className={styles.link}>
                <WatsappIcon />
            </div>
            <div className={styles.link}>
                <img src={telegramSrc} alt="telegram" />
            </div>
        </div>
    );
};

export default LinksSocials;
