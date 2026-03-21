import type { Project } from "./timelineType";

type Props = {
    projects: Project[];
};

const DisplayProjectDetails = ({ projects }: Props) => {
    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className={`grid gap-4 mb-6 ${project.image ? 'grid-cols-[2fr_0.8fr]' : 'grid-cols-1'}`}>

                    {/* Left: Text Content */}
                    <div>
                        <div className="text-white font-semibold">{project.name}</div>
                        <p className="text-blue-200 text-sm mt-1">
                            {project.about}
                        </p>
                        <ul className="list-disc ml-5">
                            {project.contributions.map((item, i) => (
                                <li key={i} className="text-blue-100">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image (only if provided) */}
                    {project.image && (
                        <div className="flex items-center justify-center">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-40 h-28 object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default DisplayProjectDetails;