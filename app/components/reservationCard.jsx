'use client'
import '@/style/reservationcard.scss'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDateContext } from '../details/[details]/datecontext';
import { useSession } from "next-auth/react";


export default function reservationcard({price}){
  const { selectedDateRange } = useDateContext();
  const [numberofdays, setnumberofdays] = useState(0);
  const [totalprice, settotalprice] = useState(0);

  const { data: session } = useSession();


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);
  const [totalGuests, setTotalGuests] = useState('1 guest');
  const [reservationCardpostion, setreservationCardpostion] = useState('');




  React.useEffect(() => {
    // This code will run whenever selectedDateRange changes
    calculateAndSetNumberOfNights(selectedDateRange[0], selectedDateRange[1]);
  }, [selectedDateRange]);

  React.useEffect(() => {
    window.addEventListener("scroll", changereservationCardpostion);
    return () => {
        window.removeEventListener('scroll', changereservationCardpostion);
      };
  }, []);

  // Update total guests whenever any count changes
  useEffect(() => {
    const formattedGuestsString = formatGuestsString();
    setTotalGuests(formattedGuestsString);
  }, [adultsCount, childrenCount, petsCount]);


  const changereservationCardpostion = () =>{
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1200) {
        setreservationCardpostion('');
      } else if (window.scrollY >= 320 && window.scrollY <= 1250) {
        setreservationCardpostion('fixed');
      } else if (window.scrollY > 1250) {
        setreservationCardpostion('absolute');
      } else {
        setreservationCardpostion('');
      }
  }

  


  const calculateAndSetNumberOfNights = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysDifference = Math.round(Math.abs((startDate - endDate) / oneDay));
    setnumberofdays(daysDifference)
    settotalprice(daysDifference*price)
  };

  const togglePopup = () => {
    const addGuestButton = document.getElementById('addGuestButton');
    if (addGuestButton) {
      const rect = addGuestButton.getBoundingClientRect();
      setPopupPosition({ top: rect.bottom, left: rect.left });
    }
    setIsPopupVisible(!isPopupVisible);
  };

  const incrementCount = (type) => {
    switch (type) {
      case 'adults':
        setAdultsCount(adultsCount + 1);
        if(adultsCount > 0){
          setTotalGuests()
        }
        break;
      case 'children':
        setChildrenCount(childrenCount + 1);
        break;
      case 'pets':
        setPetsCount(petsCount + 1);
        break;
      default:
        break;
    }
  };

  const decrementCount = (type) => {
    switch (type) {
      case 'adults':
        setAdultsCount(Math.max(adultsCount - 1, 0));
        break;
      case 'children':
        setChildrenCount(Math.max(childrenCount - 1, 0));
        break;
      case 'pets':
        setPetsCount(Math.max(petsCount - 1, 0));
        break;
      default:
        break;
    }
  };


  const formatGuestsString = () => {
    const guestsArray = [];
    if (adultsCount > 0) {
      guestsArray.push(`${adultsCount} adult${adultsCount !== 1 ? 's' : ''}`);
    }
    if (childrenCount > 0) {
      guestsArray.push(`${childrenCount} children${childrenCount !== 1 ? 's' : ''}`);
    }
    if (petsCount > 0) {
      guestsArray.push(`${petsCount} pet${petsCount !== 1 ? 's' : ''}`);
    }

    // If all counts are zero, display "1 guest"
    if (guestsArray.length === 0) {
      guestsArray.push('1 guest');
    }
    
    return guestsArray.join(', ');
  };




  const handleBooking = () =>{
    console.log("In Handle Booking")
    
    
  const booking = {
      "checkIn": selectedDateRange[0]?.toLocaleDateString('en-IN'),
      "checkOut": selectedDateRange[1]?.toLocaleDateString('en-IN'),
      "total": totalprice,
      "type": "AC",
    }
    console.log(booking)
      try {
          fetch(
              `http://localhost:3001/api/v1/booking?villaUID=657437fd43c7af7be63cd8b5`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    booking,
                  }),
                
                })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  if (data.message == "Created Successful") {
                    console.log("Success")
                    alert("Booking Successfull")
                    // navigate("/successBooking");                    
                  }
                  if (data.flag == "Internal Server error") {
                    alert("Error Try Again");
                  }
            });
      } catch (err) {
            console.error("Error:", err);
      }
  };

    return(
          <div className='reservationcardconatiner'>
              <div className={reservationCardpostion=='fixed'? 'reservationcard fixed right-12 top-60 scale-105' :reservationCardpostion=='absolute'? 'reservationcard relative top-[920px]':'reservationcard'}>
            
             <h1 className="reservationcardprice">₹{price}<span>night</span></h1>
                <div className="reservationdetailsinput">
                <div className="reservationdates">

                  <Link href="#calender"  className="reservationcheckin">
                        <h2>CHECK IN</h2>
                        <h1>{selectedDateRange[0]?(selectedDateRange[0]?.toLocaleDateString('en-IN')): 'add date'}</h1>
                    </Link >
                    <Link href="#calender" className="reservationcheckout">
                        <h2>CHECK OUT</h2>
                        <h1 >{selectedDateRange[1]?(selectedDateRange[1]?.toLocaleDateString('en-IN')): 'add date'}</h1>
                    </Link>
                </div>
                <div className="reservationguests" onClick={togglePopup} id="addGuestButton">
                        <div className="reservationguestsdetails">
                            <h2>GUESTS</h2>
                            <h1  >{totalGuests}</h1>
                        </div>
                        {
                          isPopupVisible?<IoIosArrowUp/>:<IoIosArrowDown />
                        }
                        
                </div>
                </div>

                {/* Popup menu */}
                <div className="addguestpopupMenuconatiner" id='popupMenu' >
                {isPopupVisible && (
                  <div className='addguestpopupMenu' style={{ top: popupPosition.top, left: popupPosition.left }}>
                    {/* Add your menu items here */}
                    <div className='addguestpopupMenuitem'><p>adults</p> <div className='addguestpopupMenuiteaddminus'><IoIosRemoveCircleOutline size={25} onClick={() => decrementCount('adults')} className='popupaddminusicon'/><p >{adultsCount}</p><IoAddCircleOutline size={25} onClick={() => incrementCount('adults')} className='popupaddminusicon'/></div></div>
                    <div className='addguestpopupMenuitem'><p>childrens</p> <div className='addguestpopupMenuiteaddminus'><IoIosRemoveCircleOutline size={25} onClick={() => decrementCount('children')} className='popupaddminusicon' /><p>{childrenCount}</p><IoAddCircleOutline size={25} onClick={() => incrementCount('children')} className='popupaddminusicon'/></div></div>
                    <div className='addguestpopupMenuitem'><p>pets</p> <div className='addguestpopupMenuiteaddminus'><IoIosRemoveCircleOutline size={25} onClick={() => decrementCount('pets')} className='popupaddminusicon' /><p>{petsCount}</p><IoAddCircleOutline size={25} onClick={() => incrementCount('pets')} className='popupaddminusicon'/></div></div>
                    {/* ... */}
                  </div>
                )}
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

                      <div className="reservationButton" onClick={handleBooking}>
                          reserve
                       </div>

                      </>
                      
                      ) : <Link href="#calender" className="reservationcheckavilabilitybutton">
                          check availability
                    </Link >
                  }
                  </div>
                
                
            </div >
            </div>
    )
}

