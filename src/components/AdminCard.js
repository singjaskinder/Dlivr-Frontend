import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// import "../material-dashboard-react.css"
import "./AdminCard.css";


const URL = "https://dlivr.herokuapp.com";
function AdminCard(props) {
    const history = useHistory();
    const deleteAdmin = () => {
        if (window.confirm(`delete admin ${props.name}?`)) {
            axios.delete(`${URL}/admin/deleteAdmin/${props.admin_id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
                }
            })
                .then(res => {
                    toast.success(`${props.name} admin deleted!`)
                    history.push("/dashboard")
                })
                .catch(err => {
                    console.log(err)
                    toast.error("Something went wrong!")
                })
        }
        else {
            console.log("clicked no")
        }
    }
    return (
        <div className="admin-card-con">
            <div className="admin-card">
                <i onClick={() => deleteAdmin()} className="delete_admin_icon fas fa-times"></i>
                <div className="ad-img">
                    <i className="fas fa-user admin_icon"></i>
                </div>
                <div className="adm-detail">
                    <p className="ad-name">{props.name}</p>
                    <p className="ad-pos">{props.position}</p>
                    <p className="ad-email">{props.email}</p>

                </div>
            </div>
        </div>
    )
}

export default AdminCard
