import React from 'react';
import sponsor1 from "../assets/sponser.png"
import sponsor2 from "../assets/twitch.png"
import gras from "../assets/gras3.jpg"

const Home = () => {
    return (
        <div className="flex flex-row bg-slate-400">
        <div className="basis-11/12">
           <img src={gras} alt={"gras"}/>
        </div>
        <div className="basis-1/12">
            <div className='sponsorslider'>
                <div className='sponsorbanner'>
                    <img src={sponsor1} alt={"sponsor 1"}/>
                    <img src={sponsor2} alt={"sponsor 2"}/>
                    <img src={sponsor1} alt={"sponsor 1"}/>
                    <img src={sponsor2} alt={"sponsor 2"}/>
                    <img src={sponsor1} alt={"sponsor 1"}/>
                    <img src={sponsor2} alt={"sponsor 2"}/>
                    <img src={sponsor1} alt={"sponsor 1"}/>
                    <img src={sponsor2} alt={"sponsor 2"}/>
                    <img src={sponsor1} alt={"sponsor 1"}/>
                    <img src={sponsor2} alt={"sponsor 2"}/>
                </div>
            </div>
        </div>
   </div>
    );
    
};

export default Home;