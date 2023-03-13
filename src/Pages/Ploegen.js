import React, { useEffect, useState } from 'react';
import { db } from '../config/Firebase';
import { getDocs, collection } from 'firebase/firestore';

const Ploegen = () => {
    const [spelerLijst, setSpelerLijst] = useState([]);

    const spelerCollectionRef = collection(db, "Spelers");
    useEffect(() => {
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

        getSpelerLijst();
    }, [])
    
    return(
        <div>
            {spelerLijst.map((Spelers) => (
                <div>
                    <h1> {Spelers.Naam}</h1>
                </div>>
            ))}
        </div>
    );
};


export default Ploegen;