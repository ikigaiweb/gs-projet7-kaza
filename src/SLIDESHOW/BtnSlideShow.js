import React from "react";
import leftArrow from "../ASSETS/arrow-back.png";          // j'importe l'image "fleche vers l'avant"
import rightArrow from "../ASSETS/arrow-forward.png";      // j'importe l'image "fleche vers l'avant"
import "./SlideShow.css";                                  // J'importe mon fichier css

export default function BtnSlider({ direction, moveSlide }) {  // c'est du destructuring correspond a props.direction et props.moveSlide
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}            // *** si je clique sur (class) next j'applique  class "btn-slide next"  sinon ce sera prev
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt="icone flèche" /> 
        </button>                                                                             // si c 'est next je mets la fleche en direction de la droite
    );
}
/*
*** ca me permet avec le CSS de placer le bouton prev à Gauche et le bouton next à droite 

*/