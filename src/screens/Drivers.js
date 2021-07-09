import { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import "./Drivers.css";
import LoadingBar from 'react-top-loading-bar'
import { toast } from "react-toastify";
import {Link} from "react-router-dom"
import Jobs from "../components/Jobs";
import SupReq from "../components/SupReq";
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading";


const URL = "https://dlivr.herokuapp.com";

function Driver(params) {

    // const [name, setName] = useState("...");
    // const [phone, setPhone] = useState("...");
    // const [email, setEmail] = useState("...");
    // const [pin, setPin] = useState("...");
    // const [address, setAddress] = useState("...");
    // const [rating, setRating] = useState("...");
    // const [country, setCountry] = useState("...");
    // const [state, setState] = useState("...");
    // const [city, setCity] = useState("...");
    // const [postal_code, setPostal_code] = useState("...");
    // const [image, setimage] = useState(null);
    // const [jobs, setJobs] = useState(false);
    // const [support, setSupport] = useState(false);

    // const { id } = useParams();

    // const URL = "https://dlivr.herokuapp.com";

    // useEffect(() => {
    //     async function getData() {
    //         await axios({
    //             method: 'get',
    //             url: URL + `/admin/driver/${id}`,
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
    //             }
    //         })
    //             .then(res => {
    //                 var driver = res.data.data[0];
    //                 console.log(driver)
    //                 var addresses = driver.addresses[0]
    //                 setName(driver.name);
    //                 setPhone(driver.phone);
    //                 setEmail(driver.email);
    //                 setPin(driver.pin);
    //                 setAddress(driver.address);
    //                 setCountry(addresses.country);
    //                 setState(addresses.state);
    //                 setCity(addresses.city);
    //                 setPostal_code(addresses.postal_code);
    //                 setRating(driver.total_rating);
    //                 setimage(driver.image);
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //                 alert("got error")
    //             })
    //     }

    //     getData();
    // }, [id])
    // async function BanDriver() {
    //     await axios({
    //         method: 'PUT',
    //         url: URL + `/admin/banDriver/${id}`,
    //         data: {
    //             is_banned: true
    //         }
    //     })
    //         .then(res => {
    //             console.log("banned");
    //             // console.log(res);
    //         })
    //         .catch(err => console.log(err))
    // }


    // async function Revoke() {
    //     await axios({
    //         method: 'PUT',
    //         url: URL + `/admin/unbanDriver/${id}`,
    //         data: {
    //             is_banned: false
    //         }
    //     })
    //         .then(res => {
    //             //   console.log(res);
    //             console.log('unbanned');
    //         })
    //         .catch(err => console.log(err))
    // }


    // const goToJobs = e => {

    //     setJobs(true);
    //     setSupport(false);
    //     console.log("jobs")
    // }
    // const goToSupportReq = e => {
    //     setSupport(true);
    //     setJobs(false);

    // }

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



    const [primaryDocument, setPrimaryDocument] = useState([])
    const [secondaryDocument, setSecondaryDocument] = useState([])
    const [additionalDocument, setAdditionalDocument] = useState([])

    const [drivingLicence, setDrivingLicence] = useState("")
    const [passport, setPassport] = useState("")
    const [australianCitizenship, setAustralianCitizenship] = useState("")
    const [australianVisa, setAustralianVisa] = useState("")
    const [bankCard, setBankCard] = useState("")
    const [federalPoliceCheck, setFederalPoliceCheck] = useState("")
    const [medicare, setMedicare] = useState("")
    const [residenceProof, setResidenceProof] = useState("")
    const [driivngHistory, setDrivingHistory] = useState("")

    const setJobs = () => {
        setUserJobs(true);
        setUserServices(false)
    }
    const setServices = () => {
        setUserJobs(false);
        setUserServices(true)
    }

    const getDriver = () => {
        axios({
            method: "GET",
            url: URL + `/admin/driver/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }

        })
            .then(res => {
                // console.log(res)
                console.log(res.data.data[0].addresses)
                setUserName(res.data.data[0].name)
                setUserPhone(res.data.data[0].phone)
                setUserAddress(res.data.data[0].addresses)
                setUserEmail(res.data.data[0].email)
                setUserRating("4.5")
                var registrationDate = new Date(res.data.data[0].createdAt)
                setRegistrationDate(`${registrationDate.getDate()}.${registrationDate.getMonth() + 1}.${registrationDate.getFullYear()}`)

                const baseRoot = res.data.data[0];
                console.log(baseRoot.primary_document)
                setPrimaryDocument(baseRoot.primary_document)
                setSecondaryDocument(baseRoot.secondary_document)
                setAdditionalDocument(baseRoot.additional_document)

                setDrivingLicence(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.primary_document[0].driving_license}`)
                setPassport(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.primary_document[0].passport}`)
                setAustralianCitizenship(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].australian_citizenship}`)
                setAustralianVisa(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].australian_visa}`)
                setBankCard(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].bank_card}`)
                setFederalPoliceCheck(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].federal_police_check}`)
                setMedicare(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].medicare}`)
                setResidenceProof(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.secondary_document[0].residence_proof}`)
                setDrivingHistory(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${baseRoot.additional_document[0].driving_history}`)


            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
            })
    }

    const getJobs = () => {
        axios({
            method: "GET",
            url: URL + `/admin/getDriverJobs/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
            .then(res => {
                setUserRecentJobs(res.data.data)
                // console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
                alert("got error")
                console.log(err.response.data.message)
            })
    }

    const BanDriver = () => {
        axios({
            method: "PUT",
            url: URL + `/admin/banDriver/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
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

    const unBanDriver = () => {
        axios({
            method: "PUT",
            url: URL + `/admin/unbanDriver/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
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
        getDriver();
        setProgress(70)
        if (userJobs) {
            getJobs()
            setProgress(100)

        }
        if (userServices) {
            setProgress(100)
        }
    }, [userJobs])


    return (
        // <div className="driver-det">
        //     <div className="driver-det-head">
        //         <ScreenHeading heading="Driver Details" />
        //         <button className="dri-btn-head">dropDown btn</button>
        //     </div>
        //     <div className="dirver-det-con">
        //         <div className="driver-det-A">

        //             <div className="driver-image dri-det-a">
        //                 <img
        //                     alt="driverImage"
        //                     className="circle-img-newdriver"
        //                     src={image}
        //                 />
        //             </div>

        //             <div className="dri-det-b">
        //                 <div className="details-chunk">
        //                     <h3>{name}</h3>
        //                 </div>
        //                 <div className="details-chunk">
        //                     <i className="fas fa-phone-alt icons"></i>

        //                     {phone}
        //                 </div>

        //                 <div className="details-chunk">
        //                     <i class="fas fa-map-marker-alt icons"></i>

        //                     {city + ", " + country + ", " + postal_code}
        //                 </div>
        //                 <div className="details-chunk">
        //                     <i class="fas fa-mobile-alt icons"></i>
        //                     {pin}
        //                 </div>

        //             </div>

        //             <div className="dri-det-c">
        //                 <div className="details-chunk">
        //                     <h3>Registered On 00-00-0000</h3>
        //                 </div>
        //                 <div className="details-chunk">
        //                     <i class="far fa-envelope icons"></i>

        //                     {email}
        //                 </div>

        //                 <div className="details-chunk">
        //                     <i class="fas fa-globe-europe icons"></i>

        //                     {country}
        //                 </div>
        //                 <div className="details-chunk">
        //                     <i class="fas fa-star icons-star"></i>
        //                     {rating}
        //                 </div>

        //             </div>

        //         </div>
        //         <div className="dri-btn">
        //             <button className="dri-btn-a" onClick={BanDriver}>Ban</button>
        //             <button className="dri-btn-b" onClick={Revoke}>Revoke</button>
        //             <button className="dri-btn-b">Contact via Mail</button>
        //         </div>
        //         <div className="driver-det-B">
        //             <h4>Primary Documents</h4>
        //             <div className="pri-doc">
        //                 <div>
        //                     <p>
        //                         Drivin License <i class="far fa-check-circle"></i>
        //                     </p>
        //                     <button className="pri-doc-btn">attach.pdf
        //                         <i className="fas fa-download dri-icon-download"></i>
        //                     </button>
        //                 </div>
        //                 <div>
        //                     <p>
        //                         Passport <i class="far fa-check-circle"></i>
        //                     </p>
        //                     <button className="pri-doc-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download"></i>
        //                     </button>
        //                 </div>
        //             </div>
        //             <h4>Secondary Documents</h4>
        //             <div className="sec-doc-a">
        //                 <div>
        //                     <p>Certificate of Australian Citizenship <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-a-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-b"></i></button>
        //                 </div>
        //                 <div>
        //                     <p>Australian Visa <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-a-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-b"></i>
        //                     </button>
        //                 </div>
        //                 <div>
        //                     <p>Proof of Residence <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-a-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-b"></i>
        //                     </button>
        //                 </div>
        //                 <div>
        //                     <p>Bank Card <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-a-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-b"></i>
        //                     </button>
        //                 </div>
        //                 <div>
        //                     <p>Medicare Card <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-a-btn ">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-b"></i>
        //                     </button>
        //                 </div>
        //             </div>
        //             <h4>Secondary Documents</h4>
        //             <div className="sec-doc-b">
        //                 <div>
        //                     <p>Federal Police Check <i class="far fa-check-circle"></i></p>
        //                     <button className="sec-doc-b-btn">attach.pdf
        //                         <i class="fas fa-download dri-icon-download-c"></i>
        //                     </button>
        //                 </div>
        //             </div>
        //             <h4>Addtional Documents</h4>
        //             <div className="add-doc">
        //                 <p> Driving History(12 Months) <i class="far fa-check-circle"></i></p>
        //                 <button className="sec-doc-b-btn">attach.pdf
        //                     <i class="fas fa-download dri-icon-download-c"></i>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="nav-btn-con">
        //         <button className="nav-btn-driver" onClick={goToJobs}>Jobs</button>
        //         <button className="nav-btn-driver" onClick={goToSupportReq}>Support Requests</button>
        //     </div>

        //     <div>
        //         {jobs === true && <Jobs />}
        //     </div>
        //     <div>
        //         {support === true && <SupReq />}
        //     </div>

        // </div>
        <>
            <LoadingBar color="#6f2da8" height={3} loaderSpeed={600} progress={progress} onLoaderFinished={() => setProgress(0)} />

            <ScreenHeading heading="Driver Details" />
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
                            <p>{userAddress.length > 0 ? userAddress[0].city + ", " + userAddress[0].country + " - " + userAddress[0].postal_code : "not updated"}</p>
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
                            <p>{userAddress.length > 0 ? userAddress[0].country : "not updated"}</p>
                        </div>

                    </div>
                </div>
                <div className="customerButtons">
                    <p onClick={() => BanDriver()} className="customer_btn">Ban</p>
                    <p onClick={() => unBanDriver()} className="customer_btn">Revoke</p>
                    <p className="customer_btn">Contact Via Nail</p>
                </div>
                <div className="documents">
                    <div className="primary_documents">
                        <p className="document_heading">Primary Documents</p>
                        {primaryDocument.length > 0 ?
                            <>

                                <a href={drivingLicence} target="_blank" className="document">Driving Licence <i className="fas fa-file-export"></i></a>
                                <a href={passport} target="_blank" className="document">Passport <i className="fas fa-file-export"></i></a>
                            </>
                            : "Not updated yet"
                        }
                    </div>

                    <div className="secondary_document">
                        <p className="document_heading">Secondary Documents</p>
                        {secondaryDocument.length > 0 ?
                            <>
                                <a href={australianCitizenship} target="_blank" className="document">Australian Citizenship<i className="fas fa-file-export"></i></a>
                                <a href={australianVisa} target="_blank" className="document">Australian Visa <i className="fas fa-file-export"></i></a>
                                <a href={bankCard} target="_blank" className="document">Bank Card <i className="fas fa-file-export"></i></a>
                                <a href={federalPoliceCheck} target="_blank" className="document">Federal Police Chech <i className="fas fa-file-export"></i></a>
                                <a href={medicare} target="_blank" className="document">Medicare <i className="fas fa-file-export"></i></a>
                                <a href={residenceProof} target="_blank" className="document">Residence Proof <i className="fas fa-file-export"></i></a>
                            </>
                            : "Not updated yet"
                        }

                    </div>
                    {driivngHistory !== "https://storage.googleapis.com/dlivr-55a47.appspot.com/null" &&
                        <div className="additional_document">
                            <p className="document_heading">Addtional Documents</p>
                            {additionalDocument.length > 0 ?
                                <a href={driivngHistory} target="_blank" className="document">Driving History <i className="fas fa-file-export"></i></a>
                                : "Not updated yet"
                            }

                        </div>
                    }

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
                    {userRecentJobs.length > 0 ? userRecentJobs.map((item, index) => {
                        return (
                            <Link to={`/tracking/${item._id}`}>
                                <div key={index} className="customerStats_rowBody">
                                    <p className="customerStats_rowBodyElement">{item._id}</p>
                                    <p className="customerStats_rowBodyElement">{item.package_title}</p>
                                    <p className="customerStats_rowBodyElement">00-00-0000</p>
                                    <p className="customerStats_rowBodyElement">{item.pick_address}</p>
                                    <p className="customerStats_rowBodyElement">{item.driverId ? item.driverId : "Not assigned"}</p>
                                    <p className="customerStats_rowBodyElement">{item.status}</p>
                                </div>
                            </Link>
                        )
                    }) : "No Jobs posted yet"}
                </div>}
            </div>
        </>

    )
}

export default Driver
