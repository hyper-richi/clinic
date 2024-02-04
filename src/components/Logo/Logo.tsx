import styles from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { FC } from "react";

type QLogoProps = {
    fill: string;
};
const Logo: FC<QLogoProps> = ({ fill }) => {
    return (
        <a className={styles.logo} href="/">
            <LogoIcon fill={fill} />
        </a>
    );
};

export default Logo;
