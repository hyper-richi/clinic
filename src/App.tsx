// import styles from  "./App.scss";
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
import { useCallback, useState } from "react";

function App() {
    const [openModal, setOpenModal] = useState(false);

    const onShowModal = useCallback(() => {
        setOpenModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={classNames(styles.header__top, "container")}>
                    <div className={styles.header__box}>
                        <Logo fill={"#0DBC91"} />
                        <Adress />
                    </div>

                    <div className={styles.header__box}>
                        <div className={styles.header__phone}>
                            <WhatsappIcon />
                            <a className={styles.phone} href="tel:+7(863) 000 00 00">
                                +7(863) 000 00 00
                            </a>
                        </div>
                        <Button variant="primary" onClick={onShowModal}>
                            Записаться на прием
                        </Button>
                    </div>
                </div>
                <Nav variant="header" />
            </header>
            {/*  <div style={{ width: "1920px", border: "1px solid black", margin: "0 auto" }}>1920</div> */}
            <Hero />
            <main className={styles.main}>
                <div className="container">
                    <Questions />
                    <Slide />
                </div>
            </main>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__content}>
                        <Logo fill={"#FFFFFF"} />
                        <Nav variant="footer" />
                        <LinksSocials />
                    </div>
                </div>
            </footer>
            <MakeAppointmentModal isOpen={openModal} onClose={onCloseModal} />
        </div>
    );
}

export default App;
