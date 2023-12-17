import '@/style/reservationcard.scss'
// import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDateContext } from '../details/[details]/datecontext';

export default function reservationcard({price}){
  const { selectedDateRange } = useDateContext();
  const [numberofdays, setnumberofdays] = useState(0);
  const [totalprice, settotalprice] = useState(0);

  React.useEffect(() => {
    // This code will run whenever selectedDateRange changes
    calculateAndSetNumberOfNights(selectedDateRange[0], selectedDateRange[1]);
  }, [selectedDateRange]);

  
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


  const calculateAndSetNumberOfNights = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysDifference = Math.round(Math.abs((startDate - endDate) / oneDay));
    setnumberofdays(daysDifference)
    settotalprice(daysDifference*price)
  };

  onchange => selectedDateRange=>{
    calculateDateDifference()
  }
    
    return(
            <div className={reservationCardpostion=='fixed'? 'reservationcard fixed right-12 top-60' :reservationCardpostion=='absolute'? 'reservationcard relative top-[950px]':'reservationcard'}>
            
            <h1 className="reservationcardprice">₹{price}<span>night</span></h1>
                <div className="reservationdetailsinput">
                <div className="reservationdates">
                    <Link href="#calender"  className="reservationcheckin">
                        <h2>CHECK IN</h2>
                        <h1>{selectedDateRange[0]?(selectedDateRange[0]?.toLocaleDateString('en-IN')): 'add date'}</h1>
                    </Link >
                    <Link href="#calender" className="reservationcheckout">
                        <h2>CHECK OUT</h2>
                        <h1>{selectedDateRange[1]?(selectedDateRange[1]?.toLocaleDateString('en-IN')): 'add date'}</h1>
                    </Link>
                </div>
                <div className="reservationguests">
                        <div className="reservationguestsdetails">
                            <h2>GUESTS</h2>
                            <h1>1 guests</h1>
                        </div>
                        <IoIosArrowDown />
                </div>
                </div>
                
                  <div className='reservationdetailscontainer'>
                  {
                     selectedDateRange[0]?
                     ( 
                      <>
                      <div className='reservationCardCalculationsconatiner'>
                        <h1>Total amount</h1>
                        <div className='reservationCardCalculation'><h3>{numberofdays}x₹{price}=</h3> <h1>₹{totalprice}</h1></div>
                      </div>

                      <div className="reservationButton">
                          reserve
                       </div>

                      </>
                      
                    ) : <Link href="#calender" className="reservationcheckavilabilitybutton">
                          check availability
                    </Link >
                  }
                  </div>
                
                
            </div >
    )
}

