import styles from "./MakeAppointmentModal.module.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useCallback, useState } from "react";

interface MakeAppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MakeAppointmentModal = ({ isOpen, onClose }: MakeAppointmentModalProps) => {
    const [fullName, setFullName] = useState("");

    const onChangeFullName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }, []);

    return (
        <Modal className='MakeAppointmentModal' isOpen={isOpen} onClose={onClose}>
            <div className={styles.modal__contetnt}>
                <div className={styles.modal__description}>
                    <h1 className={styles.modal__title}>
                        Запишитесь <br /> на приём онлайн
                    </h1>
                    <p className={styles.modal__text}>
                        Администратор свяжется с вами через <br /> WhatsApp в течение дня и уточнит детали
                    </p>
                </div>
                <div className={styles.modal__form}>
                    <div className={styles.input__wrapper}>
                        <input value={fullName} onChange={onChangeFullName} className={styles.input} placeholder={"ФИО"} />
                        <input value={fullName} onChange={onChangeFullName} className={styles.input} placeholder={"Номер телефона"} />
                        <input
                            value={fullName}
                            onChange={onChangeFullName}
                            className={styles.input}
                            placeholder={"Электронная почта"}
                        />
                    </div>
                    <Button variant="primary" /* disabled={isLoading} onClick={onLoginClick} */>Записаться</Button>
                </div>
            </div>
        </Modal>
    );
};

export default MakeAppointmentModal;
