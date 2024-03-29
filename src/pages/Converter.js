import React, { useState, useRef } from 'react';
import '../style/InputComp.css';
import '../style/Responsiveness.css';
import ageIcon from '../Assets/age.svg';
import calenderIcon from '../Assets/calender.svg';
import timelineIcon from '../Assets/Timeline.svg';
import Age from '../components/calculator/age';
import Calender from '../components/calender/calender';
import Timeline from '../components/timeline/timeline';
import html2canvas from 'html2canvas';
import RealTimeline from '../components/timeline/RealTimeline';


const Converter = () => {
  const [gregorianLanguageParent, setGregorianLanguageParent] = useState('');

  const [hijriLanguageParent, setHijriLanguageParent] = useState('');
  const [hijriLanguageNameDateParent, setHijriLanguageNameDateParent] = useState(null);
  const [hijriLanguageNameYearParent, setHijriLanguageNameYearParent] = useState(null);
  const [hijriLanguageNameMonthParent, setHijriLanguageNameMonthParent] = useState(null);


  const componentRef = useRef(null);

  const [showAgeComp, setShowAgeComp] = useState(true);
  const [showCalenderComp, setShowCalenderComp] = useState(false);
  const [showTimelineComp, setShowTimelineComp] = useState(false);

  const [ageData, setAgeData] = useState(null);
  const [hijrimi, setHijri] = useState(null);
  const [gregorianmi, setGregorianmi] = useState(null);


  const [ageaction, setAgeAction] = useState(true);
  const [calaction, setCalAction] = useState(false);
  const [timeaction, setTimeAction] = useState(false);

  const handleShowAgeComp = () => {
    setShowAgeComp(true)
    setAgeAction(true)
    setCalAction(false)
    setTimeAction(false)
    setShowCalenderComp(false)
    setShowTimelineComp(false)
  }
  const handleShowCalComp = () => {
    setShowAgeComp(false)
    setAgeAction(false)
    setCalAction(true)
    setTimeAction(false)
    setShowCalenderComp(true)
    setShowTimelineComp(false)
  }
  const handleShowTimelineComp = () => {
    setShowAgeComp(false)
    setShowCalenderComp(false)
    setShowTimelineComp(true)
    setAgeAction(false)
    setCalAction(false)
    setTimeAction(true)
  }
  const handleAgeData = (data) => {
    setAgeData(data);
    
  };

  const handlehijriLanguagex = (data) => {
    setHijri(data);
  };
  const handlegregorianLanguagex = (data) => {
    setGregorianmi(data);
  };
  const captureComponent = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        downloadImage(dataURL);
      });
    }
    setAgeData(null)
    setHijriLanguageParent('')
    setGregorianLanguageParent('')
  };
  const downloadImage = (dataURL) => {
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'component.png';
    a.click();
  };
  const handleGregorianLanguageParent = (data) => {
    setGregorianLanguageParent(data);
  };

  const handleHijriLanguageParent = (data) => {
    setHijriLanguageParent(data);
  };

  const handleHijriLanguageNameDateParent = (data) => {
    setHijriLanguageNameDateParent(data);
  };

  const handleHijriLanguageNameYearParent = (data) => {
    setHijriLanguageNameYearParent(data);
  };

  const handleHijriLanguageNameMonthParent = (data) => {
    setHijriLanguageNameMonthParent(data);
  };
  return (
    
<div>
  <div className='main_bg'>
    <div>
      <div className='input_comp' >
        <nav >
          <div onClick={handleShowAgeComp} className={ageaction ? ' age_nav' : 'cal_nav'}>
            <p>Age</p>
            <img src={ageIcon} alt='' />
          </div>


          <div onClick={handleShowCalComp} className={calaction ? ' age_nav' : 'cal_nav'}>
            <img src={calenderIcon} alt='' />
            <p>Calender</p>
          </div>


          <div onClick={handleShowTimelineComp} className={timeaction ? ' age_nav' : 'cal_nav'}>
            <img src={timelineIcon} alt='' />
            <p>Timeline</p>
          </div>

        </nav>
        <div >

          {showAgeComp ? <Age onAgeData={handleAgeData} /> : null}
          {showCalenderComp ? <Calender
            gregorianLanguagex={gregorianLanguageParent}
            hijriLanguagex={hijriLanguageParent}
            onGregorianLanguage={handleGregorianLanguageParent}
            onHijriLanguage={handleHijriLanguageParent}
            onHijriLanguageNameDate={handleHijriLanguageNameDateParent}
            onHijriLanguageNameYear={handleHijriLanguageNameYearParent}
            onHijriLanguageNameMonth={handleHijriLanguageNameMonthParent}
          />
            : null
          }
          {showTimelineComp ? <RealTimeline /> : null}
        </div>
      </div>
    </div>
  </div>
  <div className='second_bg'>
    {ageData && (
      <div>
        <div className='main_result'>
          <div className='age_result'>
            <div>
              {ageData && (
                <p>
                  Your Age : {ageData.years} <span>yrs</span>,
                  {ageData.months} <span>mos</span> ,
                  {ageData.days} <span>days</span>,
                </p>
              )}
            </div>

          </div>
          <div className='result_comp' ref={componentRef}>
            <h5>That means you have spent...</h5>
            <div >
              {/* <p> {ageData.years} years,</p> */}
              <p> {ageData.months} months,</p>
              <p>or {ageData.weeks} weeks,</p>
              <p>or {ageData.days} days,</p>
              <p>or{ageData.hours} hours,</p>
              <p>or  {ageData.minutes} minutes,</p>
              <p>or {ageData.seconds} seconds</p>
              <p>...on Earth 🌎</p>
            </div></div>
        </div>

        <div style={{ width: '100%', justifyContent: 'center', margin: 'auto', display: 'flex', paddingTop: '20px' }}>
          <button onClick={captureComponent} style={{ zIndex: 7 }}>Save as Image</button>
        </div>
      </div>

    )}

  </div>
  <div className='secong_bg'>
    {hijriLanguageParent && (
      <div className='main_result'>
        <div>

          <p>Hijri Language: {hijriLanguageParent}</p>
          <p>Hijri Language Name Date: {hijriLanguageNameDateParent}</p>
          <p>Hijri Language Name Year: {hijriLanguageNameYearParent}</p>
          <p>Hijri Language Name Month: {hijriLanguageNameMonthParent}</p>
        </div>
      </div>
    )}
  </div>
  <div>
    <div className='main_result'>
    {gregorianLanguageParent && <p>Gregorian Language: {gregorianLanguageParent}</p>
    }
    </div>
  </div>
</div>
  )
}

export default Converter