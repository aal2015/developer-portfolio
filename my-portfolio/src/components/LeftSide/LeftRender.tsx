import { useEffect, useState } from "react";
import profilePic from '../../assets/developer-pic.jpg';

import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const sections = ["about", "skills", "experience", "research"]

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

                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Software Engineer
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Full Stack
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Web3
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        AI
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Cloud
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Telegram Bot
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                        Agile
                    </span>
                </div>
            </div>

            <h4 className="mt-10 text-center text-xl font-semibold text-white">Sections</h4>
            <nav className="flex gap-4 mt-3 justify-center">
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`px-5 py-2 rounded-full transition font-semibold
      ${activeSection === section
                                ? "bg-white/20 text-white"
                                : "text-blue-200 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {section === "about" && "About Me"}
                        {section === "experience" && "Experience"}
                        {section === "skills" && "Skills"}
                        {section === "research" && "Research"}
                    </button>
                ))}
            </nav>

            <h4 className="mt-10 text-center text-xl font-semibold text-white">Contacts</h4>
            <div className="mt-3 flex flex-col gap-3 text-blue-200 text-sm">

                <div className="flex justify-center gap-6">

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition">
                        <IoMdMail />
                        <span>abhinavlugun@yahoo.com</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition">
                        <FaPhoneAlt />
                        <span>+91 92899 55569</span>
                    </div>

                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/abhinav-l-75b073120/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition cursor-pointer"
                    >
                        <FaLinkedin />
                        <span>/in/abhinav-l-75b073120/</span>
                    </a>

                    <a
                        href="https://github.com/aal2015"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition cursor-pointer"
                    >
                        <FaGithub />
                        <span>aal2015</span>
                    </a>
                </div>

            </div>
        </>
    )
}

export default LeftRender