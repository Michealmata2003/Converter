import React, { useState } from 'react';
import HijriConverter from 'hijri-converter';
import { gregorianMonthNames } from './monthName';
import LocationIcon from '../Assets/LocationIcon.svg'


function App({onGregorianData}) {

  const [hijriDate, setHijriDate] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');

  const convertDate = () => {
    try {
      const gregorian = HijriConverter.toGregorian(
        parseInt(hijriDate.split('-')[0], 10),
        parseInt(hijriDate.split('-')[1], 10),
        parseInt(hijriDate.split('-')[2], 10)
      );

      setGregorianDate(
        `${gregorianMonthNames[gregorian.gm - 1]}-${gregorian.gy}-${String(gregorian.gm).padStart(2, '0')}-${String(
          gregorian.gd
        ).padStart(2, '0')}`
      );
      setGregorianDate(onGregorianData);
    } catch (error) {
      console.error('Error converting date:', error.message);
    }
  };

  return (
    <div className="App">
      <p><img src={LocationIcon} alt="" />Hijri to Gregorian Converter</p>
         <label>
        <input
          type="text"
          value={hijriDate}
          onChange={(e) => setHijriDate(e.target.value)}
          className='datepicker-input'

        />
      </label>

      <div className="conc_sec">
        <button onClick={convertDate}>Convert to Gregorian</button>
      </div>
      {gregorianDate && (
        <p>
          Gregorian Date: <strong>{gregorianDate}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
