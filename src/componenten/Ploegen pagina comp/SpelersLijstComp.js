import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection, query, where, doc } from 'firebase/firestore';

const SpelersLijstComp = async () => {
    const [spelerLijst, setSpelerLijst] = useState([]);
    const [word, setWord] = useState('')

    const spelerCollectionRef = collection(db, "Spelers");

    const q = query(spelerCollectionRef, where("Ploeg", "==", "U6"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });

    const getSpelerLijst = async () => {
        try {
            const data = await getDocs(spelerCollectionRef, where("state", "==", word));
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