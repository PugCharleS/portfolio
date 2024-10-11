import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Projects: React.FC = () => {
  const { theme } = useTheme()

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A web application that uses natural language processing to intelligently categorize and prioritize tasks.",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      url: "https://github.com/yourusername/ai-task-manager"
    },
    {
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce solution with real-time inventory management and personalized recommendations.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
      url: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology for small to medium-sized organizations.",
      technologies: ["Solidity", "Web3.js", "React", "Truffle"],
      url: "https://github.com/yourusername/blockchain-voting"
    }
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white shadow hover:shadow-xl'
            } animate-slide-in`} 
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.title}
              </a>
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 text-sm rounded ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects