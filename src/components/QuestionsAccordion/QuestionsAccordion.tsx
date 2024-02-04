import { FC, useState } from "react";
import type { Question } from "../../global/types/global";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg";
import styles from "./QuestionsAccordion.module.scss";
import Button from "../Button/Button";

type QuestionsAccordionProps = {
    question: Question;
};

const QuestionsAccordion: FC<QuestionsAccordionProps> = ({ question }) => {
    const [closeAccordion, setCloseAccordion] = useState(true);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__header}>
                <h3 className={styles.accordion__title}>{question.title}</h3>

                <Button className={styles.accordion__btn} onClick={() => setCloseAccordion(!closeAccordion)} variant="clear">
                    {closeAccordion ? <PlusIcon /> : <MinusIcon />}
                </Button>
            </div>
            {!closeAccordion && <p className={styles.accordion__description}>{question.description}</p>}
        </div>
    );
};

export default QuestionsAccordion;
