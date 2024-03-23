import React, { ReactNode } from 'react';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Header content */}
        <nav>
          <ul>
            <li>Home</li>
            <li>Interviews</li>
            <li>Onboarding</li>
            <li>Skill Assessment</li>
            <li>Career Path</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <aside className={styles.sidebar}>
        {/* Sidebar content */}
        <ul>
          <li>Interview Questions</li>
          <li>Candidates</li>
          <li className={styles.subItem}>Blind 1</li>
          <li className={styles.subItem}>Blind 2</li>
          <li className={styles.subItem}>Blind 3</li>          
          <li>Tracking</li>
          {/* Add more sidebar items */}
        </ul>
      </aside>
    </div>
  );
};

export default Layout;