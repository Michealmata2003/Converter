import React, { useState, useRef } from 'react';
import GregoriantoHijriConverter from './ConvertGregorian';
import HijriToGregorianConverter from './ConvertHijri';
import html2canvas from 'html2canvas';




const CalenderInput = () => {

    const [switchCalender, setSwitchCalender] = useState(true)
    const [hijriLanguage, setHijriLanguage] = useState(null)
    const [hijriLanguageNameDate, setHijriLanguageNameDate] = useState(null)
    const [hijriLanguageNameYear, setHijriLanguageNameYear] = useState(null)
    const [hijriLanguageNameMonth, setHijriLanguageNameMonth] = useState(null)
    const [gregorianLanguage, setGregorianLanguage] = useState(null)

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


    const handleGregorianData = (data) => {
        setGregorianLanguage(data);
    };

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
        <div>
            <div className="d-flex" >
                <div className="app">

                    <div className='conc_sec'>
                        <button onClick={handleSwitchCalender}>switch</button>
                    </div>

                    <div className="app-container d-flex">
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
                                    <HijriToGregorianConverter onGregorianData={handleGregorianData} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_bg'>
                {hijriLanguage && (
                    <div>
                        <div className='main_result'>
                            <div className='result_comp'
                            //  ref={componentRef}
                             >
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
        </div>

    )
}

export default CalenderInput;