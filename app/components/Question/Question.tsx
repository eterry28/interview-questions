import React from 'react';
import styles from '@/styles/styles.module.css';
import { BiUpvote, BiDownvote } from "react-icons/bi";

interface Question {
    id: number;
    title: string;
    description: string;
    topic: string;
    feedback: {
        id: number;
        text: string;
        upvotes: number;
        downvotes: number;
    }[];
    upvotes: number;
    downvotes: number;
}

interface QuestionProps {
    question: Question;
}

const Question: React.FC<QuestionProps> = ({ question }) => {

    return (
        <div className={styles.questionBox}>
            <div className={styles.questionLeft}>
                <button>
                    <BiUpvote />
                </button>
                <p>{question.upvotes}</p>
                <button>
                    <BiDownvote />
                </button>
            </div>
            <div className={styles.questionRight}>
                <p className={styles.questionTopic}>Topic: {question.topic}</p>
                <h3 className={styles.questionTitle}>{question.title}</h3>
                <p>{question.description}</p>                
                <p>Downvotes: {question.downvotes}</p>
                {question.feedback.length > 0 && (
                    <div className={styles.questionFeedback}>
                        <h4>Feedback</h4>
                        <ul>
                            {question.feedback.map((feedback) => (
                                <li key={feedback.id}>
                                    <p>{feedback.text}</p>
                                    <p>Upvotes: {feedback.upvotes}</p>
                                    <p>Downvotes: {feedback.downvotes}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Question;