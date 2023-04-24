import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { useParams } from "react-router-dom";
import Alert from '../Alert';

const Inschrijven = () => {
    const [activiteit, setActiviteit] = useState([]);
    const [nieuweNaam, setNieuweNaam] = useState('');
    const [nieuweAchterNaam, setNieuweAchterNaam] = useState('');
    const [nieuweAantalpersonen, setNieuweAantalpersonen] = useState(0);
    const [ingeschreven, setIngeschreven] = useState(false);
    const [emptyFields, setEmptyFields] = useState(false);
    const {id} = useParams();

    const spelerRef = collection(db, 'Inschrijvingen', id, 'Personen')

    const getActiviteit = async () => {
        try {
            const docs = await getDoc(doc(db, 'Inschrijvingen', id));
            console.log(docs)
            setActiviteit(docs.data())
            console.log(activiteit)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getActiviteit();
    },[])

    const addNewUser = async () => {
        console.log('clicked');
        if(nieuweNaam !== '' || nieuweAchterNaam !== '' || nieuweAantalpersonen !== 0){
            addDoc(spelerRef,{
                Naam: nieuweNaam,
                AchterNaam: nieuweAchterNaam, 
                AantalPeronen: nieuweAantalpersonen,
            })
            setIngeschreven(true)
        }
        else{
            setEmptyFields(true)
        }
    }
       
    return(
        <>
        <div className="container mx-auto">
            <div className="flex justify-center mt-10">
                <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='text-3xl text-center p-5 font-bold text-red-600'>Inschrijven</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Naam
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Naam" required value={nieuweNaam} onChange={(e) => setNieuweNaam(e.target.value)}/>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Achternaam
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Achternaam" value={nieuweAchterNaam} required onChange={(e) => setNieuweAchterNaam(e.target.value)}/>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Aantal personen
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Aantal" value={nieuweAantalpersonen} required onChange={(e) => setNieuweAantalpersonen(e.target.value)}/>
                </div>
                    <button onClick={addNewUser}  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Inschrijven
                    </button>
                </form>
            </div>
        </div>
        {ingeschreven && <Alert info={'Ingeschreven!'} message={'U bent ingeschreven voor deze activiteit'}/>}
        {emptyFields && <Alert alertStyle={"danger"} info={'Lege velden!'} message={'Vul alle velden in a.u.b.'}/>}
        </>
    )
}
export default Inschrijven;
