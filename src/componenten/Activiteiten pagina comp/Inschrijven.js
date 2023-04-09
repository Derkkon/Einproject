import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/Firebase";
import { useParams } from "react-router-dom";

const Inschrijven = () => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nieuweNaam, setNieuweNaam] = useState('');
    const [nieuweAchterNaam, setNieuweAchterNaam] = useState('');
    const [nieuweAantalpersonen, setNieuweAantalpersonen] = useState(0);
    const {id} = useParams();

    const docRef = doc(db, 'Duffel', id)
    const spelerRef = collection(db, 'Duffel', id, 'Spelers')

    useEffect(() => {
        const getActivity = async () => {
            try {
                setLoading(true)
                const docs = await getDoc(docRef);
                setActivity(docs.data())
            } catch (error) {
                console.log(error)
            }
        }
        setLoading(false)
        getActivity();
    },[])

    const addNewUser = async () => {
        console.log('clicked');
        if(nieuweNaam !== '' || nieuweAchterNaam !== '' || nieuweAantalpersonen !== 0){
            addDoc(spelerRef,{
                Naam: nieuweNaam,
                AchterNaam: nieuweAchterNaam, 
                AantalPeronen: nieuweAantalpersonen,
            })
        }
        else{
            alert('Fill in all the fields')
        }
    }
       
    if(loading){
        <h2>Loading...</h2>
    }
    return(
        <>
        {/* Eerst mobile ontwerp */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='text-3xl text-center p-5 font-bold text-red-600'>Inschrijven</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Naam
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Naam" required value={nieuweNaam} onChange={(e) => setNieuweNaam(e.target.value)}/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Achternaam
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Achternaam" value={nieuweAchterNaam} required onChange={(e) => setNieuweAchterNaam(e.target.value)}/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Aantal personen
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Aantal" value={nieuweAantalpersonen} required onChange={(e) => setNieuweAantalpersonen(e.target.value)}/>
                </div>
                    <button onClick={addNewUser}  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                    </button>
                </form>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='text-3xl text-center p-5 font-bold text-red-600'>{activity.Name}</h2>
                    <img scr={activity.Image} alt={activity.Name}/>
                <p className="mt-4">{activity.Description}</p>
            </div>
        </div>
        </>
    )
}
export default Inschrijven;