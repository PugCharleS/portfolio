import React, { useState } from 'react'
import { Menu, X, Home, Briefcase, FolderOpen, Mail, FileText } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface MobileNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const MobileNav: React.FC<MobileNavProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'resume', icon: FileText, label: 'Resume' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 p-2 rounded-md ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <nav className={`fixed inset-0 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} p-5 pt-16`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setIsOpen(false)
              }}
              className={`flex items-center w-full p-3 mb-2 rounded-lg transition-colors duration-200 ${
                activeSection === item.id
                  ? theme === 'dark'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-900'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}

export default MobileNav