import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import spelerCollectionRef  from '../SpelersLijstComp';
import  getSpelerLijst  from '../SpelersLijstComp';

const SpelerAanmaken = () => {

    const [newNaam, setNewNaam] = useState("");
    const [newVoornaam, setNewVoornaam] = useState("");
    const [newGeboortedatum, setNewGeboortedatum] = useState("");
    const [newPloeg, setNewPloeg] = useState("");

    const OnSubmitSpeler = async () => {
        try {
            await addDoc(spelerCollectionRef, {
                Naam: newNaam, 
                Voornaam: newVoornaam, 
                Geboortedatum: newGeboortedatum, 
                Ploeg: newPloeg
            }); 

            getSpelerLijst();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className='grid justify-items-center my-5'>
                
                <input 
                className='mb-3' 
                placeholder='Naam'
                onChange={(e) => setNewNaam(e.target.value)}
                />
                
                <input 
                className='mb-3' 
                placeholder='Voornaam'
                onChange={(e) => setNewVoornaam(e.target.value)}
                />
                
                <input 
                className='mb-3' 
                placeholder='Geboortedatum'
                onChange={(e) => setNewGeboortedatum(e.target.value)}
                />
                
                <input 
                className='mb-3' 
                placeholder='Ploeg'
                onChange={(e) => setNewPloeg(e.target.value)}
                />

                <button onClick={OnSubmitSpeler}>Submit</button>
            </div>
        </div>
    );
};

export default SpelerAanmaken;