import React from 'react';
import '../style/InputComp.css';
import main_bg from '../Assets/main_bg.png';
// import age from '../Assets/age.svg';
import Age from '../components/age';
import Calender from '../components/calender';
import Timeline from '../components/timeline';

const Converter = () => {
  return (
    <div>
      <div className='main_bg'>
        <img src={main_bg} alt='' />
        <div className='input_comp'>
          <nav>
            <div className='age_nav'>
              <p>Age</p>
              {/* <img src={age}/> */}
            </div>
            <div className='cal_nav'>
              <p>Calender</p>
            </div>
            <div className='time_nav'>
              <p>Timeline</p>
            </div>
          </nav>
          <Age />
          {/* <Calender /> */}
          {/* <Timeline /> */}

        </div>
        <div className='result_comp'>

        </div>
        <button>Save as Image</button>
      </div>
    </div>
  )
}

export default Converter