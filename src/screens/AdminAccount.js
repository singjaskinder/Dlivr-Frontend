import "./temp.css"
import axios from "axios";
import {useEffect} from "react";
function AdminAccount(){
    useEffect(()=>{
        async function getData(){
            await axios({
                method: 'get',
                url: '/vehicle/allVehicleCount'
              })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
        }

        getData();

    })
    return(
        <>
        <h1 className="temp">AdminAccount Screen</h1>
        </>
    );
}


export default AdminAccount;
