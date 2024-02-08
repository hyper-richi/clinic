import classNames from "classnames";
import styles from "./Nav.module.scss";
import { FC } from "react";

interface NavProps {
    variant: "footer" | "header";
}

const Nav: FC<NavProps> = ({ variant }) => {
    return (
        <nav className={classNames(styles.nav, [styles[variant]])}>
            <div className={styles.nav__container}>
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
            </div>
        </nav>
    );
};

export default Nav;
