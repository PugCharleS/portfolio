import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Experience: React.FC = () => {
    const { theme } = useTheme();

    const studies = [
        {
            title: "Certificate in Digital Project Management",
            company: "MIU City University Miami",
            companyUrl:
                "https://educacion.miuniversity.edu/master-es/?utm_source=GOOGLE-BUSQ&utm_medium=Search&utm_campaign=MIU_LT_RL_X_X_X_X_X_MAR_X_LWEB_GLOB_Mix_ALL_AO_GOOGLE-BUS_BUS_GEN_X_CARIBEANGLO-PURA&utm_content=RL_Mix_X_X_X_X_X_MAR_BUSQ_CARIBEANGLO_TXT_CPC_GOOGLE-BUS_MIX_X_X_X&bi_campaignid=21442860690&bi_adgroupid=166019557882&gad_source=1&gclid=CjwKCAjwyfe4BhAWEiwAkIL8sDs8E62wL4LsqMxlAaHVTg_jc9RShnQ8QKgiBkFboNwY4NiNYhgxIhoCNH4QAvD_BwE",
            duration: "Jun 2024 - Sept 2024",
        },
        {
            title: "Master’s Degree in Web Site Management and Engineering",
            company: "Universidad de La Rioja",
            companyUrl: "https://www.unir.net/",
            duration: "Oct 2023 - Mar 2024",
        },
        {
            title: "Bachelor's Degree in Computer Systems Engineering",
            company: "Universidad del Valle de México",
            companyUrl:
                "https://uvm.mx/oferta-academica/licenciaturas-ejecutivas?&gad_source=1&gclid=CjwKCAjwyfe4BhAWEiwAkIL8sE4cMm5HUrhQ5vJYadVspcdoBxJ0RreCW2Xm11tYhXWsMGHlCq1neBoC-UYQAvD_BwE&gclsrc=aw.ds&hsa_acc=6702114222&hsa_ad=439740078465&hsa_cam=1728101885&hsa_grp=71438586921&hsa_kw=universidades%20en%20linea&hsa_mt=b&hsa_net=adwords&hsa_src=g&hsa_tgt=kwd-70097201&hsa_ver=3&trackid=goosrcaonxoluprgenzno&utm_campaign=aw_uvm_ao_lxo_do_sem_gen_universidad&utm_medium=ppc&utm_source=adwords&utm_term=universidades%20en%20linea",
            duration: "Feb 2018 - May 2022",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h2
                className={`text-3xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                }`}
            >
                Academic History
            </h2>
            <div className="space-y-8">
                {studies.map((exp, index) => (
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
                            {exp.title}
                        </h3>
                        <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-l hover:text-blue-500"
                        >
                            {exp.company}
                        </a>
                        <p
                            className={`text-sm mb-2 ${
                                theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }`}
                        >
                            {exp.duration}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
