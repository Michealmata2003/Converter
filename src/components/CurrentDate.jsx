import React from 'react';



const CurrentDate = (props) => {
//   const [currentDate, setCurrentDate] = useState('');
  // const [age, setAge] = useState(null);

  

  return (
    <div style={{width:'100%'}}>
      <label htmlFor="dob">Enter Current Date: </label>
      <input
        className='datepicker-input'
        type="date"
        id="currentDate"
        value={props.currentDate}
        onChange={(e) => {props.setCurrentDate(e.target.value)}}
      />
      

      
    </div>
  );
};


export default CurrentDate ;