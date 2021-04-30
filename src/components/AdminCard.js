import React from "react";
// import "../material-dashboard-react.css"
import "./AdminCard.css";


function AdminCard(props) {
    return (
        
        <div className="admin-card">
             <div className="ad-img">
            <img
            className="circle-img  "
            src={props.img}
            alt="avatar_img"/>
             </div>
             <div className="adm-detail"> 
            <p className="ad-name">{props.name}</p>
            <p className="ad-pos">{props.position}</p>
            <p className="ad-email">{props.email}</p>
               
        </div>
        </div>
    )
}

export default AdminCard
