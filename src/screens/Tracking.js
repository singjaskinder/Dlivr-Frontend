import "./temp.css"
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Tracking.css"
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading"

const URL="https://dlivr.herokuapp.com";



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
    const [lastJobId,setlastJobId]=useState(null);
    const [pageno ,setpageno]=useState(0);

    const  GetJob = async ()=>{

        axios({
            method:"GET",
            url:URL+`/admin/jobs`,
            params:{
                recordsPerPage: 10,
                lastJobId
            },
            headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}
        })
        .then(res => {
            console.log(res.data.data[0].foundJobs)
            setJob(res.data.data[0].foundJobs);
            setlastJobId(res.data.data[0].lastJobId)
            if(res.data.data[0].foundJobs.length  === 10){
                setpageno((prev)=>prev+1);
            }
            else{
                setpageno(0);
            }
            
        })
        .catch(err=> {
            console.log(err)
            alert("got error")
        })
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
            <div>
                <button className="btn bg-page">
                    {pageno}
                </button>
                <button className="btn bg-next"btn-info onClick={GetJob}>
                    next
                </button>
            </div>
        </div>
    );
}


export default Tracking;
