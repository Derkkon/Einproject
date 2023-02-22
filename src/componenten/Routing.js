import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Ploegen from '../Pages/Ploegen';
import Bestuur from '../Pages/Bestuur';
import Contact from '../Pages/Contact';
import Over from '../Pages/Over';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/bestuur' element={<Bestuur/>}/>
            <Route path='/over' element={<Over/>}/>
            <Route path='/ploegen' element={<Ploegen/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
};

export default Routing;