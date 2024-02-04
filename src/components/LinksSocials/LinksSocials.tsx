import styles from "./LinksSocials.module.scss";
import { ReactComponent as WhatsappIcon } from "../../assets/svg/whatsappFooter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../assets/svg/telegram.svg";

const LinksSocials = () => {
    return (
        <div className={styles.links}>
            <InstagramIcon />
            <WhatsappIcon />
            <TelegramIcon />
        </div>
    );
};

export default LinksSocials;
