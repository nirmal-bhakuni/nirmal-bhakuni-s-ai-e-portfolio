
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLinkIcon } from './icons/UiIcons';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        {project.url && (
           <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 ml-4">
             <ExternalLinkIcon className="w-5 h-5" />
           </a>
        )}
      </div>
      <p className="text-slate-300 mb-4">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map(tag => (
        <span key={tag} className="bg-slate-700 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white text-center mb-2">My Projects</h2>
      <p className="text-lg text-slate-400 text-center mb-12">A selection of technical projects I'm proud of.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;