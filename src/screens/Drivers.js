import { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import "./Drivers.css";
import Jobs from "../components/Jobs";
import SupReq from "../components/SupReq";
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading";



function Driver() {

    const [name, setName] = useState("...");
    const [phone, setPhone] = useState("...");
    const [email, setEmail] = useState("...");
    const [pin, setPin] = useState("...");
    const [address, setAddress] = useState("...");
    const [rating, setRating] = useState("...");
    const [country, setCountry] = useState("...");
    const [state, setState] = useState("...");
    const [city, setCity] = useState("...");
    const [postal_code, setPostal_code]=useState("...");
    const [image,setimage] = useState(null);
    const [jobs,setJobs]=useState(false);
    const [support, setSupport]=useState(false);
    
    const { id } = useParams();

    const URL="https://dlivr.herokuapp.com";

    useEffect(() => {
         async function getData() {
            await axios({
                method: 'get',
                url: URL+`/driver/${id}`
            })
                .then(res => {
                    var driver = res.data.data[0].getdriver[0];
                    console.log(driver)
                    var addresses=driver.addresses[0]
                    setName(driver.name);
                    setPhone(driver.phone);
                    setEmail(driver.email);
                    setPin(driver.pin);
                    setAddress(driver.address);
                    setCountry(addresses.country);
                    setState(addresses.state);
                    setCity(addresses.city);
                    setPostal_code(addresses.postal_code);
                    setRating(driver.total_rating);
                    setimage(driver.image);    
                })
                .catch(err => console.log(err))      
                }

                getData();
     }, [id])
    async function BanDriver() {
         await axios({
                    method: 'PUT',
                    url: URL+`/admin/banDriver/${id}`,
                    data: {
                        is_banned:true
                    }
                })
                .then(res => {
                    console.log("banned");
                    // console.log(res);
                    })
                .catch(err => console.log(err))
                 }
        

   async function Revoke() {
    await axios({
                    method: 'PUT',
                    url: URL+`/admin/unbanDriver/${id}`,
                    data: {
                        is_banned:false
                    }
                })
                .then(res => {
                //   console.log(res);
                  console.log('unbanned');   
                })
                .catch(err => console.log(err))
        }


    const goToJobs = e =>{
        
        setJobs(true);
        setSupport(false);
        console.log("jobs")
    } 
    const goToSupportReq =e=>{
        setSupport(true);
        setJobs(false);

    }
    
   
    return (
        <div className="driver-det">
            <div className="driver-det-head">
            <ScreenHeading heading="Driver Details" />
                <button className="dri-btn-head">dropDown btn</button>
            </div>
            <div className="dirver-det-con">
                <div className="driver-det-A">
                
               <div className="driver-image dri-det-a">
               <img 
                alt="driverImage"
                className="circle-img-newdriver"
                src={image}
                />
                </div> 

                <div className="dri-det-b">
                <div className="details-chunk">
                    <h3>{name}</h3>
                    </div>
                    <div className="details-chunk">
                    <i className="fas fa-phone-alt icons"></i>
                   
                    {phone}
                    </div>

                    <div className="details-chunk">
                    <i class="fas fa-map-marker-alt icons"></i>
                   
                    {city+", "+country+", "+postal_code}
                    </div>
                    <div className="details-chunk">
                    <i class="fas fa-mobile-alt icons"></i>
                   {pin}
                    </div>
                  
                </div>
               
                <div className="dri-det-c">
                <div className="details-chunk">
                    <h3>Registered On 00-00-0000</h3>
                    </div>
                    <div className="details-chunk">
                    <i class="far fa-envelope icons"></i>
                   
                   {email}
                    </div>

                    <div className="details-chunk">
                    <i class="fas fa-globe-europe icons"></i>
                   
                    {country}
                    </div>
                    <div className="details-chunk">
                    <i class="fas fa-star icons-star"></i>
                   {rating}
                    </div>
                
                </div>
                   
                </div>
                <div className="dri-btn">
                    <button className="dri-btn-a" onClick={BanDriver}>Ban</button>
                    <button className="dri-btn-b" onClick={Revoke}>Revoke</button>
                    <button className="dri-btn-b">Contact via Mail</button>
                </div>
                <div className="driver-det-B">
                <h4>Primary Documents</h4>
                    <div className="pri-doc">
                        <div>
                        <p>
                        Drivin License <i class="far fa-check-circle"></i>
                        </p>
                        <button className="pri-doc-btn">attach.pdf 
                        <i className="fas fa-download dri-icon-download"></i>
                        </button> 
                        </div> 
                        <div>
                        <p>
                        Passport <i class="far fa-check-circle"></i>
                        </p>
                        <button className="pri-doc-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download"></i>
                        </button>
                        </div>
                        </div>
                    <h4>Secondary Documents</h4>
                    <div className="sec-doc-a">
                    <div>
                        <p>Certificate of Australian Citizenship <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download-b"></i></button>
                    </div>
                    <div>
                        <p>Australian Visa <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download-b"></i>
                        </button>
                    </div>
                    <div>
                        <p>Proof of Residence <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download-b"></i>
                        </button>
                    </div>
                    <div>
                        <p>Bank Card <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download-b"></i>
                        </button>
                    </div>
                    <div>
                        <p>Medicare Card <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-a-btn ">attach.pdf 
                        <i class="fas fa-download dri-icon-download-b"></i>
                        </button>
                    </div>
                    </div>
                    <h4>Secondary Documents</h4>
                    <div className="sec-doc-b">
                    <div>
                        <p>Federal Police Check <i class="far fa-check-circle"></i></p>
                        <button className="sec-doc-b-btn">attach.pdf 
                        <i class="fas fa-download dri-icon-download-c"></i>
                        </button>
                    </div>
                    </div>
                    <h4>Addtional Documents</h4>
                    <div className="add-doc">
                    <p> Driving History(12 Months) <i class="far fa-check-circle"></i></p>
                    <button className="sec-doc-b-btn">attach.pdf 
                    <i class="fas fa-download dri-icon-download-c"></i>
                    </button>
                    </div>    
                </div>
            </div>
            <div className="nav-btn-con">
            <button className="nav-btn-driver" onClick={goToJobs}>Jobs</button> 
            <button className="nav-btn-driver" onClick={goToSupportReq}>Support Requests</button> 
            </div>

            <div>
                {jobs===true && <Jobs/>}
            </div>
            <div>
                {support===true && <SupReq/>}
            </div>
            
        </div>
    )
}

export default Driver
