import { React, useEffect, useState } from 'react';
import "./AdminDetails.css";
import AdminCard from '../components/AdminCard';
import { useHistory } from 'react-router-dom';
import ScreenHeading from "../components/ScreenHeading"
import axios from 'axios';

const URL = "https://dlivr.herokuapp.com";
function AdminDetails() {
    const [admins, setAdmins] = useState([]);

    async function getAdmins() {
        axios({
            method: "get",
            url: URL + "/admin/all",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                // console.log(typeof(res.data.data[0].admins))
                setAdmins(res.data.data[0]);
            })
            .catch(err => {
                alert("got error")
                console.log(err)
            })
    }
    useEffect(() => {
        getAdmins();
    }, [])
    const history = useHistory();
    function addAdmin() {

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
                    {
                        admins.length > 0 ?
                            admins.map((item, index) => {
                                return (
                                    <>
                                        {item.name === JSON.parse(localStorage.getItem("name")) 
                                        ? 
                                        <AdminCard
                                        key={index}
                                        admin_id={item._id}
                                        // img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
                                        name={item.name}
                                        position="manger"
                                        email={item.email}
                                        canDelete={false}
                                    />
                                     :
                                            <AdminCard
                                                key={index}
                                                admin_id={item._id}
                                                // img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs-8jtqUvUSJnufK7jXePExzSUPkDPz7spA&usqp=CAU"
                                                name={item.name}
                                                position="manger"
                                                email={item.email}
                                                canDelete={true}
                                            />
                                        }
                                    </>
                                );
                            }) :
                            <div className="spinner_center_css">
                                <div className="spinner-border text-dark " role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>

                    }

                </div>
            </div>



        </div>
    )
}

export default AdminDetails
