import React, { useState, useRef } from 'react';
import '../style/InputComp.css';
import main_bg from '../Assets/main_bg.png';
import ageIcon from '../Assets/age.svg';
import calenderIcon from '../Assets/calender.svg';
import timelineIcon from '../Assets/Timeline.svg';
import Age from '../components/age';
import Calender from '../components/calender';
import Timeline from '../components/timeline';
import html2canvas from 'html2canvas';

import DateConverter from '../components/ConvertGregorian';

const Converter = () => {
  const componentRef = useRef(null);

  const [showAgeComp, setShowAgeComp] = useState(true);
  const [showCalenderComp, setShowCalenderComp] = useState(false);
  const [showTimelineComp, setShowTimelineComp] = useState(false);

  const [ageData, setAgeData] = useState(null); // State to store age data


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
    a.download = 'component.png';
    a.click();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className='main_bg'>
        <div className='input_comp'>
          <nav >
            <div onClick={handleShowAgeComp} className={ageaction ? ' age_nav' : 'cal_nav'}>
              <p>Age</p>
              <img src={ageIcon} />
            </div>


            <div onClick={handleShowCalComp} className={calaction ? ' age_nav' : 'cal_nav'}>
              <img src={calenderIcon} />
              <p>Calender</p>
            </div>


            <div onClick={handleShowTimelineComp} className={timeaction ? ' age_nav' : 'cal_nav'}>
              <img src={timelineIcon} />
              <p>Timeline</p>
            </div>

          </nav>
          {showAgeComp ? <Age onAgeData={handleAgeData} /> : null}
          {showCalenderComp ? <Calender /> : null}
          {/* {showCalenderComp ? <DateConverter /> : null} */}
          {showTimelineComp ? <Timeline /> : null}

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
                      Your Age  {ageData.years} <span>yrs</span>,
                      {ageData.months} <span>months</span> ,
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

    </div>
  )
}

export default Converter