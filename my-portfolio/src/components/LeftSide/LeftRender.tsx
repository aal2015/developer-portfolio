const LeftRender = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)

        console.log("Click")
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Software Engineer</h2>
            <h1 className="text-5xl font-bold">Abhinav Lugun</h1>

            <p>
                Software engineer passionate about solving problems through code,
                building reliable backend systems and creative web experiences.
            </p>

            <p>Keywords:</p>

            <nav className="flex flex-col gap-3 mt-6">

                <button onClick={() => scrollToSection("about")}>
                    About
                </button>

                <button onClick={() => scrollToSection("experience")}>
                    Work Experience
                </button>

                <button onClick={() => scrollToSection("skills")}>
                    Skills
                </button>

            </nav>


            <p>Contacts</p>
        </>
    )
}

export default LeftRender;