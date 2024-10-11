import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Resume: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h2
        className={`text-3xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        Resume
      </h2>
      {/* <div className="mb-6">
        <a
          href="/carlos_solis_torres_resume.pdf"
          download
          className={`inline-flex items-center px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <Download size={20} className="mr-2" />
          Download Resume
        </a>
      </div> */}
      <div className="aspect-w-8 aspect-h-11">
        <iframe
          src="/cv.pdf"
          className="w-full h-full"
          style={{ minHeight: '800px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
