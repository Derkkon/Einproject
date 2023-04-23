import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import Registreren from '../Pages/Registreren';
import Ploegen from '../Pages/Ploegen';
import Bestuur from '../Pages/Bestuur';
import Contact from '../Pages/Contact';
import Over from '../Pages/Over';
import Activiteiten from '../Pages/Activiteiten';
import Inschrijven from './Activiteiten pagina comp/Inschrijven';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>

            <Route path='/signIn' element={<SignIn/>}/> 
            <Route path='/registreren' element={<Registreren/>}/> 
            <Route path='/bestuur' element={<Bestuur/>}/>
            <Route path='/over' element={<Over/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/ploegen' element={<Ploegen/>}/>

            <Route path='/activiteiten' element={<Outlet/>}>
                    <Route index  element={<Activiteiten/>}/>
                    <Route path=':id' element={<Inschrijven/>}/>
                </Route> 

            {/* <Route path='' element={<PageNotFound/>}/>*/}
        </Routes>
    );
};

export default Routing;