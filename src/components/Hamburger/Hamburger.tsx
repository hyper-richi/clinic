import React, { FC, useState } from "react";
import { Fade } from "hamburger-react";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
    onCloseMobileNav: () => void;
    onShowMobileNav: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ onCloseMobileNav, onShowMobileNav }) => {
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
                            onShowMobileNav();
                        } else {
                            // close a menu
                            onCloseMobileNav();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Hamburger;
