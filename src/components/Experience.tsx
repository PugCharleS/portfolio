import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Experience: React.FC = () => {
    const { theme } = useTheme();

    const experiences = [
        {
            title: "Software Engineer",
            company: "Base Labs",
            type: "Full Time",
            companyUrl: "https://www.baselabs.mx/",
            duration: "Feb 2024 - Present",
            description: [
                "I spearheaded the development of a customer experience survey platform that empowered users to create surveys, collect responses, and generate automated reports with LLM-based analytics. The solution included interactive dashboards, response categorisation, and data export, automating 70% of manual tasks and improving decision-making efficiency.",
                "Designed and developed a solution to manage orders and contracts for smart locks, automating digital signature processes and status notifications to optimize leasing operations.",
                "Supervised the development of a business intelligence system to analyze the profitability of deliveries, reducing auditing time by at least 70%.",
                "I spearheaded the development of an automated domiciliation payment system for automotive loans, thereby enhancing accuracy and efficiency in payment management.",
                "I am responsible for project pipeline management, task assignment, and supervision of two junior developers, ensuring quality delivery through code reviews.",
            ],
        },
        {
            title: "Software Engineer",
            company: "Priori Search",
            type: "Full Time",
            companyUrl: "https://www.priorisearch.com/",
            duration: "Sept 2023 - Feb 2024",
            description: [
                "I've played a crucial role in every phase of software development. Contributing to our mission of making manual searches obsolete.",
                "Led the development of a Microsoft Word plugin that allowed lawyers to classify document clauses using Named Entity Recognition (NER) and generate a categorized database for easy reuse of common clauses. This reduced clause search time by an average of 3 hours through advanced filters, categorization by contract type.",
            ],
        },
        {
            title: "Software Engineer",
            company: "Platform Science",
            type: "Full Time",
            companyUrl: "https://www.platformscience.com/",
            duration: "Jul 2022 - Sept 2023",
            description: [
                "Maintained and developed endpoints for the company's main API, improving the stability and functionality of the services offered.",
                "Set up a RabbitMQ sandbox instance to simulate sending truck status heartbeats every 15 minutes, helpingclients understand the value of the service and increasing adoption.",
                "Developed a GraphQL gateway for the main PHP-based API, eliminating the need to frequently regenerate tokens and providing secure, efficient access for users and partners through roles and permissions.",
            ],
        },
        {
            title: "Trainee Software Developer",
            company: "Hexaware Technologies",
            type: "Internship",
            companyUrl: "https://hexaware.com/",
            duration: "Ene 2022 - May 2023",
            description: ["Mavericks Program."],
        },
        {
            title: "Trainee Software Developer",
            company: "Neoris",
            type: "Internship",
            companyUrl: "https://neoris.com/",
            duration: "Jun 2021 - Dic 2021",
            description: [
                "Elicitation of requirements.",
                "Active communication with the customers of diverse projects.",
                "Application of agile methods for project development.",
            ],
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h2
                className={`text-3xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
                Experience
            </h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
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
                            {exp.title} @{" "}
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-blue-500"
                            >
                                {exp.company}
                            </a>
                        </h3>
                        <h4
                            className={`text-l mb-2 ${
                                theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            {exp.type}
                        </h4>
                        <p
                            className={`text-sm mb-2 ${
                                theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }`}
                        >
                            {exp.duration}
                        </p>
                        <ul
                            className={`list-disc pl-5 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                        >
                            {exp.description.map((bullet, idx) => (
                                <li key={idx} className="mb-2">
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
