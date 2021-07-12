import { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import "./VehicleData.css"
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading";
const URL="https://dlivr.herokuapp.com";
const ImageUrl = `https://storage.googleapis.com/dlivr-55a47.appspot.com/`;

function VehicleData() {
    const [vehicleType, setVehicleType] = useState("...");
    const [vehicleDriver, setVehicleDriver] = useState("...");
    const [vehicleNo, setVehicleNo] = useState("...");
    const [vehicleLoadCapacity, setVehicleLoadCapacity] = useState("...");
    const [vehicleDateOfRegistreation, setvehicleDateOfRegistreation] = useState("...");
    const [vehicleColour, setVehicleColour] = useState("...");
    const [vehicleIC, setVehicleIC] = useState("");
    const [vehicleRC, setVehicleRC] = useState("");
    const [vehicleIscC, setVehicleIscC] = useState("");
    const [vehicle_image, setVehicleImage] = useState("");
    const [vehicleName, setVehicleName] = useState("");
    const { id } = useParams();
    useEffect(() => {
        
        async function getData() {
            await axios({
                method: 'get',
                url: URL+`/vehicle/${id}`
            })
                .then(res => {
                    var vehicle = res.data.data[0];
                    console.log(vehicle)
                    setVehicleType(vehicle.type)
                    setVehicleDriver(vehicle.owner_id.name)
                    setVehicleNo(vehicle.number)
                    setVehicleLoadCapacity(vehicle.load_capacity)
                    var registrationDate = new Date(vehicle.createdAt)
                    setvehicleDateOfRegistreation(`${registrationDate.getDate()}-${registrationDate.getMonth() + 1}-${registrationDate.getFullYear()}`)
                    setVehicleColour(vehicle.color)
                    setVehicleIC(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${vehicle.insurance_certificate}`)
                    setVehicleRC(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${vehicle.registration_certificate}`);
                    setVehicleIscC(`https://storage.googleapis.com/dlivr-55a47.appspot.com/${vehicle.inspection_certificate}`)
                    setVehicleImage(vehicle.vehicle_image)
                    setVehicleName(vehicle.name)
                })
                .catch(err => console.log(err))
                
        }

        getData();
    }, [id])
    return (
        
        <>
            <ScreenHeading heading="Vehicle Details" />
            <div className="mainDataDiv">
                <div className="impData">
                    <div className="vehicleImage">
                        {/* <img src="https://storage.googleapis.com/dlivr-55a47.appspot.com/Chat/imgfile__1619084682730.webp" alt="..." /> */}
                        <img src={`${ImageUrl}${vehicle_image}`} alt="Couldn't load vehicle image" />
                    </div>
                    <div className="impData_data">
                        <div className="impData_row">
                            <p className="impData_heading">Vehicle Name</p>
                            <p className="impData_value">{vehicleName}</p>
                        </div>
                        <div className="impData_row">
                            <p className="impData_heading">Type</p>
                            <p className="impData_value">{vehicleType}</p>
                        </div>
                        <div className="impData_row">
                            <p className="impData_heading">Driver</p>
                            <p className="impData_value">{vehicleDriver}</p>
                        </div>
                        <div className="impData_row">
                            <p className="impData_heading">Vehicle Number</p>
                            <p className="impData_value">{vehicleNo}</p>
                        </div>
                    </div>

                </div>
                <div className="otherData">

                    <div className="data_row">
                        <p className="data_heading">Load Capacity</p>
                        <p className="data_value">{vehicleLoadCapacity}</p>
                    </div>
                    <div className="data_row">
                        <p className="data_heading">Date Of Registration</p>
                        <p className="data_value">{vehicleDateOfRegistreation}</p>
                    </div>
                    <div className="data_row">
                        <p className="data_heading">Colour</p>
                        <p className="data_value">{vehicleColour}</p>
                    </div>
                </div>

                <div className="documents">
                    <a href={vehicleIC} rel="noreferrer" target="_blank" className="document">
                        <p className="documentName">Insurance Certificate</p>
                        <i className="fas fa-cloud-download-alt"></i>
                    </a>
                    <a href={vehicleRC} rel="noreferrer" target="_blank" className="document">
                        <p className="documentName">Registration Certificate</p>
                        <i className="fas fa-cloud-download-alt"></i>
                    </a>
                    <a href={vehicleIscC} rel="noreferrer" target="_blank" className="document">
                        <p className="documentName">Inspection Certificate</p>
                        <i className="fas fa-cloud-download-alt"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default VehicleData;