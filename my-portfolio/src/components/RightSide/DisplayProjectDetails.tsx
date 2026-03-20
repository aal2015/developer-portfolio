import type  { TimelineItem } from "./timelineType";

type Props = {
    projects: TimelineItem[];
};

const DisplayProjectDetails = ({ projects }: Props) => {
    console.log(projects);
    return <>Project Details</>
}

export default DisplayProjectDetails;