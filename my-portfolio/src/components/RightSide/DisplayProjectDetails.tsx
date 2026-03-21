import type { Project } from "./timelineType";

type Props = {
    projects: Project[];
};

const DisplayProjectDetails = ({ projects }: Props) => {
    return (
        <>
            {projects.map((project, index) => (
                <>
                    <div key={index} className="text-white font-semibold">{project.name}</div>
                    <p className="text-blue-200 text-sm mt-1 max-w-[600px]">
                        {project.about}
                    </p>
                    <ul className="list-disc ml-5">
                        {project.contributions.map((item) => (
                            <li className="text-blue-100">{item}</li>
                        ))}
                    </ul>
                </>
            ))}
        </>
    );
};

export default DisplayProjectDetails;