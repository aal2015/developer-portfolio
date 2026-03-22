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
        </>
    )
}

export default RightRender;