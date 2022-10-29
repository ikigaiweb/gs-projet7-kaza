import React from "react";
import "./Avatar.css";

export default function AvatarMobile(props) {
    return (
        <div className="Avatar-container-mobile">
            <div className="Avatar-NomPrenom">{props.name}</div>
            <div className="Avatar-PicFace">
                <img src={props.picture} alt="propriétaire" />
            </div>
        </div>
    );
}
/* Creation de l'"Avatar"  avec son nom + sa photo Version Mobile */