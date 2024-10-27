import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const TechCarousel: React.FC = () => {
    const { theme } = useTheme();
    const technologies = [
        {
            name: "Typescript",
            icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            url: "https://www.typescriptlang.org/",
        },
        {
            name: "Python",
            icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
            url: "https://www.python.org/",
        },
        {
            name: "React",
            icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            url: "https://reactjs.org/",
        },
        {
            name: "Vue",
            icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            url: "https://vuejs.org/",
        },
        {
            name: "Node.js",
            icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
            url: "https://nodejs.org/",
        },
        {
            name: "Flask",
            icon: "https://cdn.worldvectorlogo.com/logos/flask.svg",
            url: "https://flask.palletsprojects.com/en/stable/",
        },
        {
            name: "Prisma",
            icon: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
            url: "https://www.prisma.io/",
        },
        {
            name: "GraphQL",
            icon: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg",
            url: "https://graphql.org/",
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
            url: "https://www.postgresql.org/",
        },
        {
            name: "Firebase",
            icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
            url: "https://firebase.google.com/",
        },
        {
            name: "Tailwind",
            icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
            url: "https://tailwindcss.com/",
        },
        {
            name: "Git",
            icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
            url: "https://git-scm.com/",
        },
        {
            name: "Docker",
            icon: "https://cdn.worldvectorlogo.com/logos/docker.svg",
            url: "https://www.docker.com/",
        },
        {
            name: "Google Cloud Platform",
            icon: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
            url: "https://cloud.google.com/",
        },
        // Duplicate the array to create a seamless loop
        {
            name: "Typescript",
            icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            url: "https://www.typescriptlang.org/",
        },
        {
            name: "Python",
            icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
            url: "https://www.python.org/",
        },
        {
            name: "React",
            icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            url: "https://reactjs.org/",
        },
        {
            name: "Vue",
            icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            url: "https://vuejs.org/",
        },
        {
            name: "Node.js",
            icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
            url: "https://nodejs.org/",
        },
        {
            name: "Flask",
            icon: "https://cdn.worldvectorlogo.com/logos/flask.svg",
            url: "https://flask.palletsprojects.com/en/stable/",
        },
        {
            name: "Prisma",
            icon: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
            url: "https://www.prisma.io/",
        },
        {
            name: "GraphQL",
            icon: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg",
            url: "https://graphql.org/",
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
            url: "https://www.postgresql.org/",
        },
        {
            name: "Firebase",
            icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
            url: "https://firebase.google.com/",
        },
        {
            name: "Tailwind",
            icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
            url: "https://tailwindcss.com/",
        },
        {
            name: "Git",
            icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
            url: "https://git-scm.com/",
        },
        {
            name: "Docker",
            icon: "https://cdn.worldvectorlogo.com/logos/docker.svg",
            url: "https://www.docker.com/",
        },
        {
            name: "Google Cloud Platform",
            icon: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
            url: "https://cloud.google.com/",
        },
    ];

    return (
        <div className="mt-8 w-full overflow-hidden">
            <h3
                className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
                Technologies I Work With
            </h3>
            <div className="flex animate-scroll">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 mx-1 sm:mx-2 md:mx-4 rounded-lg transition-transform duration-300 transform hover:scale-110 ${
                            theme === "dark"
                                ? "bg-gray-800 hover:bg-gray-700"
                                : "bg-white shadow hover:shadow-lg"
                        }`}
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1 sm:mb-2"
                        />
                        <span
                            className={`text-xs sm:text-sm ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                        >
                            {tech.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default TechCarousel;
