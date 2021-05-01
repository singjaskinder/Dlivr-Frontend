import React,{useState} from 'react';
import "./UserDetails.css";
import { Button } from '@material-ui/core';
import Jobs from "../components/Jobs";
import SupReq from "../components/SupReq";

var FontAwesomeIcon = require('react-fontawesome');


function UserDetails() {
    const [jobs,setJobs]=useState(false);
    const [support, setSupport]=useState(false);
   
    const goToJobs = e =>{
        
        setJobs(true);
        setSupport(false);
        console.log("jobs")
    } 
    const goToSupportReq =e=>{
        setSupport(true);
        setJobs(false);

    }
    
    return (
        <div className="userDetail-screen">
            
                <h1 className="user-det-head">User Details</h1>
            
            <div className="main-container">
               <div className="container-a">
                 
               <div className="user-detail">
               <div className="user-image">
               <img 
                alt="userImage"
                className="circle-img-newuser"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"

                />
                   </div> 
               <div className="user-detail-a">
                   <h2 className="des-h2">Name</h2>
                   <div className="details-chunk">
                   
                   
                   <FontAwesomeIcon 
                   className='icons'
                   name='phone'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   
                   phone
                   </div>
                   <div className="details-chunk">
                   <FontAwesomeIcon 
                   className='icons'
                   name='map-marker'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   
                   address
                   </div>
                  
                   <div className="details-chunk">
                   <FontAwesomeIcon 
                   className='icons'
                   name='mobile'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   some number
                   </div>
                   
                   <br/>
                   </div> 
               <div className="user-detail-b">
                  <h5 className="des-h5">Registered on Date</h5>
                  <div className="details-chunk">
                  <FontAwesomeIcon 
                   className='icons'
                   name='far fa-envelope'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                  email
                  </div>
                  <div className="details-chunk">
                  <FontAwesomeIcon 
                   className='icons'
                   name='globe'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                  
                  country
                  </div>
                  <div className="details-chunk">
                  <FontAwesomeIcon 
                   className='icons icon-rating'
                   name='star'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                  rating
                  </div>
                  
                  
                  </div> 
            </div>

                   </div> 
               <div className="container-b">
               <button  className="usr-btn">Ban</button> 
               <button  className="usr-btn">Revoke</button> 
               <button  className="usr-btn">Contact Via Mail</button> 
               </div>

            </div>

            <div className="nav-btn-con">
            <button className="usr-btn nav-btn" onClick={goToJobs}>Jobs</button> 
            <button className="usr-btn nav-btn" onClick={goToSupportReq}>Support Requests</button> 
            </div>

            <div>
                {jobs===true && <Jobs/>}
            </div>
            <div>
                {support===true && <SupReq/>}
            </div>
            
        </div>
    )
}

export default UserDetails
