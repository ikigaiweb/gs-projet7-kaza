import React, { useState, useRef, useEffect } from "react";// j'importe useState UseRef et useEffect
import "./Dropdown.css";                                   // j'importe mon fichier css
import ArrowDown from "../ASSETS/arrow-up.png";            // j'importe ma "fleche"

export default function Dropdown(props) {                  // creation d'une fonction auquel on cree le lien props avec son parent (Location.js)
    const [toggle, setToogle] = useState(false);           // creation d'un useState *** (voir plus bas) false car on ne veux pas voir le Dropdown au départ
    const [heightEl, setHeightEl] = useState();            // Pour la hauteur de l'element 

    const toggleState = () => {                            // Version opposé à  const [toggle, setToogle] ... 
        setToogle(!toggle);                                // les 2 constantes vont de pair (l'une pour allumer l'autre pour éteindre)
    };
    const refHeight = useRef();                            //  on lui donne une reference (dans ce cas on parle de la hauteur du dropdown)

    useEffect(() => {                                      // Quand le Dropdown s'affiche alors ...
        setHeightEl(`${refHeight.current.scrollHeight}px`);// c'est une fonction callback (la hauteur de l'element selectionné)
    }, []);                                                // je rajoute [] vide à useEffect ce qui permet qu'il ne s'execute qu'une seule fois

    return (                                               // au click 
        <div className="mini-Dropdown">
            <div onClick={toggleState} className="mini-Dropdown-visible">
                <h3>{props.title}</h3>
                <img                                       // Petite fleche auquel j'ai rajouté une annimation permettant del'inver lors dur click
                    src={ArrowDown}
                    alt="fleche descendante"
                    className={
                        toggle                             // on a clické ? non (false) donc rien se passe . On a clické la fleche s'anime
                            ? "mini-Dropdown-visible img"  // Class (css) qui fait reference à ma fleche (descendante)
                            : "mini-Dropdown-visible img dropdown-arrow-animated"   // Class (css) qui fait reference à ma fleche (180°)
                    }
                />
            </div>

            <div
                ref={refHeight}                            // on prend la reference que l'on va utiliser plus haut avec un useEffect qui me servira a "donner" la hauteur voulu
                className={                                // lors du clique la class (css) 'dropdown-animated est activé'
                    toggle
                        ? "mini-Dropdown-toggle mini-Dropdown-toggle-box dropdown-animated"
                        : "mini-Dropdown-toggle mini-Dropdown-toggle-box-hidden"
                }
                style={{ minHeight: toggle ? `${heightEl}` : "0px" }}// j'ai cliqué ? oui donc je recupere la hauteur de l'element que j 'ai recupere au prealable sinon 0px
            >
                <div aria-hidden={toggle ? "true" : "false"}>{props.content}</div>
            </div>
        </div>
    );
}


/*
*** const est une variable d’état 
    les [] permet la déstructuration ou décomposition (il s'agit d'un tableau et non d'un objet)
    Toggle etant la valeur actuel
    setToogle est une fonction qui permet de modifier la valeur de cet état
        false étant la valeur initial du composant (la valeur de départ, on commence par false) (ca peut etre un chiffre, mot …. )

***** USESTATE *****
• useState est un hook, il nous renvoie une paire de valeurs dans un tableau de 2 éléments. 
• useState  permet de stocker les données qui sont retournées.

***** USEEFFECT *****
• useEffect permet d'effectuer des effets : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée.
• Le hook  useEffect  est appelé après chaque rendu de votre composant.

***** USEREF ***
• useRef vous permet de conserver des valeurs entre les rendus.
• Il peut être utilisé pour stocker une valeur modifiable qui ne provoque pas de nouveau rendu lors de la mise à jour.
• useRef()ne renvoie qu'un seul élément. Il renvoie un objet appelé current.

 {props.content} qui sera lie au texte (content) qui nous sera donné du parent 

*/