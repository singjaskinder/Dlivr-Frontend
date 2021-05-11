import { useState, useEffect } from "react";
import "./Vehicles.css"
import { NavLink } from "react-router-dom";
import ScreenHeading from "../components/ScreenHeading";
import axios from "axios";
import SkeletonVehicle from "../skeleton/SkeletonVehicle"
import LoadingBar from 'react-top-loading-bar';

const URL="https://dlivr.herokuapp.com";


function Vehicles() {
    const [progress, setProgress] = useState(0)
    const [vehicleCount, setVehicleCount] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [searchByValue, setSearchByValue]= useState("selected")
    const [searchByNumber, setSearchByNumber]=useState("number");
    const [searchByDriverName, setSearchByDriverName] = useState("name");

    
    function ResultNotFound() {
        return (
            <div className="result-not-found">
                <h2>vehicle doesn't exist</h2>
                <i className="fas fa-times " onClick={reset}
                    type="reset" ></i>
            </div>
        )
    }
    const searchBy=(e)=>{
        setSearchByValue(e.target.value)
       
        if(searchByValue==="number"){
            setSearchByNumber(searchByValue)
         }
        if(searchByValue==="name"){
            setSearchByDriverName(searchByValue);
         }
    }
    const getFilteredVehicle=()=> {
        const filterVehicle = vehicles.filter(vehicle => {
            if(searchByValue==="number"){
                var searchValue=vehicle.number
            }
            if(searchByValue==="name"){
                searchValue= vehicle.owner_id.name
            }
        return ((searchValue).toLowerCase()).includes(input.toLowerCase())
         })
           setVehicles(filterVehicle);
       }
        
          const getinput =(e)=>{
            e.preventDefault();
            setInput(e.target.value);    
        }
        const reset=(e)=>{
            setVehicles(result)
            setInput("")
            }
        
    async function getVehicles() {
        await axios({
            method: 'GET',
            url: URL+'/admin/getVehicles',
            params: {
                recordsPerPage: 25
            }
        })
            .then(res => {
              input!==""?(getFilteredVehicle()): setVehicles(res.data.data[0].foundVehicles);
               setResult(res.data.data[0].foundVehicles)
              })
            .catch(err => console.log(err))
            }
   
    async function getData() {
        await axios({
            method: 'get',
            url: URL+'/vehicle/allVehicleCount'
        })
            .then(res => {
                setVehicleCount(res.data.data.vehicleCount)
            })
            .catch(err => console.log(err))

    }
    useEffect(() => {
        
        setProgress(progress + 70)
        setTimeout(() => {
            getData();
            setProgress(100)
        }, 1000)

        getVehicles();
    }, []);
    return (
        <>

            <LoadingBar color="#6f2da8" height={3} loaderSpeed={600} progress={progress} onLoaderFinished={() => setProgress(0)} />
            <ScreenHeading heading="Vehicles" />
            {vehicleCount === 0 && <SkeletonVehicle />}
            { vehicleCount !== 0 && <>

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
                    <div className="search-by-specific-field-con">
                    <select className="search-by-specific-field" value={searchByValue}  onChange={searchBy}>
                    <option selected="selected" >Select before Search</option>
                    <option value={searchByDriverName}>Search by Driver Name</option>
                    <option value={searchByNumber}>Search by Vehicle Number</option>
                   </select>
                    </div>
                    <div className="vehicle_searchField">

                    <i className="fas fa-search" 
                    onClick={getVehicles}
    
                    ></i>  
                    
                    <input type="text" 
                    placeholder="Search"
                    onChange={getinput}
                    value={input} />
                    {input!==""?
                    <i className="fas fa-times " 
                    
                    onClick={reset}
                    type="reset" ></i>:""
                }
                </div>
                </div>
                <div className="row">
                    <div className="row_heading">
                        <li>Vehicle Type</li>
                        <li>Vehicle No.</li>
                        <li>Capacity</li>
                        <li>Driver</li>
                    </div>
                    {console.log(vehicles)}
                    {vehicles!=""?
                    vehicles.map((item, index) => {
                        return (
                            <NavLink to={`/vehicles/${item._id}`} key={index} className="row_data">
                                <li>{item.type}</li>
                                <li>{item.number}</li>
                                <li>{item.load_capacity}</li>
                                <li>{item.owner_id.name}</li>
                            </NavLink>
                        );
                    }):<div><ResultNotFound/></div>
                }
                </div>
            </>
            }
        </>
    );
}


export default Vehicles;