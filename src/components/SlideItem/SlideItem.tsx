import { FC } from "react";
import Button from "../Button/Button";
import type { SlideItem as ISlideItem } from "../../global/types/global";
import styles from "./SlideItem.module.scss";
import classNames from "classnames";

type SlideItemProps = { item: ISlideItem; className: string };

export const SlideItem: FC<SlideItemProps> = ({ item, className }) => {
    return (
        <div className={classNames(styles.slide__item, `${className}`)} /* style={{ backgroundImage: `url(${item.pictureSrc})` }} */>
            <div className={styles.slide__bg}>
                <img className={styles.slide__picture} src={item.pictureSrc} alt="hero__picture" />
            </div>
            <div className={styles.slide__content}>
                <svg width="100%" height="100%" viewBox="0 0 613 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5C0 2.23857 2.23858 0 5 0H494.949L613 440H4.99999C2.23857 440 0 437.761 0 435V5Z" fill="#E2F0EF" />
                </svg>
                <div className={styles.content__info}>
                    <h2 className={styles.content__title}>{item.title}</h2>
                    <div className={styles.content__target}>{item.target}</div>
                    <ul className={styles.content__list}>
                        {item.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <div className={styles.content__price}>
                        <span className={styles.price__total}>{"Всего: " + item.total + "₽"}</span>
                        <span className={styles.price__discount}>{item.discount + "₽"}</span>
                    </div>
                    <div className={styles.content__btns}>
                        <Button variant="primary" onClick={() => {}}>
                            Записаться
                        </Button>
                        <Button variant="outline" onClick={() => {}}>
                            Подробнее
                        </Button>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};
