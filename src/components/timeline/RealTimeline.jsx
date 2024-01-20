import React from "react";
import { Chrono } from "react-chrono";

import { DommyData } from './DateDommy'
function RealTimeline() {
    return (

        <div style={{
            width: '80%', justifyContent: 'space-between',
            margin: 'auto',
            boxShadow: ' 0px 6px 12px 0px #2337504d',
            backgroundColor: 'white'

        }}>
            <div  >
                <Chrono
                    style={{
                        width: '80%',
                     justifyContent: 'space-between',
                        margin: 'auto',
                        

                    }}
                    items={DommyData}
                    timelinePointShape="square"
                    timelinePointDimension={20}
                />
            </div>
        </div>
    );
}
export default RealTimeline;

// import { CssBaseline, Container, Typography } from '@mui/material';
// import Timeline from './timeline';
// import { DommyData } from './DateDommy'
// import './Timeline.css'

// const RealTimeline = () =>
//     DommyData.length > 0 && (
//         <div style={{
//             width: '80%', justifyContent: 'space-between',
//             margin: 'auto',
//             boxShadow: ' 0px 6px 12px 0px #2337504d',
//             backgroundColor: 'white'

//         }}>
//             <div className="timeline-container" >
//                 {DommyData.map((data, idx) => (
//                     <Timeline data={data} key={idx} />
//                 ))}
//             </div>
//         </div>
//     );


// export default RealTimeline;
// // const RealTimeline = () => {
// //     return (
// //         <div>
// //             <div>
// //                 {/* <CssBaseline /> */}
// //                 <div style={{
// //                     width: '80%', justifyContent: 'space-between',
// //                     margin: 'auto',
// //                     boxShadow: ' 0px 6px 12px 0px #2337504d',

// //                 }}>
// //                     <Timeline />
// //                 </div>
// //             </div>

// //         </div>
// //     );
// // };