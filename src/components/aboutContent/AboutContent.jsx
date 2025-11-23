import { useState } from "react";
import "./aboutContent.scss";

function AboutContent({title, content}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div className="categorie" >
            <div className="categorie__wrapper"onClick={toggleOpen}>
            <h2 className="categorie__title">{title}</h2>
            <img src = "src\assets\arrow-about.png" alt="arrow" className={isOpen ? "categorie__arrow categorie__arrow--open" : "categorie__arrow"} />
            </div>
            <article className={isOpen ? "categorie__content categorie__content--open" : "categorie__content"}>
           {content}
            </article>
        </div>
      
    );
}

export default AboutContent;