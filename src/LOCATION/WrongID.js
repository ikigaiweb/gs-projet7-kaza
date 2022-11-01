import React from 'react'
import { useParams } from 'react-router-dom';
import HouseData from '../ASSETS/HouseData';
import NotFound from '../404/NotFound';

export default function WrongID() {
    const { id } = useParams();                                           // on "déstructure l'ID" on retourne un useParams       
    const locationChosen = HouseData.findIndex((obj) => obj.id === id);   // FindIndex va me permettre de "travailler sur chaque élément du tableau" ****
    const allId = HouseData.map(element => element.id);
    const idWrong = allId.some((elmt) => elmt);
    const idWrongElmt = idWrong.elmt
    const locationChosenId = locationChosen.id
    const test = idWrongElmt !== locationChosenId 
    console.log(test);

  console.log(locationChosen);
  console.log(allId);
  console.log(id);
 console.log(idWrong.elmt === locationChosen.id);

  const IdError = () => {  
    if (test) {
        console.log("ID ERROR")
        return <NotFound />
  }}






  return (
    <div><IdError /></div>
  )
}
