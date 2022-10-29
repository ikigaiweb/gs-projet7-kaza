import React from "react"; // J'importe React + UseState
import "./StarRating.css";
import OrangeStar from "./OrangeStar.png";
import LightGreyStar from "./LightGreyStar.png";
import HouseData from "../ASSETS/HouseData";

function StarRating(props) {
	const OrangeStars = () => {
		return <img src={OrangeStar} alt="Orange star" />;
	};
	console.log(props.id);
	console.log(props.starValue);
	
	
    const LightGreyStars = () => {
		return <img src={LightGreyStar} alt="Silver star" />;
	};

	return (
		<div className="starRating " >
       
			{Array.from({length: props.starValue}, (a,b) => (
				<OrangeStars key={props.starValue + b}/>
			))}
            {Array.from({length: 5 - (props.starValue)}, (a,b) => (
                <LightGreyStars key={props.starValue +b}/>))}
		</div>
	);
}
export default StarRating;


