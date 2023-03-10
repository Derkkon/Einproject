import React, { useState } from 'react';
import {db} from '../config/Firebase';


const Ploegen = () => {
    const [info , setInfo] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
 
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("Spelers").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var Spelers = element.Spelers();
                setInfo(arr => [...arr , Spelers]);
                 
            });
        })
    }
    return (
        <div>
            <center>
            <h2>Student Details</h2>
            </center>
         
        {
            info.map((Spelers) => (
            <Frame gd={Spelers.Geboortedatum}
                   naam={Spelers.Naam}
                   voornaam={Spelers.Voornaam}/>
            ))
        }
        </div>
 
    );
}
 
    // Define how each display entry will be structured
    const Frame = ({naam , voornaam , gd}) => {
        console.log(voornaam + " " + naam + " " + gd);
        return (
        <center>
            <div className="div">
                 
    <p>NAME : {voornaam + " " + naam}</p>
  
                 
    <p>Age : {gd}</p>
 
  
            </div>
        </center>
    );
};


export default Ploegen;