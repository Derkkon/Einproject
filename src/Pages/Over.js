import React from 'react';
import MissieVisie from '../componenten/Over ons pagina comp/MissieVisie';
import AlgemeneUitgangspunten from '../componenten/Over ons pagina comp/AlgemeneUitgangspunten';

const Over = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-3xl text-center p-5 font-bold text-red-600'>
                Over Ons
            </h1>
            
            <div>
                <MissieVisie />
            </div>
            <div>
                <AlgemeneUitgangspunten />
            </div>  
            <div>
                <h2 className='text-xl text-center mt-5 font-bold text-red-500 mb-5'>
                    Waar ons te vinden?
                </h2> 
            </div>
            <div className='text-md text-center mt-4 font-regular mx-3'>
                <h6>
                    Je kan ons vinden op Rooienberg 56, 2570 Duffel,
                    <br/> klik op de knop om naar google maps te gaan.
                </h6>
            
                <div className='my-5'>
                    <a
                    href='https://www.google.be/maps/place/Sporting+Club+Duffel/@51.097385,4.4918239,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3fb95e8771ad5:0xb30c06c90bee4675!8m2!3d51.097385!4d4.4940126!16s%2Fg%2F11hft0tgt5' 
                    target={"_blank"} rel={"noreferrer"}
                    className='inline-block px-4 text-white bg-red-600 rounded'>
                        Maps
                    </a>
                </div>
                
            </div>
        </div>
            
    );
};

export default Over;