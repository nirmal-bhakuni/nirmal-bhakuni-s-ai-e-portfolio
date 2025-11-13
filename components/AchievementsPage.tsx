
import React from 'react';
import { PERSONAL_ACHIEVEMENTS } from '../constants';
import { PersonalAchievement } from '../types';
import { TrophyIcon } from './icons/UiIcons';

const AchievementCard: React.FC<{ achievement: PersonalAchievement }> = ({ achievement }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-center gap-4 hover:border-cyan-400/50 transition-colors duration-300">
    <div className="flex-shrink-0 text-cyan-400">
      <TrophyIcon className="w-8 h-8" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
      <p className="text-slate-300">{achievement.description}</p>
    </div>
  </div>
);


const AchievementsPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white text-center mb-2">Accomplishments & Awards</h2>
      <p className="text-lg text-slate-400 text-center mb-12">Key milestones and recognitions in my journey.</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {PERSONAL_ACHIEVEMENTS.map(achievement => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
      </div>
    </section>
  );
};

export default AchievementsPage;