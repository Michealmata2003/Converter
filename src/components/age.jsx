import React, { useState } from 'react';
import DateofBirth from './DateofBirth';
import CurrentDate from './CurrentDate';
import AttentionIcon from '../Assets/Attention.svg';


const Age = ({onAgeData}) => {
    const [currentDate, setCurrentDate] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const MbirthDate = new Date(birthDate);
        const McurrentDate = new Date(currentDate);

        const ageInMilliseconds = McurrentDate - MbirthDate;
        const ageInSeconds = ageInMilliseconds / 1000;

        const years = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60));
        const months = Math.floor(ageInSeconds / (30.44 * 24 * 60 * 60));
        const weeks = Math.floor(ageInSeconds / (7 * 24 * 60 * 60));
        const days = Math.floor(ageInSeconds / (24 * 60 * 60));
        const hours = Math.floor(ageInSeconds / (60 * 60));
        const minutes = Math.floor(ageInSeconds / 60);
        const seconds = Math.floor(ageInSeconds);

        setAge({
            years,
            months,
            weeks,
            days,
            hours,
            minutes,
            seconds,
        });
        onAgeData({
            years,
            months,
            weeks,
            days,
            hours,
            minutes,
            seconds,
          });
    };

    return (
        <div>
            <div style={{ padding: '30px',backgroundColor:'#ffffff'} }>
                <div className='ageContainer'>
                    <DateofBirth birthDate={birthDate} setBirthDate={setBirthDate} />
                    <section >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_244)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0362 1.19812L13.2828 3.45129H0.627772V4.70588H13.2828L11.0372 6.95812L11.9219 7.84282L15.6866 4.07812L11.9219 0.313412L11.0372 1.19812H11.0362ZM0.626831 11.6075L4.39154 15.3722L5.27624 14.4875L3.0306 12.2353H15.6866V10.9807H3.0306L5.27624 8.72753L4.39154 7.84282L0.626831 11.6075Z" fill="#006CE0" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_244">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </section>
                    <CurrentDate currentDate={currentDate} setCurrentDate={setCurrentDate} />
                </div>
                <div style={{ width: "100%", justifyContent: 'space-between', display: 'flex' }}>
                    <p style={{textAlign:'center'}}>
                        <img src={AttentionIcon} alt="" />
                        we use midmarket rate</p>
                    <button onClick={calculateAge}>Calculate Age</button>
                </div>

            </div>
            
        </div>

    )
}

export default Age;