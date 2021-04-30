import "./temp.css"
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Tracking.css"
import axios from "axios";





function Order(prop) {
    return (
        <NavLink  className="ref" to={"tracking/" + prop.id} >
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

    const [job, setJob] = useState({});


    useEffect(async () => {

        console.log("111");
        await axios({
            method: 'post',
            url: '/admin/getJobs',
            data: {
                lastJobId: null,
                recordsPerPage: 10
            }
        })
            .then(response => {
                // const list = document.getElementById("trackinglist")
                const data = response.data.data[0].foundJobs;
                console.log(data);
                console.log("0w9w0")
                setJob(data);
                console.log(job);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="tracking">
            <div className="trackinghead">
                <span>Id</span>
                <span>Date</span>
                <span>Location</span>
                <span>Driver</span>
                <span>Status</span>
            </div>
            <div className="trackinglist">
            <Order 
                         
                         key="0"
                         id= "3493223"
                         date="17-09-2021"
                         location="Chennai"
                         status="Bidding"
                         driver="Rakesh"
 
 
                         
                         />
                 {/* {job.map((job, index) => {
                    return (
                        <Order 
                         
                        key={index}
                        id= {job.id}
                        date={job.delivered_date}
                        location={job.pick_location}
                        status={job.status}
                        driver="Driver1"


                        
                        />
                    );
                })} */}
            </div>
        </div>
    );
}


export default Tracking;
