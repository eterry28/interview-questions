import React from 'react';
import Question from '../Question/Question';
import styles from '@/styles/styles.module.css';

interface QuestionListProps {
  questions: Question[];
}
  
  const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {

  return (
    <ul className={styles.questionList}>
      {questions.map((question) => (
        <li key={question.id} className={styles.question}>
          <Question question={question} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;