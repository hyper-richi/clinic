import classNames from "classnames";
import styles from "./MobileNav.module.scss";
import { FC } from "react";
import Button from "../Button/Button";

interface MobileNavProps {
    setOpenModal: (value: boolean) => void;
}

const MobileNav: FC<MobileNavProps> = ({ setOpenModal }) => {
    return (
        <nav className={classNames(styles.nav)}>
            <ul className={classNames(styles.nav__list)}>
                <li className={styles.nav__item}>
                    <a href="/clinic">О клинике</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/clinic">Услуги</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/clinic">Специалисты</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/clinic">Цены</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/clinic">Контакты</a>
                </li>
            </ul>
            <Button className={styles.btn} variant="primary" onClick={() => setOpenModal(true)}>
                Записаться на прием
            </Button>
        </nav>
    );
};

export default MobileNav;
