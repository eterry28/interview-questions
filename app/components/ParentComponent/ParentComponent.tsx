'use client';

import React, { useState } from 'react';
import QuestionList from '../QuestionList/QuestionList';
import TopicsFilter from '../TopicsFilter/TopicsFilter';
import questionsData from '../../../data/questions.json';

const ParentComponent: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [questions, setQuestions] = useState(questionsData);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    if (topic) {
      const filteredQuestions = questionsData.filter((question) => question.topic === topic);
      setQuestions(filteredQuestions);
    } else {
      setQuestions(questionsData);
    }
  };

  return (
    <div>
      <TopicsFilter onTopicChange={handleTopicChange} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default ParentComponent;