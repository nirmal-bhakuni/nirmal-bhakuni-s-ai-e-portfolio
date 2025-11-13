import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AchievementsPage from './components/AchievementsPage';
import TakeawaysPage from './components/TakeawaysPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import Chatbot from './components/Chatbot';
import AssignmentsPage from './components/AssignmentsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'takeaways':
        return <TakeawaysPage />;
      case 'skills':
        return <SkillsPage />;
      case 'assignments':
        return <AssignmentsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-cyan-300/20">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {renderPage()}
      </main>
      <Chatbot />
    </div>
  );
};

export default App;