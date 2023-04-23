import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";

const Activiteit = () => {
    const [activities, setActivities] = useState([]);

    const getData = () => {
        try {
            onSnapshot(collection(db, 'Activiteit'),(snapshot) =>
            setActivities(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        )} catch (error) {
            console.log('error',error)
        }
    }

    useEffect(() => {
        getData();
    },[])




    return( 
        <div className="container mx-auto">
                <h1 className='text-3xl text-center p-5 font-bold text-red-600'>Activiteiten</h1> 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                            {activities.map((Activiteit) =>
                            <Link to={Activiteit.id} key={Activiteit.id}  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                 <img src={Activiteit.Foto} alt='img'/> 
                                 <h2 className="text-xl text-center p-5 font-bold text-red-600">{Activiteit.Naam}</h2>
                                <p className="mb-3 font-normal">{Activiteit.Beschrijving} ...</p>
                                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Lees meer
                                </div>

                            </Link>
                            )}
                    </div>
        </div>
            )
}
export default Activiteit;