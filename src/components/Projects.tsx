import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Projects: React.FC = () => {
    const { theme } = useTheme();

    const projects = [
        {
            title: "Vaultify",
            description:
                "In progress - A web application for securing and sharing password across users, generate .env files out of vaults",
            technologies: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Docker",
                "GCP",
                "Appsmith",
            ],
            url: "https://github.com/PugCharleS/vaultify",
        },
        {
            title: "Image Search App",
            description:
                "A mini project to practice HTML, CSS and JS, Developed a image search app with a pinterest style.",
            technologies: ["HTML", "CSS", "JS"],
            url: "https://nuggz-image-search-app.netlify.app/",
        },
        {
            title: "Weather App",
            description:
                "A mini project to practice HTML, CSS and JS, Developed a weather app.",
            technologies: ["HTML", "CSS", "JS"],
            url: "https://nuggz-weather-app.netlify.app/",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h2
                className={`text-3xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
                Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-1">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                            theme === "dark"
                                ? "bg-gray-800 hover:bg-gray-700"
                                : "bg-white shadow hover:shadow-xl"
                        } animate-slide-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <h3
                            className={`text-xl font-semibold mb-2 ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <p
                            className={`mb-4 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                        >
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className={`px-2 py-1 text-sm rounded ${
                                        theme === "dark"
                                            ? "bg-gray-700 text-gray-300"
                                            : "bg-gray-200 text-gray-700"
                                    }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <h3 className="mt-4 mb-2">
                            <a
                                href={project.url}
                                className="underline text-blue-600"
                                target="_blank"
                            >
                                Check it out!
                            </a>
                        </h3>
                        {!project.url.includes("github") ? (
                            <div className="mt-4 border rounded-md p-2">
                                <iframe
                                    className="w-full aspect-video"
                                    src={project.url}
                                >
                                    {project.url}
                                </iframe>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
