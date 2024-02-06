import React, { FC, useState } from "react";
import { Fade } from "hamburger-react";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
    setOpenMobileMenu: (value: boolean) => void;
}

const Hamburger: FC<HamburgerProps> = ({ setOpenMobileMenu }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={styles.hamburger}>
            <div className="lg:hidden ">
                <Fade
                    toggled={isOpen}
                    size={36}
                    toggle={setOpen}
                    onToggle={(toggled) => {
                        if (toggled) {
                            // open a menu
                            setOpenMobileMenu(true);
                        } else {
                            // close a menu
                            setOpenMobileMenu(false);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Hamburger;
