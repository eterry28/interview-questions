import React from 'react';
import styles from './AddQuestionForm.module.css';

const AddQuestionForm: React.FC = () => {

    return (
        <form action="/" method='post' className={styles.addQuestionForm}>
            <div className={styles.formGroup}>
            <label>Create A Question</label>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="topic">Topic:</label>
                <input type="text" id="topic" name="topic" placeholder="Enter Topic" />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="question">Question:</label>
                <input type="textarea" id="question" name="question" placeholder="Enter Question" />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="description">Description:</label>
                <input type="textarea" id="description" name="description" placeholder="Enter Description" />
            </div>

            <div className={styles.formGroup}>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default AddQuestionForm;