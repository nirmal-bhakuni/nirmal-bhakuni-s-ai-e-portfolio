import React from 'react';
import profileImg from './Profile.jpeg';

const AboutPage: React.FC = () => {
    const skills = {
        "Languages": ["C", "C++", "Python", "JavaScript"],
        "Frontend": ["React.js"],
        "Backend": ["C++", "Node.js (learning)"],
        "Database": ["MySQL"],
        "Tools": ["Git", "VS Code", "Linux", "ncurses"]
    };

    const interests = [
        "Competitive programming",
        "UI/UX design for terminal-based systems",
        "Open-source collaboration",
        "AI-driven automation tools"
    ];

    return (
        <section>
            <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Image Column */}
                <div className="md:col-span-4 flex justify-center">
                    <img
                        src={profileImg}
                        alt="Nirmal Bhakuni"
                        className="rounded-full w-52 h-52 sm:w-64 sm:h-64 object-cover border-4 border-cyan-500/30 shadow-lg"
                    />
                </div>

                {/* Text Column */}
                <div className="md:col-span-8 space-y-4 text-slate-300 text-base sm:text-lg">
                    <p>
                        Hello! I’m Nirmal Bhakuni, a passionate B.Tech student with a strong interest in software development, algorithms, and problem-solving. I love transforming ideas into real-world applications through clean and efficient code.
                    </p>
                    <p>
                        Throughout my academic journey, I’ve maintained excellent performance, scoring 96.2% in high school and 95.5% in intermediate, while actively participating in quiz competitions and chess championships.
                    </p>
                    <p>
                        I’m currently learning Python and JavaScript, and I’ve built several exciting projects — including a console-based Stock Portfolio Tracker in C and a Bus Route Finder using React, C++, and MySQL.
                    </p>
                    <p>
                        My goal is to become a skilled software engineer capable of designing scalable, impactful solutions that make a difference. I enjoy collaborating in teams, exploring new technologies, and constantly pushing my limits to learn more every day.
                    </p>
                </div>
            </div>

            {/* Skills and Interests Section */}
            <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-cyan-400">⚙️</span>
                            Technical Skills
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category}>
                                    <h4 className="font-semibold text-slate-200 mb-2">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map(skill => (
                                            <span key={skill} className="bg-slate-700 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-cyan-400">🚀</span>
                            Interests
                        </h3>
                        <ul className="space-y-2 text-slate-300 text-base sm:text-lg">
                            {interests.map(interest => (
                                <li key={interest} className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1.5 flex-shrink-0">▹</span>
                                    <span>{interest}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;