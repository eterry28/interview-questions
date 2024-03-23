import React from 'react';
import styles from '../styles/styles.module.css';
import ParentComponent from '@/app/components/ParentComponent/ParentComponent';
import AddQuestionForm from '@/app/components/AddQuestionForm/AddQuestionForm';
import Layout from './components/layout';

const Home: React.FC = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.containerLeft}>  
        <AddQuestionForm />
      </div>
      <div className={styles.containerRight}>
        <h1 className={styles.heading}>Interview Questions</h1>
        <ParentComponent />
      </div>
    </div>
    </Layout>
  );
};

export default Home;