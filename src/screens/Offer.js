import "./temp.css"
import react, { useState, useEffect } from "react";
import "./Offer.css"
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading"



function Pastoffer(prop) {
    return (
        <div className="offers">
            <span>
                {prop.offerCode}
            </span>
            <span>
                {prop.description}
            </span>
            <span>
                {prop.expiration}
            </span>
            <span>
                {prop.users}
            </span>
        </div>
    )
}




function Offer() {

    const [Offers,setOffer] = useState([]);
    const [description,setdescription] = useState();
    const [tAndc,settAndc] = useState();
    const [offerCode,setofferCode] = useState();
    const [Expiration,setExpiration] = useState();
    const [message,setMessage] = useState();



    const  GetOffer = async ()=>{

        axios({
            method:"GET",
            url:"/admin/offer/all",
        })
        .then(res => {
            console.log(res.data.data[0])
            setOffer(res.data.data[0]);
            
        })
        .catch(err=> console.log(err))
    }

    const  postOffer = async (e)=>{

        e.preventDefault();
        axios({
            method:"POST",
            url:"/admin/608195e25774e94c0c706a23/addoffer",
            data:{
                description,
                tAndc,
                offerCode,
                Expiration
            }
        })
        .then(res => {
                setdescription("")
                settAndc("")
                setofferCode("")
                setExpiration("")
            setMessage(res.data.message);
            GetOffer();
            
        })
        .catch(err=> console.log(err))
    }

    useEffect(()=>{
        GetOffer();
    },[])


    return (
        <div >
            <div className="offer">
                <div>
                <ScreenHeading 
                heading="Offers"
            />
                </div>
                <div>
                    <form class="form"   onSubmit={ postOffer}>
                        <label >ADD OFFER</label><br></br>
                        <label  className="message">{message}</label><br></br>
                        <label >Description</label>
                        <input className="form-control" required  placeholder="Description" type="text" onChange={(e)=>setdescription(e.target.value)}  value={description}>
                        </input>
                        <label >Terms and Conditions</label>
                        <input className="form-control" required placeholder="Terms and Condtitons" onChange={(e)=>settAndc(e.target.value)}    name="tAndc" type="text" value={tAndc} >
                        </input>
                        <label >Offer Code</label>
                        <label >Expiration</label>
                        <input className="form-control a" required placeholder="must be 7  charcter long" onChange={(e)=>setofferCode(e.target.value)}  type="text" value={offerCode} >
                        </input>

                        <input className="form-control a" required placeholder={ new Date()} type="date"  onChange={(e)=>setExpiration(e.target.value)}  value={Expiration} >
                        </input>
                        <button className="btn bttns" type="submit">
                            Publish
                        </button>
                    </form>
                </div>
                <div className="pastoffer">
                    <div className="offershead">
                        <span>Offer Code</span>
                        <span>Description</span>
                        <span>Expiration</span>
                        <span>Users</span>
                    </div>
                    <div className="list">
                    {
                    Offers.map((offer,index)=>{
                             return(
                                 <div>
                                 <Pastoffer
                                
                                key={offer._id}
                                offerCode={offer.offerCode}
                                description={offer.description}
                                expiration={offer.Expiration.split("T")[0]}
                                users="20"
                                 />
                                 </div>
                             )
                    })
                }
                    </div>


                </div>
            </div>
        </div>
    );
}


export default Offer;

