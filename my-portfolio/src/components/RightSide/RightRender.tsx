import AboutMe from "./AboutMe";
import Skills from "./Skills";
import EducationWorkTimeline from "./EducationWorkTimeline";

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

            <section id="reseach">
                <h2 className="text-3xl font-bold">Research</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>

            

        </>
    )
}

export default RightRender;