import Image from "next/image"
import '@/style/servicesInfiniteScroll.scss'

export default function servicesscroll (){
    return(
        <section className="infiniteScrollContainer">
            <div className="infiniteScrollInnerContainer">
              <div className="slide">
                <div className="logoSlideInner">
                    <div className="slideicon"><Image src="/gym.png" alt="gym icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/food.png" alt="food icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/wifi.png" alt="wifi logo" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/pool.png"  alt="pool icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/24-hours.png"  alt="24x7 service icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/parking.png"  alt="parking icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/kayaking.png"  alt="kayaking icon" fill={true} objectFit="contain"/></div>
                </div>

                <div className="logoSlideInner">

                    <div className="slideicon"><Image src="/gym.png" alt="gym icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/food.png" alt="food icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/wifi.png" alt="wifi logo" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/pool.png"  alt="pool icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/24-hours.png"  alt="24x7 service icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/parking.png"  alt="parking icon" fill={true} objectFit="contain"/></div>
                    <div className="slideicon"><Image src="/kayaking.png"  alt="kayaking icon" fill={true} objectFit="contain"/></div>
                </div>

              </div>
            </div>

        </section>
    )

}