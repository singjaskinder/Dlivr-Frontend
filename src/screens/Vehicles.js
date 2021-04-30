import { useState, useEffect } from "react";
import "./Vehicles.css"
import { NavLink } from "react-router-dom";
import ScreenHeading from "../components/ScreenHeading";
import axios from "axios";
function Vehicles() {
    const [vehicleCount, setVehicleCount] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        async function getData() {
            await axios({
                method: 'get',
                url: '/vehicle/allVehicleCount'
            })
                .then(res => {
                    setVehicleCount(res.data.data.vehicleCount)
                })
                .catch(err => console.log(err))

        }

        getData();

        async function getVehicles() {
            await axios({
                method: 'POST',
                url: '/admin/getVehicles',
                data: {
                    recordsPerPage: 25
                }
            })
                .then(res => {
                    setVehicles(res.data.data[0].foundVehicles)
                })
                .catch(err => console.log(err))

        }
        getVehicles();
    }, []);
    return (
        <>
            <ScreenHeading heading="Vehicles" />
            <div className="vehicleCount">
                <div className="data">
                    <p className="data_heading">Total Vehicles</p>
                    <p className="data_count">{vehicleCount}</p>
                </div>
                <div className="icon">
                    <i className="fas fa-truck"></i>
                </div>
            </div>
            <div className="filters">
                <div className="filter">
                    <p className="filter_heading">Type</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="filter">
                    <p className="filter_heading">Color</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="reset">
                    <p className="filter_heading">Reset</p>
                </div>
            </div>
            <div className="row">
                <div className="row_heading">
                    <li>Vehicle Type</li>
                    <li>Vehicle No.</li>
                    <li>Capacity</li>
                    <li>Driver</li>
                </div>
                {vehicles.map((item, index) => {
                    return (
                        <NavLink to={`/vehicles/${item._id}`} key={index} className="row_data">
                            <li>{item.type}</li>
                            <li>{item.number}</li>
                            <li>{item.load_capacity}</li>
                            <li>{item.owner_id.name}</li>
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
}


export default Vehicles;
