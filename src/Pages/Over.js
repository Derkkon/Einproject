import React from 'react';
import MissieVisie from '../componenten/MissieVisie';

const Over = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-3xl text-center p-5 font-bold text-red-600'>
                Over Ons
            </h1>
            
            <div>
                <MissieVisie />
            </div>

            <div className='text-md text-center mt-4 font-regular mx-3'>
                <h6>
                    Belangrijk hierbij is dat we deze missie en visie willen uitdragen in een warme en familiale omgeving waarin spelers
                    <br/> zich goed voelen,zich ten volle kunnen ontplooien en vooral met héél veel plezier komen voetballen.
                    <br/> Onze jeugdwerking wil hierbij uitgroeien tot een referentieen voorbeeld binnen de regio.
                </h6>
            </div>
            <div>
                <h2 className='text-lg text-center mt-5 font-bold text-red-500 mb-5'>
                    ALGEMENE UITGANGSPUNTEN
                </h2>
                <h6 className='text-md text-center mt-4 font-regular mx-3'>
                    Zoals aangegeven in ons MISSION statement wil SC Duffel naast het aanbieden van voetbal (én voetbalplezier)
                    <br/> voor ALLE Duffelaars die graag willen voetballen een club zijn waarbij talentrijke voetballertjes in de best
                    <br/> mogelijke omstandigheden opgeleid en gevormd worden tot tactisch, technisch, mentaal enfysiek sterke spelers 
                    <br/> die kunnen doorstromen naar ons eigen eerste elftal of een vaste waarde kunnen worden in het
                    <br/> eerste elftal van andere clubs in de omgeving. Naast de zaken zoals reeds aangehaald in ons VISION statement 
                    <br/> (opleiding voor resultaat, willen winnen maar kunnen verliezen…) zijn de volgende uitgangspunten hierbij belangrijk:
                </h6>
                <h3 className='text-base text-center mt-5 font-bold text-red-400 mb-5'>
                    Een kwaliteitsvolle opleiding voor IEDEREEN
                </h3>
                <h6 className='text-md text-center mt-4 font-regular mx-3'>
                    Onafhankelijk van leeftijd, niveau of talent willen we voor al onze leden een kwaliteitsvolle opleiding
                    <br/> bieden op PROVINCIAAL niveau waarin FORMATION een sleutelrol speelt: 
                    <br/>FUN & FORMATION voor onze regionale opleiding, FORMATION & FUN voor onze provinciale opleiding.
                </h6>
                <h3 className='text-base text-center mt-5 font-bold text-red-400 mb-5'>
                    Geen enkel talent gaat verloren
                </h3>
                <h6 className='text-md text-center mt-4 font-regular mx-3'>
                    We weten wie onze talenten zijn (TALENTIDENTIFICATIE) en we kijken hierbij verder dan onze neus lang is
                    <br/>door niet alleen oog te hebben voor dat fysiek sterke haantje-de-voorste dat bij de U7 iedereen voorbij loopt
                    <br/> en 100 doelpunten per seizoen scoort, maar zeker ook (en misschien zelfs vooral) voor dat op het eerste zicht
                    <br/> eerder timide spelertje dat wel steeds op de goeie plaats lijkt te staan en openingen ziet die de andere spelertjes niet zien.
                    <br/> Tevens houden we steeds rekening met zaken zoals LAATMATURITEIT en LAATBLOEIERS.
                </h6>
                <h3 className='text-base text-center mt-5 font-bold text-red-400 mb-5'>
                    We maken onze talenten beter
                </h3>
                <h6 className='text-md text-center mt-4 font-regular mx-3'>
                    We halen het maximum uit onze talenten (TALENTONTWIKKELING) door hun sterke punten verder te ontwikkelen,
                    <br/> extra aandacht te besteden aan hun werkpunten én hen continu te prikkelen en te voorzien van uitdagingen.
                </h6>
                <h3 className='text-base text-center mt-5 font-bold text-red-400 mb-5'>
                    We hanteren een duidelijk spelconcept
                </h3>
                <h6 className='text-md text-center mt-4 font-regular mx-3'>
                    Conform aan de visie van voetbal Vlaanderen opteren we voor de consequente toepassing van zonevoetbal in
                    <br/> een 1-4-3-3 systeem mét voorkeur voor een OFFENSIEVE driehoek op het middenveld én met daarbij de
                    <br/> specifieke accenten zoals aangegeven in ons VISION statement (hoge pressing, verzorgde opbouw van
                    <br/> achteruit en zoeken naar VOETBALLENDE oplossingen, meevoetballende doelman).
                </h6>
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