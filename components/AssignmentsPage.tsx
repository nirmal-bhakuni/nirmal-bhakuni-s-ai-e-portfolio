import React from 'react';
import { PdfIcon } from './icons/UiIcons';

const VideoPlaceholder: React.FC<{ title: string; description: string; videoUrl?: string }> = ({ title, description, videoUrl }) => {
  // Convert Google Drive view link to embed link
  const getEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        {videoUrl && (
          <iframe
            width="100%"
            height="400"
            src={getEmbedUrl(videoUrl)}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        )}
      </div>
    </div>
  );
};

const PdfPlaceholder: React.FC<{ title: string; description: string; downloadUrl: string }> = ({ title, description, downloadUrl }) => (
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
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-cyan-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-cyan-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400"
    >
      View PDF
    </a>
  </div>
);


const AssignmentsPage: React.FC = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-white text-center mb-2">Assignments & Coursework</h2>
      <p className="text-lg text-slate-400 text-center mb-12">A collection of my key assignments and coursework submissions.</p>

      {/* Video */}
      <VideoPlaceholder
        title="SWOC Analysis"
        description=""
        videoUrl="https://drive.google.com/file/d/1SDVExzN5IudVGAGxsBI5f_Pe_JVNUlNV/view?usp=sharing"
      />

      {/* PDF Placeholders */}
       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <PdfPlaceholder
          title="SWOC Analysis - 1"
          description="Concise summary showcasing my Strengths, Weaknesses, Opportunities, and Challenges."
          downloadUrl="https://drive.google.com/file/d/1S0nolmJcDyF-9Yu3LsdMIeJourcejcfp/view?usp=sharing"
        />
        <PdfPlaceholder
          title="SWOC Analysis - 2"
          description="Concise summary showcasing my Strengths, Weaknesses, Opportunities, and Challenges."
          downloadUrl="https://drive.google.com/file/d/1S2JX1L6R_v65WHLxotJC6lJtUxzjTn8v/view?usp=sharing"
        />
      </div>

    </section>
  );
};

export default AssignmentsPage;
