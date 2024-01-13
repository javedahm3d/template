
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '@/style/calender.scss'
import { useDateContext } from '../details/[id]/datecontext';


export default function calendar() {
  const { setDates } = useDateContext();
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const formatToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onSelectDate = (ranges) => {
    const formattedStartDate = formatToYYYYMMDD(ranges.selection.startDate);
    const formattedEndDate = formatToYYYYMMDD(ranges.selection.endDate);

    const formattedDateRange = [formattedStartDate,formattedEndDate];
    setSelectedDateRange([ranges.selection]);
    setDates(formattedDateRange);
    console.log(formattedDateRange);
  };

  const disabledDates = [
    new Date('2024-01-10'),
    new Date('2024-01-15'),
    // Add more disabled dates as needed
  ];

  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={selectedDateRange}
      date={new Date()}
      onChange={onSelectDate}
      direction="horizontal"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      months={2}

      className='datepicker'
    />
  );
};