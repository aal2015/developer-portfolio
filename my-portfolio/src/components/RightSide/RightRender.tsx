import AboutMe from "./AboutMe";
import Skills from "./Skills";
import EducationWorkTimeline from "./EducationWorkTimeline";
import Research from "./Research";

const RightRender = () => {
    return (
        <>
            <section id="about" className="my-10">
                <AboutMe />
            </section>

            <hr className="border-t-3 border-white/10 my-8" />

            <section id="skills">
                <Skills />
            </section>

            <hr className="border-t-3 border-white/10 my-8" />

            <section id="experience" className="my-10">
                <EducationWorkTimeline />
            </section>

            <hr className="border-t-3 border-white/10 my-8" />

            <section id="research">
                <Research />
            </section>

            <p className="text-blue-100 text-center mt-3 mb-5">
                Designed and built from scratch with <span className="font-bold text-white">React (Vite)</span> and
                <span className="font-bold text-white"> Tailwind CSS</span>. Deployed on
                <span className="font-bold text-white"> Vercel</span>.
            </p>
        </>
    )
}

export default RightRender;