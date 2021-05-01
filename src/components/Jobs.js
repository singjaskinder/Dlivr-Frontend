import React from 'react';
import "./Jobs.css";

function Jobs() {
    return (
        <div className="job-container" >
            <div className="jobs">
                <h5>ID</h5>
                <h5>Detail</h5>
                <h5>Date</h5>
                <h5>Location</h5>
                <h5>Driver</h5>
                <h5>Status</h5>
            </div>
            <div className="jobs-det">
                <h4>ID</h4>
                <h4>Detail</h4>
                <h4>Date</h4>
                <h4>Location</h4>
                <h4>Driver</h4>
                <h4>Status</h4>
            </div>
        </div>
    )
}

export default Jobs
