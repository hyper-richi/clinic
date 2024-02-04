import { ButtonHTMLAttributes, FC } from "react";
import { TMods } from "../../global/types/global";
import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonVariant = "outline" | "primary" | "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: ButtonVariant;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, variant, disabled, ...otherProps } = props;
    const mods: TMods = {
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(styles.Button, mods, [className, styles[variant]])}
            {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
