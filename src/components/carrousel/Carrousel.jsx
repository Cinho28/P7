import "./carrousel.scss";
import { useState } from "react";
import Arrow from "../../assets/arrow-carrousel.png";



function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function nextslide() {
        currentIndex >= pictures.length -1 ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    }
    function prevslide() {
        currentIndex === 0 ? setCurrentIndex(pictures.length -1)
        : setCurrentIndex(currentIndex - 1);
    }

    return (
        <section className="carrousel">
            <img src={pictures[currentIndex]} className="carrousel__img"/>
            {pictures.length > 1 ? (
            <>
            <img src={Arrow} alt="flèche gauche" className="carrousel____arrow--left" onClick={prevslide} />
            <img src={Arrow} alt="flèche droite" className="carrousel____arrow--right" onClick={nextslide} />
            <span className="carrousel__counter">{currentIndex + 1} / {pictures.length}</span>
            </>
            ) : null}
        </section>
    );
}

export default Carousel;