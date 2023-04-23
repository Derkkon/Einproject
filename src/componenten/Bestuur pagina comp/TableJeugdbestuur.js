import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';

function TableJeugdbestuur()  {
    const [jeugdbLijst, setJeugdbLijst] = useState([]);

    const getJeugdbestuursLijst = async () => {
        try {
            const data = await getDocs(collection(db, 'Jeugdbestuur'));
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}));
            setJeugdbLijst(filteredData);
        } catch (err) {
            console.error(err);
        } 
    }
    
    useEffect(() => {
        getJeugdbestuursLijst();
    }, [])
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20">
                {jeugdbLijst.map((Jeugdbestuur) => (
                    <div key={Jeugdbestuur.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-xl text-center pb-5 font-bold text-red-600">{Jeugdbestuur.Functie}</h2>
                        <h6 className='text-center'>Naam: {Jeugdbestuur.Voornaam} {Jeugdbestuur.Familienaam}</h6>
                        <h6 className='text-center'>E-mail: {Jeugdbestuur.Email}</h6>
                    </div>
                ))}
            </div>
       </div>
    );
};

export default TableJeugdbestuur;