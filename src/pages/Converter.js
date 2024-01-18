import React, { useState } from 'react';
import '../style/InputComp.css';
import main_bg from '../Assets/main_bg.png';
import ageIcon from '../Assets/age.svg';
import timelineIcon from '../Assets/Timeline.svg';
import Age from '../components/age';
import Calender from '../components/calender';
import Timeline from '../components/timeline';
import DateConverter from '../components/ConvertGregorian';

const Converter = () => {
  const [showAgeComp, setShowAgeComp] = useState(true);
  const [showCalenderComp, setShowCalenderComp] = useState(false);
  const [showTimelineComp, setShowTimelineComp] = useState(false);

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
  return (
    <div>
      <div className='main_bg'>
        <div className='input_comp'>
          <nav >
            <div onClick={handleShowAgeComp} className={ageaction ? ' age_nav' : 'cal_nav'}>
              <p>Age</p>
              <img src={ageIcon} />
            </div>


            <div onClick={handleShowCalComp} className={calaction ? ' age_nav' : 'cal_nav'}>
              <img src={ageIcon} />
              <p>Calender</p>
            </div>


            <div onClick={handleShowTimelineComp} className={timeaction ? ' age_nav' : 'cal_nav'}>
              <img src={timelineIcon} />
              <p>Timeline</p>
            </div>

          </nav>
          {showAgeComp ? <Age /> : null}
          {showCalenderComp ? <Calender /> : null}
          {/* {showCalenderComp ? <DateConverter /> : null} */}
          {showTimelineComp ? <Timeline /> : null}

        </div>
        <div className='second_bg'>

        </div>
        {/* <div className='result_comp'>
          <button>Save as Image</button>
        </div> */}
      </div>
    </div>
  )
}

export default Converter