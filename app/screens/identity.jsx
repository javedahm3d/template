import '@/style/identity.scss'
import Image from 'next/image'


export default function Identity(){
    return(
        <>
        <section className="identitysection">
        <h1 className='identityTitle'>Explore what sets an Nirvana residence apart</h1>
            <div className="identityContentcontainer">
            <div className="identityImage">
              <Image src='/h1.jpg' alt='villa image' fill={true} objectFit='cover' />
            </div>
            <div className="identyConetent">
                <h2>Ideal location</h2>
                <h2>Elegant Property</h2>
                <h2>Commitment to the best guest experience</h2>
                <h2>Best in class amenities</h2>
            </div>
            </div>
        </section>
        </>
    )
}