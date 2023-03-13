import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import Ploegen from '../Pages/Ploegen';
import Bestuur from '../Pages/Bestuur';
import Contact from '../Pages/Contact';
import Over from '../Pages/Over';
import Activiteiten from '../Pages/Activiteiten';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signIn' element={<SignIn/>}/>
            <Route path='/bestuur' element={<Bestuur/>}/>
            <Route path='/over' element={<Over/>}/>
            <Route path='/activiteiten' element={<Activiteiten/>}/>
            <Route path='/ploegen' element={<Ploegen/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
};

export default Routing;