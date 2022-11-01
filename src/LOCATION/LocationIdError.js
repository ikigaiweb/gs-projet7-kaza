import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HouseData from "../ASSETS/HouseData";

export default function LocationIdError() {
    const { id } = useParams();

    const locationIdErrorChosen = HouseData.findIndex((obj) => obj.id === id);
    console.log(locationIdErrorChosen);
    console.log(id);

    const navigate = useNavigate();

    const locationError = () => {
        if (locationIdErrorChosen === -1) {
            navigate("/NotFound");
        }
    };
    useEffect(() => {
        locationError();
    });

    return console.log("super");
}
