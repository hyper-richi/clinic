import classNames from "classnames";
import styles from "./Modal.module.scss";
import { FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import type { Mods } from "../../global/types/global";
import Button from "../Button/Button";
import { ReactComponent as XIcon } from "../../assets/svg/x.svg";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(className, styles.modal, mods)}>
                <div className={styles.overlay}>
                    <div className={styles.content} onClick={onContentClick}>
                        <Button className={styles.button__close} variant="clear" onClick={closeHandler}>
                            <XIcon />
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
