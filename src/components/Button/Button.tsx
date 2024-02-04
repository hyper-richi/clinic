import { ButtonHTMLAttributes, FC } from "react";
import { Mods } from "../../global/types/global";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "outline" | "primary" | "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: ButtonVariant;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, variant, disabled, ...otherProps } = props;
    const mods: Mods = {
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(styles.button, mods, [className, styles[variant]])}
            {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
