import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";



export default function bookingCard({id,name,image,reservedate,bookingdate,location,price}){

    return(
        <div className="bookingCard">
          <div className="savecardimageConatiner">
              <Image src={image} width={200} height={200} className="savedimage"/>
          </div>
          <div className="bookingCardDetails">
            <p className="savecardname">{name}</p>
            <p className="savecardlocation">{location}</p>
            <p className="savecardprice">₹{price}</p>
            <p className="savecardreservedate bookingdates">Reserved on: {reservedate}</p>
            <p className="savecardbookindate bookingdates">booked on: {bookingdate}</p>
          </div>
          <div className="bookingcardbutton">
            <button className="bookingCardremoveButton"><RiDeleteBin6Line size={22}/>Cancel Booking</button>
            <Link href={`/details/${id}`} className="savecardviewbutton"> View</Link>
          </div>
      </div>
      );
}