import "./temp.css"
import react, { useState, useEffect } from "react";
import "./Offer.css"



function Pastoffer(prop) {
    return (
        <div className="offers">
            <span>
                Okay
            </span>
            <span>
                Okay
            </span>
            <span>
                Okay
            </span>
            <span>
                Okay
            </span>
        </div>
    )
}




function Offer() {
    return (
        <div >
            <div className="offer">
                <div>
                    <p className=" fs-3 text-light">Offer</p>
                </div>
                <div>
                    <form class="form">
                        <label >ADD OFFER</label><br></br>
                        <label >Description</label>
                        <input className="form-control"  placeholder="Description" type="text" >
                        </input>
                        <label >Terms and Conditions</label>
                        <input className="form-control" placeholder="Terms and Condtitons" type="text" >
                        </input>
                        <label >Offer Code</label>
                        <label >Expiration</label>
                        <input className="form-control a" placeholder="must be 7  charcter long" type="text" >
                        </input>

                        <input className="form-control a" placeholder={ new Date()} type="date" >
                        </input>
                        <button className="btn bttns">
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
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    < Pastoffer
                    />
                    </div>


                </div>
            </div>
        </div>
    );
}


export default Offer;

