import styles from "./MakeAppointmentModal.module.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ReactComponent as SpinnerIcon } from "../../assets/svg/spinnerIcon.svg";

interface MakeAppointmentModalProps {
    isOpen: boolean;
    setOpenModal: (value: boolean) => void;
}

interface FormInput {
    fullName: string;
    email: string;
    phone: string;
}

const MakeAppointmentModal = ({ isOpen, setOpenModal }: MakeAppointmentModalProps) => {
    const [loading, setLoading] = useState(false);
    const [statusSend, setStatusSend] = useState<"success" | "error" | "">("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInput>();
    console.log("errors: ", errors);

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
                setOpenModal(false);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [statusSend, reset, setOpenModal]);

    return (
        <Modal className="MakeAppointmentModal" isOpen={isOpen} onClose={() => setOpenModal(false)}>
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
                                style={{ borderColor: errors.fullName && "red" }}
                            />
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
                                style={{ borderColor: errors.phone && "red" }}
                            />
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
                                style={{ borderColor: errors.email && "red" }}
                            />
                        </div>
                        {errors.email && <span className={styles.error}>Все поля должны быть заполнены </span>}
                    </div>
                    <Button className={styles.form__btn} disabled={loading} variant="primary" type="submit">
                        {loading ? <SpinnerIcon /> : "Записаться"}
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default MakeAppointmentModal;
