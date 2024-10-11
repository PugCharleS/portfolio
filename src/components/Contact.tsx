import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Contact: React.FC = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          />
        </div>
        <div>
          <label htmlFor="message" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={`w-full p-2 rounded ${
              theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          ></textarea>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact