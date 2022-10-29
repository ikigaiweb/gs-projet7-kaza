import React from "react";                            // j'importe Réact
import "./Location.css";                              // j'importe mon CSS
import Dropdown from "../DROPDOWN/Dropdown-Mini";     // j'importe le composant dropdown mini
import { useParams } from "react-router-dom";         // j'importe UseParams (me permet de decortiquer l'url et dans ce cas de recuperer l'ID)
import HouseData from "../ASSETS/HouseData.js";       // j'importe mes données
import StarRating from "../STAR-RATING/StarRating.js";// j'importe le composant qui me permet ne noté les étoiles
import SlideShow from "../SLIDESHOW/SlideShow";       // j'importe le composant du carrousselle
import Avatar from "../AVATAR/Avatar";                // j'importe le composant qui me permet d'afficher la photo du proprietaire
import AvatarMobile from "../AVATAR/AvatarMobile";    // j'importe le composant qui me permet d'afficher la photo du proprietaire version Mobile

function Location() {
    const { id } = useParams();                       // on "déstructure l'ID" on retourne un useParams

    const LocationChosen = HouseData.findIndex((obj) => obj.id === id);   // FindIndex va me permettre de "travailler sur chaque élément du tableau" ****
    console.log(LocationChosen);                                          //  et dans ce cas je vais récuperer chaque id de mes données                   

    return (
        <div className="Location-main">
            <div className="Location-Carrousel">
                <SlideShow                                                //  j'importe le composant du carrousselle ICI 
                    img={HouseData[LocationChosen].pictures}              // avec ses images ( lier au props.img dans les fichiers enfants)
                    id={HouseData[LocationChosen].id}                     // en fonction de l'ID 
                />
            </div>

            <div className="titre-PicFace">
                <h1>{HouseData[LocationChosen].title}</h1> 
                <Avatar                                                   // j'importe mon composant Avatar 
                    name={HouseData[LocationChosen].host.name}            // je recupere le nom du proprietaire de chacune .... des données
                    picture={HouseData[LocationChosen].host.picture}      // sa photo appropriée selon les données
                    key={HouseData[LocationChosen].host.name}             // sa clé unique
                />
            </div>
            <h2>{HouseData[LocationChosen].location}</h2>
            <div className="Location-DropDown-space-between">
                <div className="flex">
                    <div className="Location-Tag">
                        <h4>{HouseData[LocationChosen].tags[0]}</h4>
                    </div>
                    <div className="Location-Tag">
                        <h4>{HouseData[LocationChosen].tags[1]}</h4>
                    </div>
                    <div className="Location-Tag">
                        <h4>{HouseData[LocationChosen].tags[2]}</h4>
                    </div>
                </div>
                <div className="Location-Rate">
                    <StarRating                                           // j'importe le composant des notes etoilé 
                        id={HouseData[LocationChosen].id}                 // je recupere l'Id de chaque .... des données
                        starValue={HouseData[LocationChosen].rating}
                        key={HouseData[LocationChosen].id + `${HouseData[LocationChosen].rating}`} // sa clé unique
                    />
                </div>
            </div>
            <div className="Stars-Name-Pic">
                <div className="Location-Rate-Mobile">
                    <StarRating                                           // j'importe le composant
                        starValue={HouseData[LocationChosen].rating}      // je recupere sa note  ex : 2 etoiles sur 5 
                        id={HouseData[LocationChosen].id}                 // je recupere l'Id de chaque .... des données
                    />
                </div>{" "}
                <div className="Avatar-container-mobile">
                    <AvatarMobile                                         // j'importe le composant
                        name={HouseData[LocationChosen].host.name}        // je recupere le nom du proprietaire de chacune .... des données
                        picture={HouseData[LocationChosen].host.picture}  // je recupere la photo du proprietaire de chacune .... des données
                        key={HouseData[LocationChosen].host.name}         // sa clé unique
                    />
                </div>
            </div>

            <div className="Location-DropDown-space-between">
                <Dropdown                                                 // j'importe le composant DropDown qui sera lié a la description 
                    title="Description"
                    content=<p>{HouseData[LocationChosen].description}</p>// je recupere la "description" de chaque appartement
                    key={HouseData[LocationChosen].description}           // sa clé unique
                />
                <Dropdown                                                 // j'importe le composant qui me donnera les equipement de chaque appart depuis mes données
                    title="Equipement"
                    content={
                        <ul>
                            <li>{HouseData[LocationChosen].equipments[0]}</li>
                            <li>{HouseData[LocationChosen].equipments[1]}</li>
                            <li>{HouseData[LocationChosen].equipments[2]}</li>
                            <li>{HouseData[LocationChosen].equipments[3]}</li>
                            <li>{HouseData[LocationChosen].equipments[4]}</li>
                            <li>{HouseData[LocationChosen].equipments[5]}</li>
                        </ul>
                    }
                    key={HouseData[LocationChosen].equipments}            // sa clé unique
                />
            </div>
        </div>
    );
}

export default Location;

/* 
**** 
findIndex() exécute une fonction pour chaque élément du tableau.
findIndex() renvoie l'index (position) du premier élément qui réussit un test.
findIndex() renvoie -1 si aucune correspondance n'est trouvée.
findIndex() n'exécute pas la fonction pour les éléments de tableau vides.
findIndex() ne modifie pas le tableau d'origine.

https://www.w3schools.com/jsref/jsref_findindex.asp

*/