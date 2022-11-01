import "./Home.css";                             // J'importe mon css
import HouseData from "../ASSETS/HouseData.js";  // j'importe mes données
import { Link } from "react-router-dom";         // Me permet de creer mes liens

export default function Home() {                 // création d'une fonction que j'exporte directement

    const correctId = () => {
        if
        ("/logement/" + HouseData.id) {
            console.log(HouseData.id);
        }
    else {
        <Link to={"/*"} />
    }
    }
    
    return (                                     // voila comment je vux qu'elle me retourne ma page
        <div className="main">
            <div className="banner">
                <div className="filtreSombre"></div>
                <p>Chez vous, partout et ailleurs</p>
            </div>

            <div className="gallery">
                {HouseData.map((HouseData) => (                                          // Recreéation d'un nouveau tableau (map) de mes données (HouseData)
                    <Link {...correctId}to={"/logement/" + HouseData.id} key={HouseData.id}>
                        <div className={["thumb", "filtreGradient "].join(" ")}>
                            <div                                                         // creation /logement + l'id qui sera donné au click sur l'image
                                className="HomeImg"
                                style={{ backgroundImage: `url(${HouseData.cover})` }}   // Chaque carré sera en lien avec l'image "cover" qui se trouve dans les données
                            ></div>
                            <p className="thumb-p">{HouseData.title}</p>
                        </div>
                    </Link>                                                              // fin du lien     {HouseData.title} etant le titre de chaque image correspondant
                ))}
            </div>
        </div>
    );
}
