import styles from "./MakeAppointmentModal.module.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ReactComponent as SpinnerIcon } from "../../assets/svg/spinnerIcon.svg";

// spinnerIcon
interface MakeAppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormInput {
    fullName: string;
    email: string;
    phone: string;
}

const MakeAppointmentModal = ({ isOpen, onClose }: MakeAppointmentModalProps) => {
    const [loading, setLoading] = useState(false);
    const [statusSend, setStatusSend] = useState<"success" | "error" | "">("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInput>();

    /*  const onChangeFullName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }, []); */

    const onSubmit = async (data: FormInput) => {
        setLoading(true);
        const templateParams = {
            ...data,
        };
        emailjs
            .send("service_i7dgwv9", "template_lls6jqk", templateParams, "mx6jSj1PdEHuB4ray")
            .then(() => {
                setLoading(false);
            })
            .then((result) => {
                console.log("SUCCESS!", result);
                setStatusSend("success");
                reset();
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setStatusSend("error");
            });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (statusSend === "success") {
                setStatusSend("");
                onClose();
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [statusSend, reset, onClose]);

    return (
        <Modal className="MakeAppointmentModal" isOpen={isOpen} onClose={onClose}>
            <div className={styles.modal__contetnt}>
                {statusSend === "success" && <span className={styles.success}>Сообщение успешно отправлено!</span>}
                <div className={styles.modal__description}>
                    <h1 className={styles.modal__title}>
                        Запишитесь <br /> на приём онлайн
                    </h1>
                    <p className={styles.modal__text}>
                        Администратор свяжется с вами через <br /> WhatsApp в течение дня и уточнит детали
                    </p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__group}>
                        <div className={styles.input__group}>
                            <label htmlFor="fullName" className={styles.label}>
                                ФИО
                            </label>
                            <input
                                type="text"
                                {...register("fullName", { required: true })}
                                placeholder="ФИО"
                                className={styles.input}
                            />
                            {errors.fullName && <span className={styles.error}>Заполните обязательное поле</span>}
                        </div>
                        <div className={styles.input__group}>
                            <label htmlFor="phone" className={styles.label}>
                                Номер телефона
                            </label>
                            <input
                                type="text"
                                {...register("phone", { required: true })}
                                placeholder="Номер телефона"
                                className={styles.input}
                            />
                            {errors.phone && <span className={styles.error}>Заполните обязательное поле</span>}
                        </div>
                        <div className={styles.input__group}>
                            <label htmlFor="email" className={styles.label}>
                                Электронная почта
                            </label>
                            <input
                                type="text"
                                {...register("email", { required: true })}
                                placeholder="Электронная почта"
                                className={styles.input}
                            />
                            {errors.email && <span className={styles.error}>Заполните обязательное поле</span>}
                        </div>
                    </div>
                    <Button
                        className={styles.form__btn}
                        disabled={loading}
                        variant="primary"
                        type="submit" /* disabled={isLoading} onClick={onLoginClick} */
                    >
                        {loading ? <SpinnerIcon /> : "Записаться"}
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default MakeAppointmentModal;
