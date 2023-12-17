import '@/style/reservationcard.scss'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react';
import Link from 'next/link';

export default function reservationcard(){

  const [reservationCardpostion, setreservationCardpostion] = useState('');
  const changereservationCardpostion = () =>{
    const screenWidth = window.innerWidth;
    if (screenWidth < 850) {
        setreservationCardpostion('');
      } else if (window.scrollY >= 320 && window.scrollY <= 1300) {
        setreservationCardpostion('fixed');
      } else if (window.scrollY > 1300) {
        setreservationCardpostion('absolute');
      } else {
        setreservationCardpostion('');
      }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", changereservationCardpostion);
    return () => {
        window.removeEventListener('scroll', changereservationCardpostion);
      };
  }, []);
    
    return(
            <div className={reservationCardpostion=='fixed'? 'reservationcard fixed right-12 top-60' :reservationCardpostion=='absolute'? 'reservationcard relative top-[950px]':'reservationcard'}>
            <h1 className="reservationcardprice"><FaIndianRupeeSign />25,000 <span>night</span></h1>
                <div className="reservationdetailsinput">
                <div className="reservationdates">
                    <Link href="#calender"  className="reservationcheckin">
                        <h2>CHECK IN</h2>
                        <h1>01/01/2024</h1>
                    </Link >
                    <div className="reservationcheckout">
                        <h2>CHECK OUT</h2>
                        <h1>12/01/2024</h1>
                    </div>
                </div>
                <div className="reservationguests">
                        <div className="reservationguestsdetails">
                            <h2>GUESTS</h2>
                            <h1>1 guests</h1>
                        </div>
                        <IoIosArrowDown />
                </div>
                </div>
                <div className="reservationcheckinbutton">check availability</div>
            </div >
    )
}

