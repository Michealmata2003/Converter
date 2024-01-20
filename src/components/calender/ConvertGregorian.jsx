import React, { useState } from 'react';
import HijrahDate from 'hijrah-date';
import { hijriMonthNames } from '../calculator/monthName';
import LocationIcon from '../../Assets/LocationIcon.svg'


function GregoriantoHijriConverter({onHijriDataDate,onHijriDataYear,onHijriDataMonth  , monthNamejri}) {
    
    const [hijriDateDay, setHijriDateDay] = useState('');
    const [hijriDateYear, setHijriDateYear] = useState('');
    const [hijriDateMonth, setHijriDateMonth] = useState('');
    const [gregorianDate, setGregorianDate] = useState('');
    const [hijriMonthName, setHijriMonthName] = useState('');


    const convertToHijri = () => {

        const hijriDateObj = new HijrahDate(gregorianDate);

        if (hijriDateObj !== '') {
            // setHijriDate(`${hijriDateObj.getDate()}-${hijriDateObj.getFullYear()}-${hijriDateObj.getMonth() + 1}`);
            setHijriDateDay(`${hijriDateObj.getDate()}`);
            setHijriDateYear(`${hijriDateObj.getFullYear()}`);
            setHijriDateMonth(`${hijriDateObj.getMonth() + 1}`);
            const monthName = hijriMonthNames[hijriDateObj.getMonth()];

            setHijriMonthName(monthName)
            setHijriDateDay(onHijriDataDate)
            setHijriDateYear(onHijriDataYear)
            setHijriDateMonth(onHijriDataMonth)

            setHijriMonthName(monthNamejri)

            console.log(hijriMonthName)
        } else {
            console.error('Invalid Hijrah date.');
        }
        setGregorianDate('')
    };

    return (
        <div>
            <div style={{ width: '100%' }}>
                <p><img src={LocationIcon} alt="" />Gregorian to Hijri Converter</p>
                <h5>Type a Date to Convert</h5>
                <label>
                    <input
                        type="text"
                        value={gregorianDate}
                        onChange={(e) => setGregorianDate(e.target.value)}
                        className='datepicker-input'
                        placeholder=' date/january/2022'
                    />
                </label>
                {/* <p>Type in date in the format: date/january/2022</p> */}

            </div>
            <div className="conc_sec">
                <button onClick={convertToHijri}>Convert to Hijri</button>
            </div>
            
        </div>
    );
}

export default GregoriantoHijriConverter;
