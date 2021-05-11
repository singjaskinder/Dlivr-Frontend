import React from 'react';
import "./SupReq.css";
var FontAwesomeIcon = require('react-fontawesome');
function SupReq() {
    return (
        <div>
            <div className="sup-container" >
            <div className="sup">
               <div>
               <FontAwesomeIcon 
                   className='sup-icon'
                   name='far fa-circle'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
               </div>
               <div>
               <FontAwesomeIcon 
                   className='sup-icon'
                   name="far fa-star"
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
               </div>
                
                
                <h5>ID</h5>
                <h5>Detail</h5>
                <h5>Date</h5>
               
            </div>
        </div>
        </div>
    )
}

export default SupReq
