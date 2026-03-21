export type Project = {
    name: string;
    about: string;
    contributions: string[];
};

export type TimelineItem = {
    year: string;
    title: string;
    name: string;
    place: string;
    flagCode: string;
    type: "work" | "university";
    description: string;
    projects?: Project[];
};