import '@/style/experienceCard.scss'
import Image from 'next/image'


export default function experienceCard(image, title){
    return(
        <div className="experienceCard">
            <div className="experienceImageContainer">
            <Image src={image} alt='experince Card image' fill={true} objectFit='cover' />
            </div>
            <p className='experinceTitle'>{title}</p>
        </div>
    )
}