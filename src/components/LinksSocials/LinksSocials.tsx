import styles from "./LinksSocials.module.scss";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as WatsappIcon } from "../../assets/svg/whatsappFooter.svg";
import telegramSrc from "../../assets/svg/telegram.png";

const LinksSocials = () => {
    return (
        <div className={styles.links}>
            <InstagramIcon />
            <WatsappIcon />
            <img src={telegramSrc} alt="telegram" />
        </div>
    );
};

export default LinksSocials;
