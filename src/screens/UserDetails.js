import React from "react"
import {
    useParams
} from "react-router-dom";
import User from "../screens/Users"
import Driver from "../screens/Drivers";

import UnverifiedDriver from "../screens/UnverifiedDriver"

const UserDetails = () => {
    const {user, id} = useParams();
    console.log({user, id})
    return (
        <>
        {user==="unverifiedDriver" && <UnverifiedDriver id={id}/>}
        {user==="user" && <User id={id}/>}
        {user==="driver" && <Driver id={id}/>}
        
        </>
    )
}

export default UserDetails;