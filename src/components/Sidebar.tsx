import React from "react";
import {
    Home,
    Briefcase,
    FolderOpen,
    // Mail,
    FileText,
    Book,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeSection,
    setActiveSection,
}) => {
    const { theme } = useTheme();

    const navItems = [
        { id: "home", icon: Home, label: "Home" },
        { id: "experience", icon: Briefcase, label: "Experience" },
        { id: "projects", icon: FolderOpen, label: "Projects" },
        { id: "academics", icon: Book, label: "Academics" },
        // { id: "contact", icon: Mail, label: "Contact" },
        { id: "resume", icon: FileText, label: "Resume" },
    ];

    return (
        <nav
            className={`hidden md:flex flex-col w-64 min-h-screen p-5 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
            } border-r ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
            } flex-shrink-0`}
        >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center p-3 mb-2 rounded-lg transition-colors duration-200 ${
                        activeSection === item.id
                            ? theme === "dark"
                                ? "bg-gray-700 text-white"
                                : "bg-gray-200 text-gray-900"
                            : theme === "dark"
                            ? "text-gray-400 hover:bg-gray-700 hover:text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                >
                    <item.icon size={20} className="mr-3" />
                    {item.label}
                </button>
            ))}
        </nav>
    );
};

export default Sidebar;
