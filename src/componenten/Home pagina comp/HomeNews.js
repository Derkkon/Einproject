import { useState } from 'react';
import news1 from '../../assets/initiatietraining3.jpg';
import news2 from '../../assets/sticker.jpg';
import news3 from '../../assets/breakfast.jpg';
import Footer from './Footer';
const HomeNews = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-20'>Laatste nieuws</h1>
            <div className="grid grid-cols-3 gap-6 container mx-auto px-40">
                <div className="relative my-5 hover:ease-in-out duration-300 cursor-pointer" onMouseEnter={() => setReadMore(true)} onMouseLeave={() => setReadMore(false)}>
                    <img src={news1} alt="news1" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-80">
                        <h3 className="text-xl text-white font-bold">
                            Initiatietraining U6-U7</h3>
                        <p className="mt-2 text-sm text-gray-300">Op zaterdag 11 Juni, (vroegtijdig inschrijven) kan elke nieuwe speler komen trainen {readMore ? 'Dit is natuurlijk enkel en alleen om 20u te sporthal Duffel' : '...'}</p>
                    </div>
                </div>
                <div className="relative my-5 hover:ease-in-out duration-300 cursor-pointer" onMouseEnter={() => setReadMore1(true)} onMouseLeave={() => setReadMore1(false)}>
                    <img src={news2} alt="news2" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-80">
                        <h3 className="text-xl text-white font-bold">
                            Stickeractie Sc Duffel</h3>
                        <p className="mt-2 text-sm text-gray-300">Verzamel alle stickers van sportingclub Duffel {readMore1 ? 'bij AD delhaize Duffel van 15 Februari t.e.m 20 Maart.' : '...'}</p>
                    </div>
                </div>
                <div className="relative my-5 hover:ease-in-out duration-300 cursor-pointer" onMouseEnter={() => setReadMore2(true)} onMouseLeave={() => setReadMore2(false)}>
                    <img src={news3} alt="news3" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-80">
                        <h3 className="text-xl text-white font-bold">
                            ONTBIJTBOX valentijn</h3>
                        <p className="mt-2 text-sm text-gray-300">Dit jaar zijn de kleuren van de liefde geel & rood {readMore2 ? 'Op zondag 13 februari zorgen de ouders van de U11A voor extra romantiek aan de ontbijttafel. Verwen uw knuffelcontact(en) of uw vrienden/familie met een lekkere ontbijtbox van SC Duffel jeugd!.' : '...'}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomeNews;