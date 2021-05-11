import { React, useState, useEffect } from "react"
import ScreenHeading from "../components/ScreenHeading";
import "./Users.css"
import "./UnverifiedDriver.css"
import axios from "axios";
import LoadingBar from 'react-top-loading-bar'
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";

const UnverifiedDriver = (params) => {
    var history = useHistory();
    const [progress, setProgress] = useState(0)
    var { id } = params;

    // user data
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAddress, setUserAddress] = useState({});
    const [userRating, setUserRating] = useState("4.5")
    const [userEmail, setUserEmail] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")

    const [drivingLicence, setDrivingLicence] = useState("")
    const [passport, setPassport] = useState("")
    const [australianCitizenship, setAustralianCitizenship] = useState("")
    const [australianVisa, setAustralianVisa] = useState("")
    const [bankCard, setBankCard] = useState("")
    const [federalPoliceCheck, setFederalPoliceCheck] = useState("")
    const [medicare, setMedicare] = useState("")
    const [residenceProof, setResidenceProof] = useState("")
    const [driivngHistory, setDrivingHistory] = useState("")

    const URL="https://dlivr.herokuapp.com";

    const getUnverifiedDriver = () => {
        axios({
            method: "GET",
            url: URL+`/driver/${id}`,

        })
            .then(res => {
                var baseRoot;
                baseRoot = res.data.data[0].getdriver[0]
                console.log(baseRoot);
                setUserName(baseRoot.name)
                setUserPhone(baseRoot.phone)
                setUserAddress(baseRoot.addresses)
                setUserEmail(baseRoot.email)
                setUserRating("4.5")
                var registrationDate = new Date(baseRoot.createdAt)
                setRegistrationDate(`${registrationDate.getDate()}.${registrationDate.getMonth() + 1}.${registrationDate.getFullYear()}`)

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
                // console.log(err.response.data.message)
            })
    }

    const verifyDriver = async ()=>{
        axios({
            method:"PUT",
            url:URL+`/admin/verifyDriver/${id}`
        })
        .then(res=>{
            // console.log(res.data.message)
            toast.success(res.data.message);
            history.push("/userAccount");

        })
        .catch(err=>{
            toast.info(err.response.data.message)
            console.log(err.response.data.message)
        })
    }

    useEffect(() => {
        setProgress(50)
        getUnverifiedDriver();
        setProgress(100)
    }, [])
    return (
        <>
            <LoadingBar color="#6f2da8" height={3} loaderSpeed={600} progress={progress} onLoaderFinished={() => setProgress(0)} />

            <ScreenHeading heading="Unverified Driver Details" />
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
                            <p>{userAddress.length > 0 ? userAddress[0].city + ", " + userAddress[0].country + " - " + userAddress[0].postal_code : "User Profile Not Updated Yet"}</p>
                        </div>
                        <div className="userDataRow">
                            <i class="fas fa-star"></i>
                            <p>{userRating}</p>
                        </div>
                    </div>
                    <div className="divData">
                        <p className="registrationDate">Registratered On {registrationDate} </p>
                        <div className="userDataRow">
                            <i className="far fa-envelope"></i>
                            <p>{userEmail}</p>
                        </div>
                        <div className="userDataRow">
                            <i className="fas fa-globe-asia"></i>
                            <p>{userAddress.length > 0 ? userAddress[0].country : "User Profile Not Updated Yet"}</p>
                        </div>

                    </div>
                </div>
                <div className="documents">
                    <div className="primary_documents">
                        <p className="document_heading">Primary Documents</p>
                        <a href={drivingLicence} target="_blank" className="document">Driving Licence <i className="fas fa-file-export"></i></a>
                        <a href={passport} target="_blank" className="document">Passport <i className="fas fa-file-export"></i></a>
                    </div>
                    <div className="secondary_document">
                        <p className="document_heading">Secondary Documents</p>
                        <a href={australianCitizenship} target="_blank" className="document">Australian Citizenship<i className="fas fa-file-export"></i></a>
                        <a href={australianVisa} target="_blank" className="document">Australian Visa <i className="fas fa-file-export"></i></a>
                        <a href={bankCard} target="_blank" className="document">Bank Card <i className="fas fa-file-export"></i></a>
                        <a href={federalPoliceCheck} target="_blank" className="document">Federal Police Chech <i className="fas fa-file-export"></i></a>
                        <a href={medicare} target="_blank" className="document">Medicare <i className="fas fa-file-export"></i></a>
                        <a href={residenceProof} target="_blank" className="document">Residence Proof <i className="fas fa-file-export"></i></a>

                    </div>
                    {driivngHistory !== "https://storage.googleapis.com/dlivr-55a47.appspot.com/null" && 
                    <div className="additional_document">
                        <p className="document_heading">Addtional Documents</p>
                        <a href={driivngHistory} target="_blank" className="document">Driving History <i className="fas fa-file-export"></i></a>

                    </div>
                    }

                </div>
                <div className="customerButtons">
                    <p className="customer_btn" onClick={()=> verifyDriver()}>Approve</p>
                    <p className="customer_btn">Reject</p>
                    <p className="customer_btn">Contact Via Nail</p>
                </div>
            </div>
        </>
    )
}

export default UnverifiedDriver;