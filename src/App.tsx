import React, { useState, lazy, Suspense } from 'react'
import { Sun, Moon } from 'lucide-react'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import { ThemeProvider } from './contexts/ThemeContext'

const HomeAbout = lazy(() => import('./components/HomeAbout'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Resume = lazy(() => import('./components/Resume'))

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <ThemeProvider>
      {({ theme, toggleTheme }) => (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm z-50"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <div className="flex">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1 p-4 md:p-8 pt-16">
              <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
                {activeSection === 'home' && <HomeAbout />}
                {activeSection === 'experience' && <Experience />}
                {activeSection === 'projects' && <Projects />}
                {activeSection === 'contact' && <Contact />}
                {activeSection === 'resume' && <Resume />}
              </Suspense>
            </main>
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}

export default App