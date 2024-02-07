import classNames from "classnames";
import styles from "./App.module.scss";
import { ReactComponent as WhatsappIcon } from "./assets/svg/whatsapp.svg";
import Adress from "./components/Adress/Adress";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import Questions from "./components/Questions/Questions";
import Slide from "./components/Slide/Slide";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import LinksSocials from "./components/LinksSocials/LinksSocials";
import MakeAppointmentModal from "./components/MakeAppointmentModal/MakeAppointmentModal";
import { useState } from "react";
import Hamburger from "./components/Hamburger/Hamburger";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={classNames(styles.header__top, "container")}>
                    <div className={styles.header__box}>
                        <Hamburger setOpenMobileMenu={setOpenMobileMenu} />
                        <Logo variant="header" fill={"#0DBC91"} />
                        <Adress />
                        <div className={styles.adress_mobile}>
                            <a className={styles.phone_mobile} href="tel:+7(863) 000 00 00">
                                +7(863) 000 00 00
                            </a>
                            <div className={styles.adress__city_mobile}>Ростов-на-Дону</div>
                        </div>
                    </div>

                    <div className={styles.header__box__phone}>
                        <div className={styles.header__phone}>
                            <WhatsappIcon />
                            <a className={styles.phone} href="tel:+7(863) 000 00 00">
                                +7(863) 000 00 00
                            </a>
                        </div>
                        <Button variant="primary" onClick={() => setOpenModal(true)}>
                            Записаться на прием
                        </Button>
                    </div>
                </div>
                <Nav variant="header" />
                {openMobileMenu && <MobileNav setOpenModal={setOpenModal} />}
            </header>
            <Hero />
            <main className={styles.main}>
                <div className={styles.container}>
                    <Questions />
                    <Slide setOpenModal={setOpenModal} />
                </div>
            </main>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__content}>
                        <div className={styles.footer__direction}>
                            <Logo variant="footer" fill={"#FFFFFF"} />
                            <Nav variant="footer" />
                        </div>
                        <LinksSocials />
                    </div>
                </div>
            </footer>
            <MakeAppointmentModal isOpen={openModal} setOpenModal={setOpenModal} />
        </div>
    );
}

export default App;
