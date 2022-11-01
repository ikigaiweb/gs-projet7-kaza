import React from "react";
import "./Location.css";
import HouseData from "../ASSETS/HouseData";
import { useParams } from "react-router-dom";

export default function Tag(props) {
    const { id } = useParams();
    const locationTagChosen = HouseData.findIndex((obj) => obj.id === id);
    const myTags = HouseData[locationTagChosen].tags;
    console.log(myTags);
    console.log(locationTagChosen);

    return (
        <div className="Location-Tag">
            <div className="Location-Tag h4">{props.content}</div>
        </div>
    );
}
