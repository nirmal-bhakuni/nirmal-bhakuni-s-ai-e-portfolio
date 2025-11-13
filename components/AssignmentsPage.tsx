import React from 'react';
import { PlayIcon, PdfIcon } from './icons/UiIcons';

const PdfPlaceholder: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col items-start text-left hover:border-cyan-400/50 transition-colors duration-300 h-full">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 text-cyan-400">
        <PdfIcon className="w-8 h-8" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
      </div>
    </div>
    <p className="text-slate-300 flex-grow mb-6">{description}</p>
    <button
      onClick={() => alert('This is a placeholder download link.')}
      className="mt-auto bg-slate-700 text-slate-200 font-semibold py-2 px-5 rounded-lg hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
    >
      Download PDF
    </button>
  </div>
);


const AssignmentsPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white text-center mb-2">Assignments & Coursework</h2>
      <p className="text-lg text-slate-400 text-center mb-12">A collection of my key assignments and coursework submissions.</p>

      {/* Video Placeholder */}
      <div className="max-w-3xl mx-auto mb-16">
         <div className="bg-slate-800/30 border-2 border-dashed border-slate-600 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center hover:border-cyan-500/50 transition-colors duration-300 cursor-pointer">
            <PlayIcon className="w-12 h-12 text-slate-400" />
            <div>
                <h3 className="text-xl font-semibold text-white">Course Overview Video</h3>
                <p className="text-slate-400">A 1-minute summary of the course structure and key learnings.</p>
            </div>
        </div>
      </div>

      {/* PDF Placeholders */}
       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <PdfPlaceholder
          title="Assignment 1: AI Ethics Report"
          description="An in-depth analysis of the ethical implications of autonomous decision-making in artificial intelligence systems."
        />
        <PdfPlaceholder
          title="Assignment 2: Machine Learning Model"
          description="A practical implementation of a machine learning model to predict housing prices based on a given dataset, including model training and evaluation."
        />
      </div>

    </section>
  );
};

export default AssignmentsPage;
