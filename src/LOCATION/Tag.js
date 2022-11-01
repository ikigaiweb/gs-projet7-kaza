import React from 'react'
import './Location.css'
import HouseData from '../ASSETS/HouseData';
import { useParams } from 'react-router-dom';

export default function Tag(props) {
  const { id } = useParams();   
  const locationTagChosen = HouseData.findIndex((obj) => obj.id === id);
  const myTags = HouseData[locationTagChosen].tags;
console.log(myTags);
console.log(locationTagChosen);


  return (
    
    <div className='Location-Tag'>
 <div className='Location-Tag h4'>
{props.content}
</div>
  </div>




  )
  
 }
 
    
    
    


/*
const TagId = HouseData.findIndex((obj) => obj.id === id);
    console.log(TagId);

    const NumberOfTags = HouseData[TagId].tags.length;
    console.log(NumberOfTags);

    const NumbersOfTagsParsed = parseInt(NumberOfTags);
    console.log(NumbersOfTagsParsed);

    const NameOfTags = HouseData[TagId].tags;
    console.log(NameOfTags);

 { myTags.map((myTag) => (
  <h4 key={myTag.id} >{myTag}</h4>
  ))} 




    <div className='Location-Tag '>
    <div className='.Location-Tag h4'>
   <h4>{myTags[0]}</h4>
   </div></div>  

   <div className='Location-Tag '>
    <div className='.Location-Tag h4'>
   <h4>{myTags[1]}</h4>
   </div></div>  

   <div className='Location-Tag '>
    <div className='.Location-Tag h4'>
   <h4>{myTags[2]}</h4>
   </div></div>  

   <div className='Location-Tag '>
    <div className='Location-Tag h4'>
   <h4>{myTags[3]}</h4>
   </div></div>  

*/