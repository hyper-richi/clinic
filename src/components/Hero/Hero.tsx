import classNames from "classnames";
import styles from "./Hero.module.scss";
import heroSrc from "../../assets/webp/hero.webp";
const Hero = () => {
    return (
        <section className={classNames(styles.hero, "container")}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                    Многопрофильная <br />
                    клиника для детей
                    <br /> и взрослых
                </h1>
                <p className={styles.hero__description}>
                    Lorem ipsum dolor sit amet, consectetur
                    <br /> adipiscing elit, sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            <div className={styles.hero__picture}>
                <div className={styles.picture__box}>
                    <img className={styles.picture} src={heroSrc} alt="hero__picture" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
