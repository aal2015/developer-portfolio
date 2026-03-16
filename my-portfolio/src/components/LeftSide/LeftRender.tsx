import { useEffect, useState } from "react";
import profilePic from '../../assets/developer-pic.jpg';

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
            <div className="flex flex-col items-center text-center">
                <img
                    src={profilePic}
                    alt="Abhinav Lugun"
                    className="w-40 h-40 rounded-full object-cover"
                />
                <h1 className="text-5xl font-bold text-blue-900">Abhinav Lugun</h1>
                <h2 className="text-2xl font-bold text-blue-700 py-2">Software Engineer</h2>
                <p className="text-gray-500">
                    Software engineer passionate about solving problems through code,
                    building reliable backend systems and creative web experiences.
                </p>
            </div>

            <nav className="flex gap-4 mt-10 justify-center">

                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`rounded-full px-5 py-2 border transition font-semibold
            ${activeSection === section
                                ? "border-blue-900 text-blue-900 bg-blue-100"
                                : "border-transparent text-blue-600 hover:border-blue-600"
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