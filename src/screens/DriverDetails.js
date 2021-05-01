import React,{useState} from 'react';
import "./DriverDetails.css";
import Jobs from "../components/Jobs";
import SupReq from "../components/SupReq";
var FontAwesomeIcon = require('react-fontawesome');

function DriverDetails() {
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
        <div className="driver-det">
            <div className="driver-det-head">
                <h1 className="dri-head">Driver Details</h1>
                <button className="dri-btn-head">dropDown btn</button>
            </div>
            <div className="dirver-det-con">
                <div className="driver-det-A">
                
               <div className="driver-image dri-det-a">
               <img 
                alt="driverImage"
                className="circle-img-newdriver"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"

                />
                </div> 

                <div className="dri-det-b">
                <div className="details-chunk">
                    <h3>Name</h3>
                    </div>
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
                  
                </div>
               
                <div className="dri-det-c">
                <div className="details-chunk">
                    <h4>Registered on Date</h4>
                    </div>
                    <div className="details-chunk">
                    <FontAwesomeIcon 
                   className='icons'
                   name='envelope'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   
                   phone
                    </div>

                    <div className="details-chunk">
                    <FontAwesomeIcon 
                   className='icons'
                   name='globe'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   
                   address
                    </div>
                    <div className="details-chunk">
                    {/* <FontAwesomeIcon 
                   className='icons'
                   name='mobile'
                   size='1x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   some number */}
                   language- english, french
                    </div>
                
                </div>
                   
                </div>
                <div className="driver-det-B">
                <h4>Primary Documents</h4>
                    <div className="pri-doc">
                    
                        <div>
                        <p>
                        Drivin License <i class="far fa-check-circle"></i>
                        </p>
                        <button className="pri-doc-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button> 
                        </div> 
                        <div>
                        <p>
                        Passport <i class="far fa-check-circle"></i>
                        </p>
                        <button className="pri-doc-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                        </div>
                           
                    </div>
                    <h4>Secondary Documents</h4>
                    <div className="sec-doc-a">
                    <div>
                        <p>Certificate of Australian Citizenship <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download"></i></button>
                    </div>
                    <div>
                        <p>Australian Visa <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                    </div>
                    <div>
                        <p>Proof of Residence <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                    </div>
                    <div>
                        <p>Bank Card <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                    </div>
                    <div>
                        <p>Medicare Card <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                    </div>
                    </div>
                    <h4>Secondary Documents</h4>
                    <div className="sec-doc-b">
                    <div>
                        <p>Federal Police Check <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-b-btn">attach.pdf 
                        <i class="fas fa-download"></i>
                        </button>
                    </div>
                    
                    </div>
                    <h4>Addtional Documents</h4>
                    <div className="add-doc">
                    <p> Driving History(12 Months) <i class="far fa-check-circle"></i></p>
                    <button className="sec-doc-b-btn">attach.pdf 
                    <i class="fas fa-download"></i>
                    </button>
                    </div>
                    
                    <div className="dri-btn">
                    <button className="dri-btn-a">Approve</button>
                    <button className="dri-btn-b">Reject</button>
                    <button className="dri-btn-b">Contact via Mail</button>
                    </div>
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

export default DriverDetails
