
import React, { useState } from 'react';
import { REFLECTIONS } from '../constants';
import { ChevronDownIcon } from './icons/UiIcons';

const ReflectionItem: React.FC<{ reflection: typeof REFLECTIONS[0] }> = ({ reflection }) => {
  const [isOpen, setIsOpen] = useState(reflection.week === 1);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
      >
        <span className="text-lg font-semibold text-white">Week {reflection.week}: {reflection.title}</span>
        <ChevronDownIcon className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 px-2">
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {reflection.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const TakeawaysPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white text-center mb-2">PESE Lab Key Takeaways</h2>
      <p className="text-lg text-slate-400 text-center mb-12">My weekly reflections and growth journey.</p>
      <div className="max-w-3xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg">
        {REFLECTIONS.map(reflection => (
          <ReflectionItem key={reflection.week} reflection={reflection} />
        ))}
      </div>
    </section>
  );
};

export default TakeawaysPage;
