import { FC, useMemo, useRef, useState } from "react";
import { SlideItem } from "../SlideItem/SlideItem";
import styles from "./Slide.module.scss";
import "./Slide.module.scss";
import data from "../../db.json";
import { ReactComponent as LeftArrowIcon } from "../../assets/svg/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/svg/right-arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button/Button";
import React from "react";

interface SlideProps {
    setOpenModal: (value: boolean) => void;
}

const Slide: FC<SlideProps> = ({ setOpenModal }) => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const updateIndex = (swiperInstance: SwiperType) => {
        if (swiperInstance === null) return;
        const currentSlide = swiperInstance?.activeIndex;
        setCurrentIndex(currentSlide);
    };

    const totalSlide = useMemo(() => data.slideData.length, []);

    return (
        <div className={styles.slide}>
            <Swiper
                className={styles.swiper}
                modules={[Pagination, Navigation]}
                grabCursor={true}
                slidesPerView={1}
                initialSlide={currentIndex}
                onActiveIndexChange={updateIndex}
                pagination={{
                    type: "fraction",
                    el: ".slide__pagination",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onBeforeInit={(swiper: SwiperCore) => {
                    swiperRef.current = swiper;
                }}>
                {data.slideData.map((item, i) => {
                    return (
                        <SwiperSlide className={styles.swiper__slide} key={i}>
                            {({ isActive }) => (
                                <SlideItem setOpenModal={setOpenModal} item={item} className={`${isActive ? "active" : ""}`} />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={styles.slide__button}>
                <Button disabled={!currentIndex} variant="clear" onClick={() => swiperRef.current?.slidePrev()}>
                    <LeftArrowIcon fill={!currentIndex ? "#E1E1E1" : "#0DBC91"} />
                </Button>
                <div className={styles.slide__count}>
                    <span className={styles.slide__current}>{currentIndex + 1}</span>
                    <span className={styles.slide__total}>/{totalSlide}</span>
                </div>
                <Button disabled={currentIndex === 2} variant="clear" onClick={() => swiperRef.current?.slideNext()}>
                    <RightArrowIcon fill={currentIndex === 2 ? "#E1E1E1" : "#0DBC91"} />
                </Button>
            </div>
        </div>
    );
};

export default Slide;
