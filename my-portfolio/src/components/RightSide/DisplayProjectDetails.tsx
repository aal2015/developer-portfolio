import type { Project } from "./timelineType";

type Props = {
    projects: Project[];
};

const DisplayProjectDetails = ({ projects }: Props) => {
    return (
        <>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`grid gap-4 mb-6 ${project.image
                            ? 'grid-cols-1 md:grid-cols-[2fr_0.8fr]'
                            : 'grid-cols-1'
                        }`}
                >

                    {/* Image */}
                    {project.image && (
                        <div className="flex items-center justify-center order-1 md:order-2">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-40 h-28 object-cover rounded-lg"
                            />
                        </div>
                    )}

                    {/* Text */}
                    <div className="order-2 md:order-1">
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

                </div>
            ))}
        </>
    );
};

export default DisplayProjectDetails;