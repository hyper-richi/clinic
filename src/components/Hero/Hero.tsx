import classNames from "classnames";
import styles from "./Hero.module.scss";
import heroSrc from "../../assets/webp/hero.webp";

const Hero = () => {
    return (
        <section className={classNames(styles.hero)}>
            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <div className={styles.hero__wrap}>
                        <div className={styles.hero__text}>
                            <h1 className={styles.hero__title}>Многопрофильная клиника для детей и взрослых</h1>
                            <p className={styles.hero__description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua
                            </p>
                        </div>
                    </div>
                    <div className={styles.hero__picture}>
                        <img className={styles.picture} src={heroSrc} alt="hero__picture" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
