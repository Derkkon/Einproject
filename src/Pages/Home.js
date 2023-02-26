import React from 'react';
import gras from "../assets/grasA_1.png"
import HomeNews from '../componenten/HomeNews';
import ScrollBanner from '../componenten/ScrollBanner';

const Home = () => {
    return (
       <div>
            <img src={gras} className="w-full" alt="Gras" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-white lg:text-7xl sm:text-3xl font-bold drop-shadow-lg">Voetbalclub Duffel</h2>
                    <p className="text-white md:text-3xl sm:text-xl mt-2 font-regular drop-shadow-lg">De beste club van Duffel en omstreken</p>
                </div>
            <ScrollBanner/>
            <HomeNews/>
        </div>
    );

};

export default Home;