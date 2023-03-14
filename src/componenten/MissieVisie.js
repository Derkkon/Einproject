import React from 'react';
import rules from '../assets/grasbal.jpg'
import image from '../assets/duel.jpg';

const MissieVisie = () => {
    return(
        <div>
            <h2 className='text-xl text-center mt-5 font-bold text-red-500 mb-5'>
                Missie & Visie
            </h2>  

            <div className="grid grid-cols-2 gap-4 mx-3">
                <div className="bg-yellow-400 rounded-md">
                    
                    <img src={rules} alt="rules" />
                    <h6 className='text-md text-left mt-5 font-regular mx-3 '>
                        De MISSIE van onze jeugdwerking loopt parallel met die van Voetbal Vlaanderen en kan als volgt samengevat worden:
                    </h6>
                    <ul className='list-disc p-6 mx-3'>
                        <li>
                            Aanbieden van voetbal én voetbalplezier voor alle Duffelaars die graag willen 
                            voetballen of die willen sporten in teamverband.
                        </li>
                        <li>
                            In de best mogelijke omstandigheden opleiden van spelers tot tactisch, technisch, 
                            mentaal en fysiek sterke voetballers met reële doorgroei mogelijkheden.
                        </li>
                        <li>
                            Uitdragen van belangrijke waarden en normen 
                            (FAIR-PLAY, RESPECT, DISCIPLINE en een TOLERANTE HOUDING TOV IEDEREEN) 
                            en dit zowel op als naast het veld.
                        </li>
                    </ul>
                </div>
                <div className="bg-red-600 rounded-md">
                    
                    <img src={image} alt="football" />
                    <h6 className='text-md text-left mt-4 font-regular mx-3'>
                        De VISIE van onze jeugdwerking loopt eveneens parallel met die van Voetbal Vlaanderen
                        met daarbij de volgende specifieke accenten die als een rode draad door onze jeugdopleiding zullen lopen:
                    </h6>
                    <ul className='list-disc p-6 mx-3'>
                        <li>
                            CREATIVITEIT, DURF en LEF worden ten volle aangemoedigd
                        </li>
                        <li>
                            Beheersing van de basistechnieken voor een vlotte balcirculatie
                        </li>
                        <li>  
                            Verzorgde opbouw van achteruit en zoeken naar VOETBALLENDE oplossingen                        
                        </li>
                        <li> 
                            Verzorgde opbouw van achteruit en zoeken naar VOETBALLENDE oplossingen                        
                        </li>
                        <li> 
                            Elkaar sturen door onderlinge coaching                          
                        </li>
                        <li>
                            FAIR PLAY TEN ALLEN TIJDE                          
                        </li>
                        <li> 
                            WILLEN winnen maar KUNNEN verliezen                          
                        </li>
                        <li>   
                            OPLEIDING gaat voor op resultaat                       
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
    )
};
export default MissieVisie;
