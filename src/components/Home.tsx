import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Github, Linkedin, FileText } from 'lucide-react'

const Home: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center animate-fade-in">
      <h1 className={`text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Carlos Solis Torres
      </h1>
      <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Full Stack Developer | Problem Solver
      </p>
      <div className="flex space-x-4 mb-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={`text-2xl ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
          <Github size={32} />
        </a>
        <a href="https://linkedin.com/in/carlos-solis-torres" target="_blank" rel="noopener noreferrer" className={`text-2xl ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
          <Linkedin size={32} />
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer" className={`text-2xl ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
          <FileText size={32} />
        </a>
      </div>
      <a
        href="wa.me/5579040682"
        className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200 ${
          theme === 'dark'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Get in Touch
      </a>
    </div>
  )
}

export default Home