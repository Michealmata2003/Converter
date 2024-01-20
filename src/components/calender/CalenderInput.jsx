import React, { useState, useRef } from 'react';
import GregoriantoHijriConverter from './ConvertGregorian';
import HijriToGregorianConverter from './ConvertHijri';
import html2canvas from 'html2canvas';
import '../../style/Responsiveness.css'





const CalenderInput = ({
    hijriLanguagex,
    gregorianLanguagex,
    onGregorianLanguage,
    onHijriLanguage,
    onHijriLanguageNameDate,
    onHijriLanguageNameYear,
    onHijriLanguageNameMonth,
}) => {

    const [switchCalender, setSwitchCalender] = useState(true)

    const [hijriLanguage, setHijriLanguage] = useState('')

    const [hijriLanguageNameDate, setHijriLanguageNameDate] = useState(null)
    const [hijriLanguageNameYear, setHijriLanguageNameYear] = useState(null)
    const [hijriLanguageNameMonth, setHijriLanguageNameMonth] = useState(null)


    // const [gregorianDateYear, setGregorianDateYear] = useState('');
    // const [gregorianDateMonth, setGregorianDateMonth] = useState('');
    // const [gregorianDateDay, setGregorianDateDay] = useState('');
    // const [gregorianDateName, setGregorianDateName] = useState('');



    const [gregorianLanguage, setGregorianLanguage] = useState('')

    const componentRef = useRef(null);

    // from the convertgregorianfile
    const handleHijriDataDate = (data) => {
        setHijriLanguageNameDate(data);
    };
    const handleHijriDataYear = (data) => {
        setHijriLanguageNameYear(data);
    };

    const handleHijriDataMonth = (data) => {
        setHijriLanguageNameMonth(data);
    };

    const handleHijriLanguageName = (data) => {
        setHijriLanguage(data)
    }

    // from  the ConvertHijri file
    // const handleGregorianDataDate = (data) => {
    //     setGregorianDateDay(data);
    // };
    // const handleGregorianDataYear = (data) => {
    //     setGregorianDateYear(data);
    // };

    // const handleGregorianDataMonth = (data) => {
    //     setGregorianDateMonth(data);
    // };

    // const handleGregorianLanguageName = (data) => {
    //     setGregorianDateName(data)
    // }

    const handleGregorianData = (newGregorianData) => {
        setGregorianLanguage(newGregorianData);
        console.log(newGregorianData);
    };

    // for switching components

    const handleSwitchCalender = () => {
        setSwitchCalender(!switchCalender)
    }
    const captureComponent = () => {
        if (componentRef.current) {
            html2canvas(componentRef.current).then((canvas) => {
                const dataURL = canvas.toDataURL('image/png');
                downloadImage(dataURL);
            });
        }
    };
    const downloadImage = (dataURL) => {
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'image.png';
        a.click();
    };
    return (
        <div >
            <div className="d-flex" >
                <div className="app">

                    <div className='conc_sec'>
                        <button onClick={handleSwitchCalender}>switch</button>
                    </div>

                    <div className="app-container">
                        <div className="month-select">
                            {
                                switchCalender ?
                                    <GregoriantoHijriConverter
                                        onHijriDataMonth={handleHijriDataMonth}
                                        onHijriDataYear={handleHijriDataYear}
                                        onHijriDataDate={handleHijriDataDate}
                                        monthNamejri={handleHijriLanguageName}
                                    />
                                    :
                                    <HijriToGregorianConverter
                                        onGregorianData={handleGregorianData}
                                    // onGregorianDataMonths={handleGregorianDataMonth}
                                    // onGregorianDatayears={handleGregorianDataYear}
                                    // onGregorianDataDate={handleGregorianDataDate}
                                    // onGregorianDataName={handleGregorianLanguageName}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_bg'>
                {hijriLanguage && (
                    <div>
                        <div className='main_result'>
                            <div className='result_comp' ref={componentRef} >
                                <span className='hijri_result'>
                                    <h1>{hijriLanguageNameDate}</h1>
                                    <h1>{hijriLanguage}</h1>
                                    <h1>{hijriLanguageNameYear}</h1>
                                    <h1>{hijriLanguageNameMonth}</h1>
                                </span>
                                <p>There might be a small probability of a day error</p>
                                <button>Go to Islamic Calender</button>


                            </div>
                        </div>
                        <div style={{ width: '100%', justifyContent: 'center', margin: 'auto', display: 'flex', paddingTop: '20px' }}>
                            <button onClick={captureComponent} style={{ zIndex: 7 }}>Save as Image</button>
                        </div>
                    </div>

                )}

            </div>
            <div className='second_bg'>
                {gregorianLanguage &&
                    (
                        <div className='main_result'>
                            <div className='result_comp' ref={componentRef} >
                                <span className='hijri_result'>
                                    <h1>{gregorianLanguage}</h1>
                                </span>
                                <p>There might be a small probability of a day error</p>
                                <button>Go to Islamic Calender</button>
                            </div>
                            <div style={{ width: '100%', justifyContent: 'center', margin: 'auto', display: 'flex', paddingTop: '20px' }}>
                                <button onClick={captureComponent} style={{ zIndex: 7 }}>Save as Image</button>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>
    )
}

export default CalenderInput;



