'use client';
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useState } from "react";

export default function saveCard({id,name,image,room,location,price}){

    
  const [saveicon, setsaveicon] = useState(true);

  const showToastMessage = (msg) => {
    toast(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };
    
  const togglesaveicon = () => {
    setsaveicon(!saveicon);

    saveicon
      ? showToastMessage("removed from favorite")
      : showToastMessage("added to favorite");
  };

    return(
        <div className="savedCard">
          <div className="savecardimageConatiner">
              <Image src={image} width={200} height={200} className="savedimage"/>
          </div>
          <div className="saveCardDetails">
            <p className="savecardname">{name}</p>
            <p className="savecardlocation">{location}</p>
            <p className="savecardroomdetails">{room}BHK</p>
            <p className="savecardprice">₹{price}</p>
          </div>
          <div className="savecardbutton">
            <button className="saveCardremoveButton" onClick={togglesaveicon}>{saveicon ? <FaHeart color="red" size={22} /> : <CiHeart  size={22}/>}</button>
            <Link href={`/details/${id}`} className="savecardviewbutton"> View</Link>
          </div>
      </div>
      );
}