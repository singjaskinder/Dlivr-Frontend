import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import "./Jobs.css";

import axios from "axios";

const URL="https://dlivr.herokuapp.com";

function Jobs() {
    const { id } = useParams();
    const [jobs, setjobs] = useState([]);


    useEffect(() => {
        async function getData() {
            await axios({
                method: 'get',
                url: URL+`/job/past/${id}`
                
            })
                .then(res => {
                    setjobs(res.data.data[0].alljobs)
                })
                .catch(err => console.log(err))

        }

        getData();

    }, []);
    return (
        <div className="job-container" >
            <div className="jobs">
                <li>ID</li>
                <li>Detail</li>
                <li>Date</li>
                <li>Location</li>
                <li>Status</li>
            </div>
           
            {jobs.map((job, index) => {
                    return (
                        <div className="jobs-det" key={index} >
                        
                        <li>{job._id}</li>
                        <li>{job.job_type}</li>
                        <li>{job.delivered_date}</li>
                        <li>{job.drop_address}</li>
                        
                        <li>{job.status}</li>
                        </div>
                            
                    );
                   
                })}
                  
           
        </div>
    )
}

export default Jobs
