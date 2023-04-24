import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const SpelersLijstComp = () => {
    const [spelerLijst, setSpelerLijst] = useState([]);
    const [ploeg, setPloeg] = useState("")

    const spelerCollectionRef = collection(db, "Spelers");

    const getSpelerLijst = async () => {
        try {
            const data = await getDocs(spelerCollectionRef, where("state", "==", ploeg));
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setSpelerLijst(filteredData)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getSpelerLijst();
    }, [])
    
    return(
        <>
            {spelerLijst.map((Spelers) => (
                <div className='text-center' key={Spelers.Voornaam}>
                    <h1> {Spelers.Naam} {Spelers.Voornaam} </h1>
                    <p> {Spelers.Ploeg} </p>
                    <p> {Spelers.Geboortedatum} </p>
                </div>
            ))}
            
        </>
    );
};

export default SpelersLijstComp;