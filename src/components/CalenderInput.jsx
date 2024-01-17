import React, { useState } from 'react';
import LocationIcon from '../Assets/LocationIcon.svg'
import GregoriantoHijriConverter from './ConvertGregorian';
import HijriToGregorianConverter from './ConvertHijri';



const CalenderInput = () => {
    const [switchCalender, setSwitchCalender] = useState()

    return (
        <div className="d-flex" >
            <div className="app">
                <div className='conc_sec'>
                    <button>switch</button>
                </div>
                <p><img src={LocationIcon} alt="" />Gregorian to Hijri Converter</p>
                <h5>Select a Date to Convert</h5>
                <div className="app-container d-flex">
                    <div className="month-select">
                        {/* <GregoriantoHijriConverter /> */}
                        <HijriToGregorianConverter />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CalenderInput;