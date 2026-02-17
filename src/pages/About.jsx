import Banner from "../components/banner";
import "./about.scss";
import bannerimg from "../assets/montagnes.png";
import about from "../data/about.json";
import Collapse from "../components/collapse";



function About() {
    return (
           <main className="about">
            <Banner text="" imageBanner={bannerimg} />
            <div className="about__wrapper">
            {about.map(({title, content}, index) => (
                <Collapse key={index} title={title} content={content} size="large" />
            ))}
            </div>

           </main>
    );
}
export default About;
