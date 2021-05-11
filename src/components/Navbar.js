import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Yogi_Ji from "./Yogi_Ji.jpeg"

var DownArrow = "fas fa-angle-down";
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar_main">
                    <div className="search">
                        <div className="input_field">
                            <input type="text" placeholder="Search..." />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <NavLink to="/notifications" exact activeClassName="active_notification" className="notification">
                        <i className="far fa-bell"></i>
                    </NavLink>
                    <div className="profile">
                        <div className="profile_pic">
                            <img src={Yogi_Ji} alt="" />
                        </div>
                        <div className="details">
                            <p className="name">Yogi Adityanath</p>
                            <p className="role">Admin</p>
                        </div>

                        <NavItem icon={DownArrow}>
                            <div className="dropdown">
                                <div className="dropdown_element">
                                    <i className="fas fa-briefcase"></i>
                                    <p className="element_title">
                                        Admin Account
                                    </p>
                                </div>
                                <div className="dropdown_element">
                                <i className="fas fa-sign-out-alt"></i>
                                    <p className="element_title">
                                        Log Out
                                    </p>
                                </div>
                            </div>
                        </NavItem>
                    </div>
                </div>
            </div>
        </>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="expand" onClick={() => setOpen(!open)}>
                <i className={props.icon}></i>
            </div>
            {open && props.children}
        </>
    );
}

export default Navbar;
