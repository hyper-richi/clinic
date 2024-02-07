import data from "../../db.json";
import QuestionsAccordion from "../QuestionsAccordion/QuestionsAccordion";
import styles from "./Questions.module.scss";

const Questions = () => {

    return (
        <div className={styles.questions}>
            <h2 className={styles.questions__title}>Часто задаваемые вопросы</h2>
            <div className={styles.questions__list}>
                {data && data.questionsData.map((question) => <QuestionsAccordion key={question.id} question={question} />)}
            </div>
        </div>
    );
};

export default Questions;
