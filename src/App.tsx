// import styles from  "./App.scss";
import classNames from "classnames";
import styles from "./App.module.scss";
import { ReactComponent as LogoIcon } from "./assets/svg/logo.svg";
import { ReactComponent as WhatsappIcon } from "./assets/svg/whatsapp.svg";
import Adress from "./components/Adress/Adress";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={classNames(styles.header__top, "container")}>
                    <div className={styles.header__box}>
                        <a className={styles.header__logo} href="/">
                            <LogoIcon />
                        </a>
                        <Adress />
                    </div>

                    <div className={styles.header__box}>
                        <div className={styles.header__phone}>
                            <WhatsappIcon />
                            <a className={styles.phone} href="tel:+7(863) 000 00 00">
                                +7(863) 000 00 00
                            </a>
                        </div>
                        <Button variant="primary">Записаться на прием</Button>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul className={classNames(styles.nav__list, "container")}>
                        <li className={styles.nav__item}>
                            <a href="/">О клинике</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/">Услуги</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/">Специалисты</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/">Цены</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div style={{ width: "1920px", border: "1px solid black", margin: "0 auto" }}>1920</div>
            <Hero />
            <main></main>
            <footer></footer>
        </div>
    );
}

export default App;
