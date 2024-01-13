import '@/style/listingcard.scss'
import { TfiLocationPin } from "react-icons/tfi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link';

// {image, name , price , location , rooms}
export default function listingcard({image, name , price , location , rooms , labels,id}){
    return(
        <div className="listingcard">
            <div className="listingcardImageContainer">
            <Image src={image} alt='villa image' fill={true} objectFit='cover'/>
            </div>
            <div className="listinglabels">
                <div className="labelarea">
                {
                    labels.map((label, i) => (
                            <div className='label' key={i}>{label}</div>
                    ))
                }
                </div>

            </div>
                

            <div className="listingcardbody">
            <div className="listingcarddetails">
                <p className='listingcardinfo hotelname'>{name}</p>
                <p className='listingcardinfo'><TfiLocationPin />{location}</p>
                <p className='listingcardinfo'><MdOutlineBedroomChild /><span>{rooms} bedroom</span></p>
                <p className='listingcardinfo'><FaIndianRupeeSign />{price}</p>
            </div>
            {/* <Link href={`../details/${id}+abc+123c`} className='listingcardbutton'>view details</Link> */}
            <Link href={{ pathname: `../details/${id}`, query: { type: 'luxary',discout: '10' } }} className='listingcardbutton'>view details</Link>
            </div>
            
        </div>
    )
}