import React, { useState } from 'react';
import HijriConverter from 'hijri-converter';
import { gregorianMonthNames } from './monthName';
import LocationIcon from '../Assets/LocationIcon.svg';

function HijriToGregorianConverter({
  onGregorianData,
  onGregorianDataName,
  onGregorianDataDate,
  onGregorianDatayears,
  onGregorianDataMonths,
}) {
  const [hijriDate, setHijriDate] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');

  const [gregorianDateYear, setGregorianDateYear] = useState('');
  const [gregorianDateMonth, setGregorianDateMonth] = useState('');
  const [gregorianDateDay, setGregorianDateDay] = useState('');
  const [gregorianDateName, setGregorianDateName] = useState('');

  const convertDatetoGregorian = () => {
    try {
      const [hYear, hMonth, hDay] = hijriDate.split('-').map(Number);
      const gregorian = HijriConverter.toGregorian(hYear, hMonth, hDay);

      const formattedGregorianDate = `${gregorianMonthNames[gregorian.gm - 1]}-${gregorian.gy}-${String(gregorian.gm).padStart(2, '0')}-${String(gregorian.gd).padStart(2, '0')}`;

      setGregorianDate(formattedGregorianDate);
      setGregorianDateName(onGregorianDataName || gregorianMonthNames[gregorian.gm - 1]);
      setGregorianDateYear(onGregorianDatayears ||`${gregorian.gy}`);
      setGregorianDateMonth(onGregorianDataMonths ||`${String(gregorian.gm).padStart(2, '0')}`);
      setGregorianDateDay(onGregorianDataDate || `${String(gregorian.gd).padStart(2, '0')}`);


      if (onGregorianData) {
        onGregorianData(formattedGregorianDate); // Pass the Gregorian data up
      }
    } catch (error) {
      console.error('Error converting date:', error.message);
    }
  };

  const [splitMonths, splitYears, splitDays] = gregorianDate.split('-');

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
        <button onClick={convertDatetoGregorian}>Convert to Gregorian</button>
      </div>
    </div>
  );
}

export default HijriToGregorianConverter;
