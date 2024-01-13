import '@/style/heropage.scss'
import heroCard from '../components/heroCard'
import Link from 'next/link'

export default function heroPage(){
    return (
        <>
        <div className="videoContainer">
        <video autoPlay muted loop >
            <source src='/bg_video.mp4' type="video/mp4" />
        </video>
        <div className="gradient"></div>
        </div>
        
        <section className="heroSection">
            <div className="herocontent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 ,duration:1}}
            >
                <h1 className="heroTitle">EXPERIENCE LUXURY</h1>
                <h2 className="herodesc">Explore our curated oasis, offering luxurious escapes and immersive experiences. Unwind in a realm where serenity meets sophistication, inviting you to moments of bliss with every click</h2>

                <div className="cardContainer">
                    {heroCard('/location.png' , 'locations')}
                    {heroCard('/services.png' , 'services')}
                    {heroCard('/landscape.png' , 'landscapes')}
                    {heroCard('/price.png' , 'deals')}
                    
                </div>
               
               <Link href="../pages/list">
               <button className='button'>
                    Book Now
                </button>
               </Link>
                
                
            </div>
        </section>
        </>
    )
}