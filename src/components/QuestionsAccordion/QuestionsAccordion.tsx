import { FC, useState } from "react";
import type { Question } from "../../global/types/global";
import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg";
import styles from "./QuestionsAccordion.module.scss";
import Button from "../Button/Button";
import classNames from "classnames";
import parse from "html-react-parser";

type QuestionsAccordionProps = {
    question: Question;
};

const QuestionsAccordion: FC<QuestionsAccordionProps> = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen((prev) => !prev);

    return (
        <div className={styles.accordion}>
            <div className={styles.accordion__header}>
                <h3 className={styles.accordion__title}>{question.title}</h3>
                <Button
                    className={styles.accordion__btn}
                    onClick={toggleAccordion}
                    variant="clear"
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${question.id}`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </Button>
            </div>
            <div id={`accordion-content-${question.id}`} className={classNames(styles.accordion__content, { [styles.open]: isOpen })}>
                <p className={styles.accordion__description}>{parse(question.description)}</p>
            </div>
        </div>
    );
};

export default QuestionsAccordion;
