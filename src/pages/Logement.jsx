import "./logement.scss";
import Carousel from "../components/Gallery";
import data from "../data/data.json";
import { useParams} from "react-router-dom";
import Rating from "../components/rating";
import Collapse from "../components/collapse";
import Error404 from "./Error404.jsx";


function Logement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);
    if (!logement) {
        return <Error404 />;
    }
    else {
        
        const { title, description, location, tags, host, rating, pictures, equipments, id } = logement;
        return (    
            <main className="logement">
                <Carousel pictures={pictures} key={id} />
                <section className="info">
                    <div className="info__wrapper">
                        <div className="info__left">
                               <h1 className="info__title">{title}</h1>
                               <h2 className="info__location">{location}</h2>
                            <div className="info__tag-wrapper">
                                {tags.map((tag, index) => (
                                    <span key={index} className="info__tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="info__right">
                            <div className="info__host">
                                <span className="info__host--name">{host.name}</span>
                                <img src={host.picture} alt={host.name} className="info__host--picture"/>
                            </div>
                                <Rating rating={rating} />                    
                        </div>
                            
                        </div>  
                        <div className="info__dropdowns">
                                <Collapse size="small"  content={description} title="Description" />
                                <Collapse size="small" content={equipments.map((equipment, index) => (      
                                    <li key={index}>{equipment}</li>
                                ))} title="Equipements" />
                    </div>
                </section>
            </main>
    
);
}
}

export default Logement;
