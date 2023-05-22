import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const Register = () =>{
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className='text-3xl text-center mt-10 font-bold text-red-600'>
               Registreren
            </h1> 
        <div className="h-full mt-20 flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" required onChange={(e) => setRegisterEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)}/>
            
          </div>
            <button onClick={register} className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3" type="button">
              Registreren
            </button>
            <p className="text-xs">Already an account? <Link to={'/signIn'} className="text-red-500 hover:text-red-600">Click here</Link></p>
          </form>
        </div>
      </>
  );
}