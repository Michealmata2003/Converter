import React from 'react';
import './Timeline.css'



const Timeline = ({ data }) => (
  
  <div className="timeline-item">
      <div className="timeline-item-content">
         
          <time>{data.date}</time>
          <p>{data.description}</p>
          
          <span className="circle" />
      </div>
  </div>
);

export default Timeline










