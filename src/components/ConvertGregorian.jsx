import React, { useState } from 'react';
import HijrahDate from 'hijrah-date';
import { hijriMonthNames } from './monthName';
import LocationIcon from '../Assets/LocationIcon.svg'


function GregoriantoHijriConverter() {
    const [hijriDate, setHijriDate] = useState('');
    const [gregorianDate, setGregorianDate] = useState('');
    const [hijriMonthName, setHijriMonthName] = useState('');



    const convertToHijri = () => {

        const hijriDateObj = new HijrahDate(gregorianDate);

        if (hijriDateObj !== '') {
            setHijriDate(`${hijriDateObj.getDate()}-${hijriDateObj.getFullYear()}-${hijriDateObj.getMonth() + 1}`);
            const monthName = hijriMonthNames[hijriDateObj.getMonth()];
            setHijriMonthName(monthName)
            console.log(hijriMonthName)
        } else {
            console.error('Invalid Hijrah date.');
        }
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
                    />
                </label>

            </div>
            <div className="conc_sec">
                <button onClick={convertToHijri}>Convert to Hijri</button>
            </div>
            <div>
                <label>Hijri Date:</label>
                <div>{hijriDate}</div>
                <div>{hijriMonthName}</div>
            </div>
        </div>
    );
}

export default GregoriantoHijriConverter;
