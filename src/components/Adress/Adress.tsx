import styles from "./Adress.module.scss";
import { ReactComponent as PointIcon } from "../../assets/svg/point.svg";

const Adress = () => {
    return (
        <div className={styles.adress}>
            <PointIcon />
            <div>
                <div className={styles.adress__city}>Ростов-на-Дону</div>
                <div className={styles.adress__street}>ул. Ленина, 2Б</div>
            </div>
        </div>
    );
};

export default Adress;
