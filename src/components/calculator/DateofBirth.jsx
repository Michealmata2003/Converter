import React from 'react';



const DateofBirth = (props) => {
  // const [age, setAge] = useState(null);
  

  return (
    <div style={{width:'100%', }}>
      <label htmlFor="dob">Enter Date of Birth: </label>
      <input
      className='datepicker-input'
        type="date"
        id="birthDate"
        value={props.birthDate || ''}
        onChange={(e) => {props.setBirthDate(e.target.value)}}
      />
    </div>
  );
};


export default DateofBirth ;