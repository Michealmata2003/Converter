import React, { useState } from 'react';
import GregoriantoHijriConverter from './ConvertGregorian';
import HijriToGregorianConverter from './ConvertHijri';
import LocationIcon from '../Assets/LocationIcon.svg'



const CalenderInput = () => {
    const [switchCalender, setSwitchCalender] = useState(true)

    const handleSwitchCalender = () => {
        setSwitchCalender(!switchCalender)


    }

    return (
        <div className="d-flex" >
            <div className="app">

                <div className='conc_sec'>
                    <button onClick={handleSwitchCalender}>switch</button>
                </div>

                <div className="app-container d-flex">
                    <div className="month-select">
                        {
                            switchCalender ?
                                <GregoriantoHijriConverter />
                                :
                                <HijriToGregorianConverter />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CalenderInput;