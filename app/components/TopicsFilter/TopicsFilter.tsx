'use client'

import React from 'react';
import styles from '@/styles/styles.module.css';
import topicsData from '../../../data/topics.json';

interface TopicsFilterProps {
    onTopicChange: (topic: string) => void;
  }
  
  const TopicsFilter: React.FC<TopicsFilterProps> = ({ onTopicChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onTopicChange(e.target.value);
    };
  
    return (
      <select className={styles.topicFilter} name="topicFilter" id="topicFilter" onChange={handleChange}>
        <option value="">All Topics</option>
        {topicsData.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    );
  };

export default TopicsFilter;