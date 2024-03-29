import { auth, googleProvider } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      if (email !== "" && password !== "") {
        await signInWithEmailAndPassword(auth, email, password);
        setEmptyFields(false);
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }
      else {
        setEmptyFields(true)
      }

    }
    catch (err) {
      console.log(err);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className='text-3xl text-center mt-10 font-bold text-red-600'>
        Aanmelden
      </h1>
      <div className="h-full mt-20 flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required placeholder="*******" onChange={(e) => setPassword(e.target.value)} />

          </div>
          <button onClick={signIn} className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Inloggen
          </button>
          <button onClick={googleLogin} className="w-full mt-2 bg-slate-100 hover:bg-slate-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Inloggen met google
          </button>
          <p className="text-xs mt-5">Nog geen account? <Link to={'/registreren'} className="text-red-500 hover:text-red-600">Klik hier</Link></p>
        </form>
        {emptyFields && <Alert alertStyle={"danger"} info={"Lege velden"} message={"Vul alle velden in a.u.b."} />}
        {isLoggedIn && <Alert info={"Ingelogd"} message={"U bent ingelogd en zal worden teruggestuurd naar de Home pagina."} />}
      </div>
    </>
  );
};