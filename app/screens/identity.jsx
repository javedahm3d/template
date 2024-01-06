import '@/style/identity.scss'
import Image from 'next/image'


export default function Identity(){
    return(
        <>
        <section className="identitysection">
        <h1 className='identityTitle'>Explore what sets a codemonkey residence apart</h1>
            <div className="identityContentcontainer">
                 <div className="identityImage">
                <Image src='/h2.jpg' alt='villa image' layout='fill' objectFit='cover'/>
                </div>
            <div className="identyConetent">
                <h2><div className="identityicon"><Image src='/location_black.png' alt='location icon' layout='fill' objectFit='contain'/></div>Ideal location</h2>
                <h2><div className="identityicon"><Image src='/property.png' alt='property icon' layout='fill' objectFit='contain'/></div>Elegant Property</h2>
                <h2><div className="identityicon"><Image src='/customer.png' alt='customer icon' layout='fill' objectFit='contain'/></div>Commitment to the best guest experience</h2>
                <h2><div className="identityicon"><Image src='/high-quality.png' alt='service icon' layout='fill' objectFit='contain'/></div>Best in class amenities</h2>
            </div>
            </div>
        </section>
        </>
    )
}