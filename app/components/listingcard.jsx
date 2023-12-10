import '@/style/listingcard.scss'
import Image from 'next/image'


export default function listingcard({image, name , price , location , rooms , decription}){
    return(
        <div className="listingcard">
            <div className="experienceImageContainer">
            <Image src={image} alt='experince Card image' fill={true} objectFit='cover' />
            </div>
            <p className='experinceTitle'>{title}</p>
        </div>
    )
}