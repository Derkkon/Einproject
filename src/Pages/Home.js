import React from 'react';
import Footer from '../componenten/Home pagina comp/Footer';
import ScrollBanner from '../componenten/Home pagina comp/ScrollBanner';

const Home = () => {
    return (
       <>
            <div className="gras flex" alt="Gras">
                <div className='flex justify-center items-center w-screen h-screen'>
                    {/* mobile first aproach first you create mobile and the override properties with breakpoints */}
                    <div className='text-center '>
                        <h2 className="text-white  text-3xl md:text-5xl lg:text-7xl  font-bold drop-shadow-lg">Voetbalclub Duffel</h2>
                        <p className=" pt-2 text-white text-xl  md:text-2xl lg:text-3xl font-regular drop-shadow-lg">De beste club van Duffel en omstreken</p>
                    </div>
                </div>
            </div>
            <ScrollBanner/>
            <Footer/>
        </>
    )
}
export default Home;