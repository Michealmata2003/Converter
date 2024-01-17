import React, { useState } from 'react';
import moment from 'moment-hijri';

const DateConverter = () => {
  const [hijriDate, setHijriDate] = useState(''); // Example Hijri date

  const convertToGregorian = () => {
    const gregorianDate = moment(hijriDate, 'iYYYY-iMM-iDD').format('YYYY-MM-DD');
    console.log('Gregorian Date:', gregorianDate);
    // You can use gregorianDate as needed in your application
  };

  return (
    <div>
      <label>Hijri Date:</label>
      <input
        type="text"
        value={hijriDate}
        onChange={(e) => setHijriDate(e.target.value)}
        className='datepicker-input'
      />
      <div className="conc_sec">
        <button onClick={convertToGregorian}>Convert to Gregorian</button>

      </div>
    </div>
  );
};

export default DateConverter;
