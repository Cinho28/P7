import { useState } from "react";
import "./collapse.scss";
import arrow from "../../assets/arrow-about.png";

function Collapse({title, content, size }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div className={`categorie`} >
            <div className={`categorie__wrapper categorie__wrapper--${size}`} onClick={toggleOpen}>
            <h2 className="categorie__title">{title}</h2>
            <img src={arrow} alt="arrow" className={isOpen ? "categorie__arrow categorie__arrow--open" : "categorie__arrow"} />
            </div>
            <article className={isOpen ? `categorie__content categorie__content--open-${size}` : "categorie__content"}>
           {content}
            </article>
        </div>
      
    );
}

export default Collapse;