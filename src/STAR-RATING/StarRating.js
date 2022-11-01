import React from "react";                                           // J'importe React 
import "./StarRating.css";                                           // J'importe mon Css
import OrangeStar from "./OrangeStar.png";                           // J'importe mon image d'etoile orange
import LightGreyStar from "./LightGreyStar.png";                     // J'importe mon image d'etoile argenté

function StarRating(props) {
    const OrangeStars = () => {                                      // je cree une fonction à propos de l'etoile orange ce qui me permet de la declarer comme img et aussi de lui ajouter un alt
        return <img src={OrangeStar} alt="Orange star" />;
    };
    console.log(props.id);                                           // me donne l'ID de la page location
    console.log(props.starValue);                                    // me donne le nombre d'etoile accordé

    const LightGreyStars = () => {                                   // je cree une fonction à propos de l'etoile argenté ce qui me permet de la declarer comme img et aussi de lui ajouter un alt
        return <img src={LightGreyStar} alt="Silver star" />;        
    };

    return (
        <div className="starRating ">
            {Array.from({ length: props.starValue }, (a, b) => (     // Permet de recreer un tableau (length etant la propriété de Array)
                <OrangeStars key={props.starValue + b} />            // Création d'une clé unique
            ))}
            {Array.from({ length: 5 - props.starValue }, (a, b) => ( // Permet de recreer un tableau en partant de 5 - (etoiles oranges) = etoiles argentées
                <LightGreyStars key={props.starValue + b} />         // Création d'une clé unique
            ))}
        </div>
    );
}
export default StarRating;
