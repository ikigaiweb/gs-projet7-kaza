import React, { useState } from "react";         // J'importe React + UseState
import "./SlideShow.css";                        // J'importe mon fichier css
import BtnSlider from "./BtnSlideShow";          // J'importe mon fichier comportant mes 2 fleches gauche et droite

export default function SlideShow(props) {       // Creation de la fonction qui va gerer le carroussel en fonction des demandes du parents (props)
    const [slideAnim, setSlideAnim] = useState({ // creation de mon index (qui me permet d'incrémenter ou de décrementer le passage de mes photos), slideAnim qui sera la "base de depart", et setSlideAnim qui sera la fonction qui mettra a jour notre UseState    
        index: 1,                                // je commence par la 1er photo              (au vue que j'ai 2 propriétés c'est donc un objet)
        inProgress: false,                       // Je "bloque" l'animation afin d'empecher le "spamClick" plus tard j'oblige a attendre 0,4 sec min pour passer a une autre photo
    });

    const nextSlide = () => {                                                       // Fonction qui va commander pour la photo suivante
        if (slideAnim.index !== props.img.length && !slideAnim.inProgress) {        // si le 1 de index est different du nombre de photo (du tableau) ET que different de JE NE SUIS PAS A LA FIN !slideAminProgress  dans ce cas opposé de false (donc true)
            setSlideAnim({ index: slideAnim.index + 1, inProgress: true });         // alors je vais juste augmenter l'index de 1 (en + simple je passe à la photo suivante)
            setTimeout(() => {                                                      // setTimeout() est une méthode qui appelle une fonction après un certain nombre de millisecondes.
                setSlideAnim({ index: slideAnim.index + 1, inProgress: false });    // mon slider sera "false" pendant 0,4 sec puis reviendra à true, puisque bloquer par le setTimeout
            }, 400);                                                                // au bout de 0,4 sec je renvoie un setSlideAmin (je bloque l'animation pendant 400 millisecondes)

        } else if (slideAnim.index === props.img.length && !slideAnim.inProgress) { // si le chiffre de la photo est egale au nombre de la longueur du tableau (en + simple je suis arrive a la derniere photo )
            setSlideAnim({ index: 1, inProgress: true });                           // alors index egal à 1 (en + simple je retourne a la premiere photo) inProgress je peux (true)
            setTimeout(() => {                                                      // setTimeout() est une méthode qui appelle une fonction après un certain nombre de millisecondes.
                setSlideAnim({ index: 1, inProgress: false });                      // mon slider sera "false" pendant 0,4 sec puis reviendra à true
            }, 400);                                                                // au bout de 0,4 sec je renvoie un setSlideAmin (je bloque l'animation pendant 400 millisecondes)
        }
    };

    console.log(props.img.length);                                                  // nombre total de photo ou longueur du tableau
    console.log(slideAnim.index);                                                   // classement de la photo ou position dans le tableau

    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {                       // si mon index est autre que 1 alors (+ simple c'est un bouton retour donc on doit etre au minimum a la 2nd) et que slideAnim.inProgress True
            setSlideAnim({ index: slideAnim.index - 1, inProgress: true });         // alors je vais juste decrementer l'index de 1 (en + simple je passe à la photo precedante)
            setTimeout(() => {                                                      // setTimeout() est une méthode qui appelle une fonction après un certain nombre de millisecondes.
                setSlideAnim({ index: slideAnim.index - 1, inProgress: false });    // mon slider sera "false" pendant 0,4 sec puis reviendra à true puisque bloquer par le setTimeout
            }, 400);                                                                // au bout de 0,4 sec je renvoie un setSlideAmin (je bloque l'animation pendant 400 millisecondes)
        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {                // Mais si je suis à la premiere photo et que je veux allez a la precedente (LA DERNIERE !)
            setSlideAnim({ index: props.img.length, inProgress: true });            // je retourne donc a la derniere photo, je en suis pas bloquer par progress (spamclicking)
            setTimeout(() => {                                                      // setTimeout() est une méthode qui appelle une fonction après un certain nombre de millisecondes.
                setSlideAnim({ index: props.img.length, inProgress: false });       // mon slider sera "false" pendant 0,4 sec puis reviendra à true 
            }, 400);                                                                // au bout de 0,4 sec je renvoie un setSlideAmin (je bloque l'animation pendant 400 millisecondes)
        }
    };

    return (
        <div className="container-slider">
            {props.img.map((obj, index) => {                                        // j'emploie la methode Map (qui me renvoie un nouveautableau) pour permettre d'afficher les differentes images / la valeur courante sera Obj
                return (
                    <div
                        key={obj.id + `${index + 1}`}                               // pour clé je l'id de mon objet  car il me faut une clé unique quand je retourne des listes (ce qui permet a Réact de mieux s'y retrouver en cas de suppression ou modification .....)
                        className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"} // SlideAnim.index est 1 (on parle donc de la 1er photo) est strictement egale à index + 1 (pt rappel un tableau commence à 0 et moi je l'ai commencé à 1). J'active son OPACITY à 1 (css)
                    >
                        <img src={obj} alt="Piece de la Maison" />                  
                    </div>                                                          // Je vais chercher mes images a la source (ici OBJ) puisqu'il est lié à "props.img.map"
                );
            })}

            {props.img.length > 1 && <BtnSlider moveSlide={nextSlide} direction={"next"} /> }
            {props.img.length > 1 && <BtnSlider  moveSlide={prevSlide} direction={"prev"} />}
            

            <div className="SlideShow-PageNumbers">
                {slideAnim.index} / {props.img.length}
            </div>
        </div>                                                                      // ce qui me permet d'afficher la position de la photo / la longueur du tableau
    );
}
