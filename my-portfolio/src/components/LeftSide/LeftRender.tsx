import { useEffect, useState } from "react";
import profilePic from '../../assets/developer-pic.jpg';

import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
                <h1 className="text-5xl font-bold text-white">Abhinav Lugun</h1>
                <h2 className="text-2xl font-bold text-white py-2">Software Engineer</h2>
                <p className="text-blue-200">
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
                                ? "border-blue-800 text-blue-800"
                                : "border-transparent text-blue-200 hover:border-blue-200"
                            }`}
                    >
                        {section === "about" && "About Me"}
                        {section === "experience" && "Work Experience"}
                        {section === "skills" && "Skills"}
                    </button>
                ))}

            </nav>

            <div className="mt-8 flex flex-col gap-3 text-blue-200 text-sm">

                <div className="flex justify-center gap-6">

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <IoMdMail />
                        <span>abhinavlugun@yahoo.com</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <FaPhoneAlt />
                        <span>+91 92899 55569</span>
                    </div>

                </div>

                <div className="flex justify-center gap-6">

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <FaLinkedin />
                        <span>/in/abhinav-l-75b073120/</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 transition cursor-pointer">
                        <FaGithub />
                        <span>aal2015</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LeftRender