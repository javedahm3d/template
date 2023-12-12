import '@/style/listingcard.scss'
import { TfiLocationPin } from "react-icons/tfi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";
import Image from 'next/image'

// {image, name , price , location , rooms}
export default function listingcard({image, name , price , location , rooms , labels}){
    return(
        <div className="listingcard">
            <div className="listingcardImageContainer">
            <Image src={image} alt='villa image' fill={true} objectFit='cover'/>
            </div>
            <div className="listinglabels">
                <div className="labelarea">
                {
                    labels.map((label, i) => (
                            <div className='label'>{label}</div>
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
            <button className='listingcardbutton'>view details</button>
            </div>
            
        </div>
    )
}