import React from 'react';
import "./AdminDetails.css";
import AdminCard from '../components/AdminCard';
import {useHistory} from 'react-router-dom';
import ScreenHeading from "../components/ScreenHeading"


function AdminDetails() {
    const history = useHistory();
    function addAdmin(){
       
        history.push('/adminAccount/create');
    }
    return (
        <div className="admin-acc">
            <div className="admin-head-con">
            <ScreenHeading 
                heading="Admin Account"
            />           
           <button 
           type="submit"  
           value="AddNew"
           onClick={addAdmin}
           className="add-admin-btn"
           >Add New
           </button>
            </div>
            
        
            <div className="admin-card-con">
                <div className="ad-card">
                <AdminCard
                 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
            name="admin1"
            position="manger"
            email="admin1@gmail.com"
            />
            
            <AdminCard 
            
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
            name="admin1"
            position="manger"
            email="admin1@gmail.com"
            />
            
            <AdminCard 
            
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
            name="admin1"
            position="manger"
            email="admin1@gmail.com"
            />
            
            <AdminCard 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
            name="admin1"
            position="manger"
            email="admin1@gmail.com"
            />
                </div>
                </div>
            
            
            
        </div>
    )
}

export default AdminDetails
