import "./temp.css"
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Tracking.css"
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading"





function Order(prop) {
    return (
        <NavLink className="ref" to={"tracking/" + prop.id} >
            <div className="iorder">
                <span>
                    {prop.id}
                </span>
                <span>
                    {prop.date}
                </span>
                <span>
                    {prop.location}
                </span>
                <span>
                    {prop.driver}
                </span>
                <span>
                    {prop.status}
                </span>
            </div>
        </NavLink>
    )
}
function Tracking() {

    const [Job,setJob] = useState([]);

    const  GetJob = async ()=>{

        axios({
            method:"POST",
            url:"/admin/getJobs",
            data:{
                recordsPerPage: 30
            }
        })
        .then(res => {
            console.log(res.data.data[0].foundJobs)
            setJob(res.data.data[0].foundJobs);
            
        })
        .catch(err=> console.log(err))
    }



    useEffect(()=>{
        GetJob();
    },[])

    return (
        <div className="tracking">
            <ScreenHeading 
                heading="Track Jobs"
            />
            <div className="trackinghead">
                <span>Id</span>
                <span>Date</span>
                <span>Location</span>
                <span>Driver</span>
                <span>Status</span>
            </div>
            <div className="trackinglist" id="trackinglist">
                {
                    Job.map((job,index)=>{
                             return(
                                 <div>
                                 <Order

                                id={job._id}
                                date="17.06.2021"
                                location={job.pick_address}
                                status={job.status}
                                driver="DriverOP"
                                 />
                                 </div>
                             )
                    })
                }
            </div>
        </div>
    );
}


export default Tracking;
