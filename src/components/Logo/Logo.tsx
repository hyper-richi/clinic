import styles from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { FC } from "react";
import classNames from "classnames";

interface LogoProps {
    variant: "footer" | "header";
}

const Logo: FC<LogoProps> = ({ variant }) => {
    return (
        <a className={classNames(styles.logo, [styles[variant]])} href="/clinic">
            <LogoIcon />
        </a>
    );
};

export default Logo;
