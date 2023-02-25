import sponor1 from '../assets/sponsors/carrefour-logo.png'
import sponor2 from '../assets/sponsors/Jako_logo.svg.png'
import sponor3 from '../assets/sponsors/KBC_Bank_logo.png'
import sponor4 from '../assets/sponsors/nike_PNG20.png'


const ScrollBanner = () => {
    return(
        <div class="sponsor-slider mt-10">
            <div class="flex flex-wrap sponsor-banner">
                <img src={sponor1} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Carrefour'}/>
                <img src={sponor2} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'KBC'}/>
                <img src={sponor3} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Jako'}/>
                <img src={sponor4} className="w-1/12 md:w-40 grayscale hover:grayscale-0" alt={'Nike'}/>
            </div>
        </div>
    )
}
export default ScrollBanner;