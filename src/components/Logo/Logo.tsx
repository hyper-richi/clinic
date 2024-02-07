import styles from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { FC } from "react";
import classNames from "classnames";

interface LogoProps {
    fill: string;
    width?: string;
    height?: string;
    variant: "footer" | "header";
}

const Logo: FC<LogoProps> = ({ fill, width, height, variant }) => {
    return (
        <a className={classNames(styles.logo, [styles[variant]])} href="/" >
            <LogoIcon fill={fill} />
        </a>
    );
};

export default Logo;
