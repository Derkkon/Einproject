import sponor1 from '../../assets/sponsors/carrefour-logo.png'
import sponor2 from '../../assets/sponsors/Jako_logo.svg.png'
import sponor3 from '../../assets/sponsors/KBC_Bank_logo.png'
import sponor4 from '../../assets/sponsors/nike_PNG20.png'


const ScrollBanner = () => {
    return (
        <div className="sponsor-slider mt-10">
            <div className="flex flex-wrap sponsor-banner">
                <a href='https://www.carrefour.be/nl.html' target={"_blank"} rel={"noreferrer"}>
                    <img src={sponor1} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Carrefour'} />
                </a>
                <a href='https://www.jako.be/nl/' target={"_blank"} rel={"noreferrer"}>
                    <img src={sponor2} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Jako'} />
                </a>
                <a href='https://www.kbc.be/particulieren/nl.html' target={"_blank"} rel={"noreferrer"}>
                    <img src={sponor3} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'KBC'} />
                </a>         
                <a href='https://www.nike.com/be/' target={"_blank"} rel={"noreferrer"}>
                    <img src={sponor4} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Nike'} />
                </a>
            </div>
        </div>
    )
}
export default ScrollBanner;