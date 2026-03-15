import { useEffect, useState } from "react"

const sections = ["about", "experience", "skills"]

const LeftRender = () => {

    const [activeSection, setActiveSection] = useState("about")

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    useEffect(() => {

        const container = document.getElementById("right-panel")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: container, // 👈 important
                threshold: 0.6
            }
        )

        sections.forEach((id) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()

    }, [])

    return (
        <>
            <h1 className="text-5xl font-bold">Abhinav Lugun</h1>
            <h2 className="text-2xl font-bold py-2">Software Engineer</h2>
            <p>
                Software engineer passionate about solving problems through code,
                building reliable backend systems and creative web experiences.
            </p>

            <nav className="flex flex-col gap-1 mt-10">

                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`text-left pl-4 py-2 border-l-2 transition font-medium
              ${activeSection === section
                                ? "border-black text-black"
                                : "border-transparent text-gray-500 hover:border-gray-400 hover:text-black"
                            }`}
                    >
                        {section === "about" && "About Me"}
                        {section === "experience" && "Work Experience"}
                        {section === "skills" && "Skills"}
                    </button>
                ))}

            </nav>
        </>
    )
}

export default LeftRender