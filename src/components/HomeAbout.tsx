import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Github, Linkedin, FileText } from "lucide-react";
import TechCarousel from "./TechCarousel";

const HomeAbout: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
            <div className="text-center mb-8">
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                    Carlos Manuel Solis Torres
                </h1>
                <p
                    className={`text-sm sm:text-base md:text-lg mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    Full Stack Developer | Problem Solver
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                    <a
                        href="https://github.com/PugCharleS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl sm:text-2xl ${
                            theme === "dark"
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/carlos-solis-torres"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl sm:text-2xl ${
                            theme === "dark"
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xl sm:text-2xl ${
                            theme === "dark"
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        <FileText size={24} />
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center mb-8">
                <div className="w-full mb-6 sm:mb-8">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-blob">
                            <img
                                src="/images/profile.jpeg"
                                alt="Carlos Solis Torres"
                                className="absolute rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full text-center sm:text-left">
                    <h2
                        className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                    >
                        About Me
                    </h2>
                    <p
                        className={`text-sm sm:text-base mb-3 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        I'm a passionate Full Stack Developer. With over 2 years
                        of experience in the tech industry and start ups work
                        environment, I've worked on a wide range of projects,
                        from developing scalable web applications, APIs to
                        implementing cutting-edge AI solutions.
                    </p>
                    <p
                        className={`text-sm sm:text-base mb-4 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        My expertise lies in JavaScript, Python, and various
                        modern web technologies. I'm always eager to learn new
                        skills and stay up-to-date with the latest industry
                        trends.
                    </p>
                    <a
                        href="#contact"
                        className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-200 ${
                            theme === "dark"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            <TechCarousel />
        </div>
    );
};

export default HomeAbout;
