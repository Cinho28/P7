import Banner from "../components/banner/Banner";
import homeImage from "../assets/falaise.jpg";
import "./home.scss";
import data from "../data/data.json";
import Card from "../components/card/card";


function Home() {
    return (
        <div className="home">
        <Banner imageBanner={homeImage} text="Chez vous, partout et ailleurs" />
        <div className="wrapper">
            {data.map(({id, title, cover}) => (
                <Card key={id} id={id} title={title} cover={cover} />
            ))}
        </div>
        </div>

    
    );
}

export default Home;