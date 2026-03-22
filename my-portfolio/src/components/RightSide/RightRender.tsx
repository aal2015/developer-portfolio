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

            <section id="skills">
                <Skills />
            </section>

            <section id="experience" className="my-10">
                <EducationWorkTimeline />
            </section>

            <section id="research">
                <Research />
            </section>
        </>
    )
}

export default RightRender;