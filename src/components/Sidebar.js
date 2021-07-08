import "./Sidebar.css"
import Logo from "./Logo.png"
import { NavLink } from 'react-router-dom';
import Yogi_Ji from "./Yogi_Ji.jpeg"
function Sidebar() {
  return (
    <>
    <div className="sidebar_main_div">
        <div className="sidebar">
            <div className="sidebar_header">
                {/* <img src={Logo} alt="..."/> */}
                <img 
                alt="adminImage"
                className=""
              src="https://hmgroup.com/wp-content/uploads/2020/10/cq5dam.web_.976.603.01-1.jpeg"              
                />
                <div className="details">
                            <p className="name">Yogi Adityanath</p>
                            <p className="role">logout</p>
                            {/* <div className="logout ">
                                <i className="fas fa-sign-out-alt ">
                                logout
                                </i>
                              
                            </div> */}
                            
                            
                        </div>
                        
            </div>
            <p className="divider"></p>
            <div className="sidebar_elements">
            <NavLink to="/dashboard" className="element" activeClassName="active_element">
                    <i className="fas fa-th-large"></i>
                    <p className="element_title">
                        Dashboard
                    </p>
                </NavLink>
                <NavLink to="/adminAccount" className="element" activeClassName="active_element">
                    <i className="fas fa-briefcase"></i>
                    <p className="element_title">
                        Admin Account
                    </p>
                </NavLink>
                <NavLink to="/userAccount" className="element" activeClassName="active_element">
                    <i className="far fa-user"></i>
                    <p className="element_title">
                        User Account
                    </p>
                </NavLink>
                <NavLink to="/tracking" className="element" activeClassName="active_element">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="element_title">
                        Tracking
                    </p>
                </NavLink>
                <NavLink to="/vehicles" className="element" activeClassName="active_element">
                    <i className="fas fa-bicycle"></i>
                    <p className="element_title">
                        Vehicles
                    </p>
                </NavLink>
                <NavLink to="/support" className="element" activeClassName="active_element">
                    <i className="fas fa-headset"></i>
                    <p className="element_title">
                        Support
                    </p>
                </NavLink>
                <NavLink to="/offer" className="element" activeClassName="active_element">
                    <i className="fas fa-cubes"></i>
                    <p className="element_title">
                        Offers
                    </p>
                </NavLink>
            </div>
        </div>
    </div>
    </>
  );
}

export default Sidebar;