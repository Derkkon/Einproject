import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

async function TableBestuur()  {
    const [bestuurLijst, setbestuurLijst] = useState([]);

    const bestuurCollectionRef = collection(db, "Hoofdbestuur");

    useEffect(() =>{
        const getBestuurLijst = async () => {
            try {
                const data = await getDocs(bestuurCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}));
                setbestuurLijst(filteredData);
            } catch (err) {
                console.error(err);
            } 
        };

        getBestuurLijst();
    }, [])
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20">
                {bestuurLijst.map((Hoofdbestuur) => (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-xl text-center pb-5 font-bold text-red-600">{Hoofdbestuur.Functie}</h2>
                        <h6 className="text-center">Naam: {Hoofdbestuur.Voornaam} {Hoofdbestuur.Familienaam}</h6>
                        <h6 className="text-center">E-mail: {Hoofdbestuur.Email}</h6>
                    </div>
                ))}
            </div>
       </div>
    );
};

export default TableBestuur;