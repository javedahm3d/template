import '@/style/calenderstyle.scss'
import Calendar from "react-calendar";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import {ToastContainer,toast } from 'react-toastify';
import { useDateContext } from '../details/[id]/datecontext';
// import Month from 'react-calendar/dist/cjs/YearView/Month';



export default function calendar({ onDateSelect }){

    const { setDates } = useDateContext();

    const [disabledDates, setDisabledDates] = useState([
      new Date(2023, 11, 19), // December 19, 2023
      new Date(2023, 11, 21), // December 21, 2023
    ]);
  
    const [selectedDateRange, setSelectedDateRange] = useState([]);

    const showToastMessage = (msg) => {
        toast.error(msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    };
  
    const tileDisabled = ({ date, view }) => {
      return (
        view === 'month' &&
        disabledDates.some((disabledDate) =>
          date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate()
        )
      );
    };
  
    const onSelectDate = (value) => {
      if (value.length === 2) {
        const [startDate, endDate] = value;
        const isRangeValid = !disabledDates.some(
          (disabledDate) =>
            disabledDate >= startDate && disabledDate <= endDate
        );
  
        if (isRangeValid) {
          setSelectedDateRange(value);
          setDates(value);     
          console.log(selectedDateRange)
        } else {
          showToastMessage('Range contains disabled date. Please select a valid range.')
          console.log('Range contains disabled date. Please select a valid range.');
        }
      } else {
        setSelectedDateRange(value);
        setDates(value);
        console.log(selectedDateRange)

      }
    };

    
    return(
        <>
        <Calendar 
                onChange={onSelectDate}
                value={selectedDateRange}
                selectRange={true}
                showWeekNumbers={false}
                next2Label={null}
                prev2Label={null}
                showNeighboringMonth={false}
                minDate={new Date()}
                tileDisabled={tileDisabled}   
                showDoubleView     
                minDetail ={'Month'}   
                goToRangeStartOnSelect ={false}
           /> 
        </>
    )
}

