import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import TechCarousel from './TechCarousel'

const About: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className="max-w-3xl mx-auto animate-slide-in">
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-blob"></div>
            <img
              src="https://via.placeholder.com/200"
              alt="Carlos Solis Torres"
              className="absolute inset-2 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm a passionate Full Stack Developer with a strong background in AI and machine learning. With over 5 years of experience in the tech industry, I've worked on a wide range of projects, from developing scalable web applications to implementing cutting-edge AI solutions.
          </p>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            My expertise lies in JavaScript, Python, and various modern web technologies. I'm always eager to learn new skills and stay up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
      <TechCarousel />
    </div>
  )
}

export default About