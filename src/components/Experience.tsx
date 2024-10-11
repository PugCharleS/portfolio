import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Experience: React.FC = () => {
  const { theme } = useTheme()

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Globant",
      companyUrl: "https://www.globant.com/",
      duration: "May 2022 - Present",
      description: "Working on various projects for clients, focusing on web development using React, Node.js, and AWS technologies."
    },
    {
      title: "Software Engineer",
      company: "Wizeline",
      companyUrl: "https://www.wizeline.com/",
      duration: "Aug 2021 - May 2022",
      description: "Developed and maintained web applications using React, Redux, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Full Stack Developer",
      company: "Luxoft",
      companyUrl: "https://www.luxoft.com/",
      duration: "Feb 2020 - Aug 2021",
      description: "Worked on financial software solutions, utilizing Angular, Java Spring, and SQL databases. Implemented RESTful APIs and microservices architecture."
    }
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
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
              {exp.title} at <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">{exp.company}</a>
            </h3>
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {exp.duration}
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience