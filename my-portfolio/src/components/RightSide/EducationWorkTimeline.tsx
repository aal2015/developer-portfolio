import DisplayProjectDetails from "./DisplayProjectDetails";
import timelineData from "./timelineData";
import { FaExternalLinkAlt } from "react-icons/fa";

const EducationWorkTimeline = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-white mb-3">Experience</h2>

            {timelineData.map((item, index) => (
                <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-400 shadow-md"></div>

                    {/* Card */}
                    <div className="ml-4 p-4 rounded-lg hover:bg-white/5 transition">
                        {/* Year */}
                        <p className="text-sm text-blue-200">{item.year}</p>
                        {/* Title */}

                        <div className="flex justify-between">
                            <span className="text-white text-xl font-semibold max-w-[320px]">{item.name}</span>
                            <span className="text-white text-xl font-semibold">{item.title}</span>

                        </div>

                        {/* Badge */}
                        <div className="flex justify-between">

                            <span className="text-base text-blue-200"><span className={`fi fi-${item.flagCode}`}></span> {item.place}</span>
                            <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full
              ${item.type === "work"
                                    ? "bg-green-400/20 text-green-200"
                                    : item.type === "university"
                                        ? "bg-blue-400/20 text-blue-200"
                                        : "bg-purple-400/20 text-purple-200"
                                }
            `}>
                                {item.type === "work" && "Work"}
                                {item.type === "university" && "University"}
                                {item.type === "school" && "School"}
                            </span>
                        </div>

                        {item.pdf_link && (
                            <div className="mb-1">
                                <a
                                    href={item.pdf_link}
                                    className="text-blue-100 hover:text-white underline flex items-center gap-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.pdf_link_text} <FaExternalLinkAlt className="inline" />
                                </a>
                            </div>
                        )}

                        {item.description.length > 0 && (
                            <p className="text-blue-100 text-sm mt-2">
                                {item.description}
                            </p>
                        )}

                        {item.projects && <DisplayProjectDetails projects={item.projects} />}
                    </div>
                </div>
            ))}
        </>
    );
}

export default EducationWorkTimeline;