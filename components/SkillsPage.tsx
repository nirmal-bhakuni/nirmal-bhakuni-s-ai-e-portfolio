
import React from 'react';
import { PRACTICAL_SKILLS, SOFT_SKILLS } from '../constants';
import { CodeIcon, UsersIcon } from './icons/UiIcons';

const SkillCard: React.FC<{ title: string; skills: string[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
        <div className="flex items-center justify-center mb-6 gap-3">
            {icon}
            <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
            {skills.map(skill => (
                <span key={skill} className="bg-slate-700 text-slate-200 text-base font-medium px-4 py-2 rounded-lg shadow-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);


const SkillsPage: React.FC = () => {
    return (
        <section>
            <h2 className="text-4xl font-bold text-white text-center mb-2">My Skillset</h2>
            <p className="text-lg text-slate-400 text-center mb-12">A blend of technical expertise and interpersonal strengths.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <SkillCard title="Practical Skills" skills={PRACTICAL_SKILLS} icon={<CodeIcon className="w-7 h-7 text-cyan-400" />} />
                <SkillCard title="Soft Skills" skills={SOFT_SKILLS} icon={<UsersIcon className="w-7 h-7 text-cyan-400" />} />
            </div>
        </section>
    );
};

export default SkillsPage;