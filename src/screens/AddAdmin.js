import React from 'react';
import "./AddAdmin.css";

function AddAdmin() {
    return (
        <div className="add-admin-screen">
           <h2 className="new-ad-head">New Admin</h2> 
            <div className="add-admin">
              
            <div className="con-a">
               <div className="con-a-a">
               <img 
                alt="adminImage"
                className="circle-img-addadmin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"

                />
                <i class="fas-ad fa-plus-circle"></i>
               </div>
               <div className="con-a-b">
                   <input
                   className="all-in lg-in"
                   placeholder="Name"
                   >
                   </input>
                   <div className="sm-inputs">
                   <input
                   className="sm-in all-in"
                   placeholder="Phone Number"
                   >     
                   </input>
                   <input
                   className="sm-in sm-inn all-in"
                   placeholder="Email Address"
                   ></input>
                   </div>
                   <input 
                   className="all-in lg-in"
                   placeholder="Address/Location"
                   >
                       
                   </input>
                   <i class="fas fa-location"></i>
                  
                   <div className="main-btn-con">
                   <h3>Position</h3>
                   <br />
                   
                       

                    <div class="selectdiv">
                      <label>
                          <select>
                              <option selected> Select Box </option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Last long option</option>
                          </select>
                      </label>
                    </div>      
                   </div>
                             
                   
                   </div>
                  
            </div> 
           <div className="con-b">
              <button className="main-btn">Save</button>
           </div>
            </div>
           
        </div>
    )
}

export default AddAdmin
