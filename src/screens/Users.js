import { React, useState, useEffect } from "react"
import ScreenHeading from "../components/ScreenHeading";
import "./Users.css"
import axios from "axios";
import LoadingBar from 'react-top-loading-bar'
import { toast } from "react-toastify";

const URL="https://dlivr.herokuapp.com";

const Users = (params) => {
    const [progress, setProgress] = useState(0)
    var { id } = params;
    const [userRecentJobs, setUserRecentJobs] = useState([]);
    const [userJobs, setUserJobs] = useState(true);
    const [userServices, setUserServices] = useState(false)

    // user data
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAddress, setUserAddress] = useState({});
    const [userRating, setUserRating] = useState("4.5")
    const [userEmail, setUserEmail] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")




    const setJobs = () => {
        setUserJobs(true);
        setUserServices(false)
    }
    const setServices = () => {
        setUserJobs(false);
        setUserServices(true)
    }

    const getUser = () => {
        axios({
            method: "GET",
            url: URL+`/admin/user/${id}`,
            headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}

        })
            .then(res => {
                // console.log(res)
                console.log(res.data.data[0].user)
                setUserName(res.data.data[0].user.name)
                setUserPhone(res.data.data[0].user.phone)
                setUserAddress(res.data.data[0].user.addresses)
                setUserEmail(res.data.data[0].user.email)
                setUserRating("4.5")
                var registrationDate = new Date(res.data.data[0].user.createdAt)
                setRegistrationDate(`${registrationDate.getDate()}.${registrationDate.getMonth() + 1}.${registrationDate.getFullYear()}`)

            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
            })
    }

    const getJobs = () => {
        axios({
            method: "GET",
            url: URL+`/admin/jobs?id=${id}`
        })
            .then(res => {
                setUserRecentJobs(res.data.data[0].alljobs)
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
            })
    }

    const banUser = () => {
        axios({
            method: "PUT",
            url: URL+`/admin/banUser/${id}`,
            headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}
        })
            .then(res => {
                toast.success(res.data.message);
                console.log(res)
            })
            .catch(err => {
                toast.info(err.response.data.message);
                console.log(err.response.data.message)
            })
    }

    const unBanUser = () => {
        axios({
            method: "PUT",
            url: URL+`/admin/unbanUser/${id}`,
            headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}
        })
            .then(res => {
                toast.success(res.data.message);
                console.log(res)
            })
            .catch(err => {
                toast.info(err.response.data.message);
                console.log(err.response.data.message)
            })
    }

    useEffect(() => {
        setProgress(50)
        getUser();
        setProgress(70)
        if (userJobs) {
            getJobs()
            setProgress(100)
            
        }
        if(userServices){
            setProgress(100)
        }
    }, [userJobs])

    return (
        <>
        <LoadingBar color="#6f2da8" height={3} loaderSpeed={600} progress={progress} onLoaderFinished={() => setProgress(0)} />
        
            <ScreenHeading heading="Customer Details" />
            <div className="userDataDiv">
                <div className="userData">
                    <div className="profilePic">
                        <img src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" alt="" />
                    </div>
                    <div className="divData">
                        <p className="userName">{userName}</p>
                        <div className="userDataRow">
                            <i className="fas fa-phone-alt"></i>
                            <p>{userPhone}</p>
                        </div>
                        <div className="userDataRow">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>{userAddress.length > 0 ? userAddress[0].city + ", " + userAddress[0].country + " - " + userAddress[0].postal_code : "loading.."}</p>
                        </div>
                        <div className="userDataRow">
                            <i class="fas fa-star"></i>
                            <p>{userRating}</p>
                        </div>
                    </div>
                    <div className="divData">
                        <p className="registrationDate">Registratered On {registrationDate}</p>
                        <div className="userDataRow">
                            <i className="far fa-envelope"></i>
                            <p>{userEmail}</p>
                        </div>
                        <div className="userDataRow">
                            <i className="fas fa-globe-asia"></i>
                            <p>{userAddress.length > 0 ? userAddress[0].country : "loading..."}</p>
                        </div>

                    </div>
                </div>
                <div className="customerButtons">
                    <p onClick={()=> banUser()} className="customer_btn">Ban</p>
                    <p  onClick={()=> unBanUser()} className="customer_btn">Revoke</p>
                    <p className="customer_btn">Contact Via Nail</p>
                </div>
            </div>
            <div className="customerStats">
                <div className="jobOrService">
                    <p onClick={() => setJobs()} className={userJobs ? "jobOrService_btn active_jobOrService_btn" : "jobOrService_btn"}>Jobs</p>
                    <p onClick={() => setServices()} className={userServices ? "jobOrService_btn active_jobOrService_btn" : "jobOrService_btn"}>Service Requests</p>
                </div>
                {userJobs && <div className="customerStats_rows">
                    <div className="customerStats_rowHeading">
                        <p className="customerStats_rowHeadingElement">ID</p>
                        <p className="customerStats_rowHeadingElement">Detail</p>
                        <p className="customerStats_rowHeadingElement">Date</p>
                        <p className="customerStats_rowHeadingElement">Location</p>
                        <p className="customerStats_rowHeadingElement">Driver</p>
                        <p className="customerStats_rowHeadingElement">Status</p>
                    </div>
                    {userRecentJobs.map((item, index) => {
                        return (
                            <div key={index} className="customerStats_rowBody">
                                <p className="customerStats_rowBodyElement">{item._id}</p>
                                <p className="customerStats_rowBodyElement">{item.package_title}</p>
                                <p className="customerStats_rowBodyElement">00-00-0000</p>
                                <p className="customerStats_rowBodyElement">{item.pick_address}</p>
                                <p className="customerStats_rowBodyElement">{item.driverId ? item.driverId : "Not assigned"}</p>
                                <p className="customerStats_rowBodyElement">{item.status}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </>
    )
}

export default Users;