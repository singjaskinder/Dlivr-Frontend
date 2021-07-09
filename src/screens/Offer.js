import "./temp.css"
import { useState, useEffect } from "react";
import "./Offer.css"
import axios from "axios";
import ScreenHeading from "../components/ScreenHeading"

const URL="https://dlivr.herokuapp.com";


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

    const [Offers, setOffer] = useState([]);
    const [description, setdescription] = useState();
    const [offValue, setoffValue] = useState();
    const [offerCode, setofferCode] = useState();
    const [expiration, setexpiration] = useState();
    const [message, setMessage] = useState();



    const GetOffer = async () => {

        axios.get("/admin/offer/all", {
           headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}
        }).then(res => {               
            console.log(res)
                setOffer(res.data.data[0]);
            })
            .catch(err => console.log(err))
    }

    const postOffer = async (e) => {


        e.preventDefault();
        axios({
            method: "POST",
            url: URL+"/admin/608195e25774e94c0c706a23/addoffer",
            data: {
                description,
                offValue,
                offerCode,
                expiration
            },
            headers:{ "Content-Type": "application/json",
            "Authorization":"Bearer "+ JSON.parse(localStorage.getItem("token"))}
        })
            .then(res => {
                setdescription("")
                setoffValue("")
                setofferCode("")
                setexpiration("")
                setMessage(res.data.message);
                GetOffer();

            })
            .catch(err => {
                alert("Got error")
                console.log(err)
            })
    }

    useEffect(() => {
        GetOffer();
    }, [])


    return (
        <div >
            <div className="offer">
                <div>
                    <ScreenHeading
                        heading="Offers"
                    />
                </div>
                <div>
                    <form class="form" onSubmit={postOffer}>
                        <label >ADD OFFER</label><br></br>
                        <label className="message">{message}</label><br></br>
                        <label >Description</label>
                        <input className="form-control" required placeholder="Description" type="text" onChange={(e) => setdescription(e.target.value)} value={description}>
                        </input>
                        <label > OFF Value</label>
                        <input className="form-control" required placeholder="% OFF Value" onChange={(e) =>{if(e.target.value >100 || isNaN(e.target.value)) return ; else  setoffValue(e.target.value) } } name="offValue" type="text" value={offValue} >
                        </input>
                        <br></br>
                        <label >Offer Code</label>
                        <label >Expiration</label>
                        <input className="form-control a" required placeholder="must be 7  charcter long" onChange={(e) => setofferCode(e.target.value)} type="text" value={offerCode} >
                        </input>

                        <input className="form-control a" required placeholder={new Date()} type="date" onChange={(e) => setexpiration(e.target.value)} value={expiration} >
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
                            Offers.map((offer, index) => {
                                return (
                                    <div>
                                        <Pastoffer

                                            key={offer._id}
                                            offerCode={offer.offerCode}
                                            description={offer.description}
                                            expiration={offer.expiration.split("T")[0]}
                                            users={offer.users.length}
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

