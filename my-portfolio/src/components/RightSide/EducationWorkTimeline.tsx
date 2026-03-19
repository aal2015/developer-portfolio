const timeline = [
    {
        year: "2024",
        title: "Software Developer",
        name: "Sonzai Labs",
        place: "Singapore Startup (Remote)",
        type: "work",
        description: "Built backend systems and implemented scalable APIs."
    },
    {
        year: "2023",
        title: "Software Developer",
        name: "AIBL",
        place: "Thai Startup (Onsite)",
        type: "work",
        description: "Worked on full-stack development and system design."
    },
    {
        year: "2022",
        title: "Master’s in Computer Science",
        name: "Asian Institue of Technology Thailand",
        place: "Thailand",
        type: "university",
        description: "Focused on AI and software engineering."
    },
    // {
    //     year: "2018",
    //     title: "High School (International)",
    //     place: "India • Thailand • (3rd country)",
    //     type: "school",
    //     description: "Studied across multiple countries, gaining global exposure."
    // }
]

const EducationWorkTimeline = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-white">Time Line of Education and Work</h2>
            {timeline.map((item, index) => (
                <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-400 shadow-md"></div>

                    {/* Card */}
                    <div className="ml-4 p-4 rounded-lg hover:bg-white/5 transition">
                        {/* Year */}
                        <p className="text-sm text-blue-200">{item.year}</p>
                        {/* Title */}
                        <h3 className="text-white text-lg font-semibold">
                            {item.title}
                        </h3>

                        {/* Badge */}
                        <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full
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
                </div>
            ))}
        </>
    );
}

export default EducationWorkTimeline;