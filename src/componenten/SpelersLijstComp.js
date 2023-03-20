import { useEffect, useState } from 'react';
import { db } from '../config/Firebase';
import { getDocs, collection } from 'firebase/firestore';

const SpelersLijstComp = () => {
    const [spelerLijst, setSpelerLijst] = useState([]);

    const spelerCollectionRef = collection(db, "Spelers");

    const getSpelerLijst = async () => {
        try {
            const data = await getDocs(spelerCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setSpelerLijst(filteredData)
            console.log(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getSpelerLijst();
    }, [])
    
    return(
        <div>
            <div className='text-center '>
                <a 
                href={'/spelerAanmaken'}
                rel={"noreferrer"}
                className='inline-block px-4 text-white bg-red-600 rounded'>
                    Speler aanmaken
                </a>
            </div>
            {spelerLijst.map((Spelers) => (
                <div className='text-center'>
                    <h1> {Spelers.Naam} {Spelers.Voornaam} </h1>
                    <p> {Spelers.Ploeg} </p>
                    <p> {Spelers.Geboortedatum} </p>
                </div>
            ))}
            
        </div>
    );
};

export default SpelersLijstComp;